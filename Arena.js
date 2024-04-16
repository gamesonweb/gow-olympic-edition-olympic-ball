export default class Arena {
    constructor(scene, map, startPoint, endPoint, holeSize) {
      this.scene = scene;
      this.map = map;
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      this.holeSize = holeSize;
    }
  
    createGround(width, height, subdivisions, minHeight, maxHeight, map) {
      // Créer le sol à partir de la HeightMap avec des paramètres personnalisables
      const ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", map, {
        width: width,
        height: height,
        subdivisions: subdivisions,
        minHeight: minHeight,
        maxHeight: maxHeight,
      }, this.scene);
  
      ground.onReady = () => {
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.9 }, this.scene);
      };
  
      return ground;
    }
  
    createHole(holeColor) {
      // Créer le trou dans le sol avec des paramètres flexibles
      const holeMaterial = new BABYLON.StandardMaterial("holeMat", this.scene);
      holeMaterial.diffuseColor = new BABYLON.Color3(...holeColor); // Couleur personnalisable pour le trou
      const hole = BABYLON.MeshBuilder.CreateCylinder("hole", { diameter: this.holeSize, height: 0.1, updatable: true }, this.scene);
      hole.position = this.endPoint.clone();
      hole.material = holeMaterial;
      // Réduire la hauteur du cylindre pour qu'il soit comme un trou dans le sol
      hole.scaling.y = 0.01;
      hole.position.y = 0.4;
    }
  
    createWalls(height, width, depth, position, color) {
      // Initialisation du matériau des murs
      var wallMaterial = new BABYLON.StandardMaterial("wallMat", this.scene);
      wallMaterial.diffuseColor = new BABYLON.Color3(...color); // Couleur personnalisable
  
      // Création du mur
      var wall = BABYLON.MeshBuilder.CreateBox(
        "wall",
        { height: height, width: width, depth: depth },
        this.scene
      );
      wall.position = new BABYLON.Vector3(...position);
      wall.material = wallMaterial;
      wall.physicsImpostor = new BABYLON.PhysicsImpostor(
        wall,
        BABYLON.PhysicsImpostor.BoxImpostor,
        { mass: 0, restitution: 0.9 },
        this.scene
      );
  
      return wall;
    }
  
  }
  