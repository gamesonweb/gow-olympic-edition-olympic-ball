import Robot from './robot.js';



export default class Arena {
  constructor(scene, levelConfig) {
      this.scene = scene;
      this.map = levelConfig.ground.map;
      this.startPoint = levelConfig.startPoint;
      this.endPoint = levelConfig.endPoint;
      this.holeSize = levelConfig.holeSize;
      this.groundConfig = levelConfig.ground;
      this.holeColor = levelConfig.holeColor;
      this.wallsConfig = levelConfig.walls;
    this.movingWalls = [];
    this.robots = [];
    this.levelConfig = levelConfig;
    this.waterAreas = levelConfig.waterAreas; 
    this.waterSpeedReduction = 0.2; 

  }

  createGround() {
    let ground;
    if (this.map) {
      ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", this.map, {
        width: this.groundConfig.width,
        height: this.groundConfig.height,
        subdivisions: this.groundConfig.subdivisions,
        minHeight: this.groundConfig.minHeight,
        maxHeight: this.groundConfig.maxHeight,
      }, this.scene);
      
      ground.onReady = () => {
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.9 }, this.scene);
      };
    } else {
      ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: this.groundConfig.width,
        height: this.groundConfig.height,
        subdivisions: this.groundConfig.subdivisions,
      }, this.scene);

      ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.9 }, this.scene);
    }
      

      return ground;
  }
  

  createHole() {
    const holeMaterial = new BABYLON.StandardMaterial("holeMat", this.scene);
    holeMaterial.diffuseColor = new BABYLON.Color3(...this.holeColor);
    
    const hole = BABYLON.MeshBuilder.CreateCylinder("hole", { diameter: this.holeSize, height: 0.1 }, this.scene);
    hole.position = this.endPoint.clone();
    hole.material = holeMaterial;
    hole.scaling.y = 0.01;
    hole.position.y = 0.05;

    const holeImpostor = BABYLON.MeshBuilder.CreateCylinder("holeImpostor", { diameter: this.holeSize, height: 0.1 }, this.scene);
    holeImpostor.position = this.endPoint.clone();
    holeImpostor.position.y = 0.05;
    holeImpostor.isVisible = false;
    holeImpostor.physicsImpostor = new BABYLON.PhysicsImpostor(holeImpostor, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0.9 }, this.scene);
}

createWater() {
  this.waterAreas.forEach(area => {
      const water = BABYLON.MeshBuilder.CreateGround("water", { width: area.width, height: area.height }, this.scene);
      water.position.x = area.x;
      water.position.y = area.y;
      water.position.z = area.z; 

      const waterMaterial = new BABYLON.StandardMaterial("waterMat", this.scene);
      waterMaterial.diffuseColor = new BABYLON.Color3(0, 0, 1); 
      waterMaterial.alpha = 0.5; 
      water.material = waterMaterial; 
  });
}



createWalls() {
  this.wallsConfig.forEach(wallConfig => {
      const wallMaterial = new BABYLON.StandardMaterial("wallMat", this.scene);
      wallMaterial.diffuseColor = new BABYLON.Color3(...wallConfig.color);
      const wall = BABYLON.MeshBuilder.CreateBox("wall", { height: wallConfig.height, width: wallConfig.width, depth: wallConfig.depth }, this.scene);
      wall.position = new BABYLON.Vector3(...wallConfig.position);
      wall.material = wallMaterial;
      wall.physicsImpostor = new BABYLON.PhysicsImpostor(wall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, this.scene);

      if (wallConfig.isMoving) {
          this.movingWalls.push({
              mesh: wall,
              axis: wallConfig.axis,
              range: wallConfig.range,
              speed: wallConfig.speed,
              startPosition: wall.position.clone(),
          });
      }
  });
}
createRobots() {
  if (this.levelConfig && this.levelConfig.robots) {
    this.levelConfig.robots.forEach(robotConfig => {
      const robot = new Robot(this.scene, robotConfig.position, robotConfig.attackRange, robotConfig.attackDamage);
      this.robots.push(robot);
    });
  }
}

update() {
  this.robots.forEach(robot => {
    robot.update(); 
  });
}
update(sphere) {
  this.waterAreas.forEach(area => {
      if (this.isSphereInWater(sphere, area)) {
         
          this.reduceSphereSpeed(sphere);
      }
  });
}
isSphereInWater(sphere, waterArea) {
  return (
      sphere.position.x >= waterArea.x - waterArea.width / 2 &&
      sphere.position.x <= waterArea.x + waterArea.width / 2 &&
      sphere.position.z >= waterArea.z - waterArea.height / 2 &&
      sphere.position.z <= waterArea.z + waterArea.height / 2
  );
}

reduceSphereSpeed(sphere) {
  sphere.physicsImpostor.setLinearVelocity(
      sphere.physicsImpostor.getLinearVelocity().scale(this.waterSpeedReduction)
  );
}

animateMovingWalls() {
  this.movingWalls.forEach(wall => {
      const position = wall.mesh.position[wall.axis];
      const newPosition = wall.startPosition[wall.axis] + Math.sin(Date.now() * 0.001 * wall.speed) * wall.range;
      wall.mesh.position[wall.axis] = newPosition;
  });
}

generate() {
  this.createGround();
  this.createHole();
  this.createWalls();
  this.createRobots(); 
  this.createWater(); 

}

}
