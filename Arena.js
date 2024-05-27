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
  }

  createGround() {
      const ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", this.map, {
          width: this.groundConfig.width,
          height: this.groundConfig.height,
          subdivisions: this.groundConfig.subdivisions,
          minHeight: this.groundConfig.minHeight,
          maxHeight: this.groundConfig.maxHeight,
      }, this.scene);

      ground.onReady = () => {
          ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.9 }, this.scene);
      };

      return ground;
  }

  createHole() {
    const holeMaterial = new BABYLON.StandardMaterial("holeMat", this.scene);
    holeMaterial.diffuseColor = new BABYLON.Color3(...this.holeColor);
    
    // Create the visible hole
    const hole = BABYLON.MeshBuilder.CreateCylinder("hole", { diameter: this.holeSize, height: 0.1 }, this.scene);
    hole.position = this.endPoint.clone();
    hole.material = holeMaterial;
    hole.scaling.y = 0.01;
    hole.position.y = 0.05;

    // Create an impostor for the hole
    const holeImpostor = BABYLON.MeshBuilder.CreateCylinder("holeImpostor", { diameter: this.holeSize, height: 0.1 }, this.scene);
    holeImpostor.position = this.endPoint.clone();
    holeImpostor.position.y = 0.05; // Slightly above the ground
    holeImpostor.isVisible = false; // Make the impostor invisible
    holeImpostor.physicsImpostor = new BABYLON.PhysicsImpostor(holeImpostor, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0.9 }, this.scene);
}


  createWalls() {
      this.wallsConfig.forEach(wallConfig => {
          const wallMaterial = new BABYLON.StandardMaterial("wallMat", this.scene);
          wallMaterial.diffuseColor = new BABYLON.Color3(...wallConfig.color);
          const wall = BABYLON.MeshBuilder.CreateBox("wall", { height: wallConfig.height, width: wallConfig.width, depth: wallConfig.depth }, this.scene);
          wall.position = new BABYLON.Vector3(...wallConfig.position);
          wall.material = wallMaterial;
          wall.physicsImpostor = new BABYLON.PhysicsImpostor(wall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, this.scene);
      });
  }

  generate() {
      this.createGround();
      this.createHole();
      this.createWalls();
  }
}
