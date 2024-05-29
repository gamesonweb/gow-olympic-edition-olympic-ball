

const levels = [
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 0),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
        holeSize: 1.0,
        ground: { width: 20, height: 4, subdivisions: 0, minHeight: 0, maxHeight: 0.01 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 1, depth: 3, position: [-2, 0.5, 0], color: [1, 0.5, 0] },
            { height: 2.5, width: 1, depth: 3, position: [-0.5, 0.5, 0], color: [1, 0.5, 0] },
            { height: 4, width: 1, depth: 3, position: [1, 0.5, 0], color: [1, 0.5, 0] },
            { height: 5.5, width: 1, depth: 3, position: [2.5, 0.5, 0], color: [1, 0.5, 0] },
            { height: 7, width: 1, depth: 3, position: [4, 0.5, 0], color: [1, 0.5, 0] },
        ],
        moveSpeed: 2,
        waterAreas: [],
        timeLimit: 90
    },
    
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(10 / 3, 1, -5),
        holeSize: 1.0,
        ground: { width: 10, height: 15, subdivisions: 0, minHeight: 0, maxHeight: 0.01, map: "heightmap.webp" },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 6, depth: 0.2, position: [-2, 0.5, 2], color: [1, 0.5, 0] },
            { height: 1, width: 4, depth: 0.2, position: [3, 0.5, -2], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15.4, position: [-5.1, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15.4, position: [5.1, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, 7.7], color: [1, 0.5, 0] },
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, -7.7], color: [1, 0.5, 0] },

        ],
        moveSpeed: 2,
        waterAreas: [],
        timeLimit: 30
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 7),
        endPoint: new BABYLON.Vector3(8, 0.1, -8),
        holeSize: 1.0,
        ground: { width: 20, height: 20, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 8, depth: 0.2, position: [0, 0.5, 5], color: [1, 0.5, 0], }, //first middle
            { height: 1, width: 8, depth: 0.2, position: [-5, 0.5, 2], color: [1, 0.5, 0] }, //second middle left
            { height: 1, width: 8, depth: 0.2, position: [5, 0.5, 2], color: [1, 0.5, 0] }, //first middle right
            { height: 1, width: 13, depth: 0.2, position: [-2.5, 0.5, -2], color: [1, 0.5, 0] },  //third middle
            { height: 1, width: 10, depth: 0.2, position: [5, 0.5, -5], color: [1, 0.5, 0] },  //fourth middle 
            { height: 1, width: 0.2, depth: 20, position: [-10, 0.5, 0], color: [1, 0.5, 0] },  //left
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, -10], color: [1, 0.5, 0] },  //bottom
            { height: 1, width: 0.2, depth: 20, position: [10, 0.5, 0], color: [1, 0.5, 0] },  //right
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, 10], color: [1, 0.5, 0] },  //high

        ],
        moveSpeed: 10,
        waterAreas: [],
        timeLimit: 30
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 32, minHeight: 0, maxHeight: 0.1, map: "level2.webp" },
        holeColor: [0, 1, 0],
        walls: [
            { height: 1, width: 0.2, depth: 10.2, position: [-10.1, 0.5, 0], color: [1, 0.5, 0] }, // Mur à gauche
            { height: 1, width: 0.2, depth: 10.2, position: [10.1, 0.5, 0], color: [1, 0.5, 0] },  // Mur à droite
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut    
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas             
            { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1], isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
            { height: 1, width: 1.7, depth: 0.2, position: [3, 1, 0], color: [6, 8, 1], isMoving: true, axis: 'z', range: 5, speed: 2 }, // Mur mobile à droite
        ],
        moveSpeed: 2,
        waterAreas: [],
        timeLimit: 20

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 32, minHeight: 0, maxHeight: 0.1, map: "level2.webp" },
        holeColor: [0, 1, 0],
        walls: [
            { height: 1, width: 0.2, depth: 10.2, position: [-10.1, 0.5, 0], color: [1, 0.5, 0] }, // Mur à gauche
            { height: 1, width: 0.2, depth: 10.2, position: [10.1, 0.5, 0], color: [1, 0.5, 0] },  // Mur à droite
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut    
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas             
            { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1], isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
        ],
        moveSpeed: 2,
        robots: [
            {
                position: new BABYLON.Vector3(5, 0.1,), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },

        ],
        waterAreas: [],
        timeLimit: 50


    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 7),
        endPoint: new BABYLON.Vector3(8, 0.1, -8),
        holeSize: 1.0,
        ground: { width: 20, height: 20, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 8, depth: 0.2, position: [0, 0.5, 5], color: [1, 0.5, 0], }, //first middle
            { height: 1, width: 8, depth: 0.2, position: [-5, 0.5, 2], color: [1, 0.5, 0] }, //second middle left
            { height: 1, width: 8, depth: 0.2, position: [5, 0.5, 2], color: [1, 0.5, 0] }, //first middle right
            { height: 1, width: 13, depth: 0.2, position: [-2.5, 0.5, -2], color: [1, 0.5, 0] },  //third middle
            { height: 1, width: 10, depth: 0.2, position: [5, 0.5, -5], color: [1, 0.5, 0] },  //fourth middle 
            { height: 1, width: 0.2, depth: 20, position: [-10, 0.5, 0], color: [1, 0.5, 0] },  //left
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, -10], color: [1, 0.5, 0] },  //bottom
            { height: 1, width: 0.2, depth: 20, position: [10, 0.5, 0], color: [1, 0.5, 0] },  //right
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, 10], color: [1, 0.5, 0] },  //high

        ],
        moveSpeed: 10,
        robots: [
            {
                position: new BABYLON.Vector3(0, 0.1, 0), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            {
                position: new BABYLON.Vector3(-9, 0.1, 0), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(9, 0.1, 0), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(4, 0.1, -8), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            }
        ],
        waterAreas: [
            { x: -1, y: 0.1, z: -3, width: 1, height: 2 },
            { x: 2, y: 0.1, z: -8.3, width: 1, height: 3 },
        ],
        timeLimit: 30
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 32, minHeight: 0, maxHeight: 0.1 },
        holeColor: [0, 1, 0],
        walls: [
            { height: 1, width: 0.2, depth: 10.2, position: [-10.1, 0.5, 0], color: [1, 0.5, 0] }, // Mur à gauche
            { height: 1, width: 0.2, depth: 10.2, position: [10.1, 0.5, 0], color: [1, 0.5, 0] },  // Mur à droite
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, -5.1], color: [1, 0.5, 0] },  // Mur en haut    
            { height: 1, width: 7.5, depth: 0.2, position: [-6.5, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 3, depth: 0.2, position: [0.7, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas
            { height: 1, width: 6, depth: 0.2, position: [7.2, 0.5, 5.1], color: [1, 0.5, 0] },  // Mur en bas             
            { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1], isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
            { height: 1, width: 1.7, depth: 0.2, position: [3, 1, 0], color: [6, 8, 1], isMoving: true, axis: 'z', range: 5, speed: 2 }, // Mur mobile à droite
        ],
        moveSpeed: 10,
        robots: [
            {
                position: new BABYLON.Vector3(5, 0.1,), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },

        ],
        waterAreas: [
            { x: -3, y: 0.1, z: 3, width: 2, height: 3 },
            { x: -3, y: 0.1, z: -3, width: 2, height: 3 },
            { x: 1, y: 0.1, z: 0, width: 2, height: 3 },
        ],
        timeLimit: 60



    },
    {
        startPoint: new BABYLON.Vector3(-11, 0.5, 9),
        endPoint: new BABYLON.Vector3(8, 0.1, -8),
        holeSize: 1.0,
        ground: { width: 30, height: 30, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 8, depth: 0.2, position: [0, 0.5, 5], color: [1, 0.5, 0], isMoving: true, axis: 'x', range: 5, speed: 2 }, //first middle
            { height: 1, width: 8, depth: 0.2, position: [-5, 0.5, 2], color: [1, 0.5, 0], isMoving: true, axis: 'y', range: 1, speed: 3 }, //second middle left
            { height: 1, width: 8, depth: 0.2, position: [5, 0.5, 2], color: [1, 0.5, 0], isMoving: true, axis: 'y', range: 1, speed: 4 }, //first middle right
            { height: 1, width: 13, depth: 0.2, position: [-2.5, 0.5, -2], color: [1, 0.5, 0], isMoving: true, axis: 'z', range: 1, speed: 5 },  //third middle
            { height: 1, width: 10, depth: 0.2, position: [2, 0.5, -5], color: [1, 0.5, 0], isMoving: true, axis: 'x', range: 3, speed: 6 },  //fourth middle 
            { height: 1, width: 0.2, depth: 19, position: [-10, 0.5, -0.5], color: [1, 0.5, 0] },  //left
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, -10], color: [1, 0.5, 0] },  //bottom
            { height: 1, width: 0.2, depth: 19, position: [10, 0.5, -0.5], color: [1, 0.5, 0] },  //right
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, 10], color: [1, 0.5, 0] },  //high           
            { height: 1, width: 0.2, depth: 30, position: [-15, 0.5, 0], color: [1, 0.5, 0] },  //outside left
            { height: 1, width: 30, depth: 0.2, position: [0, 0.5, -15], color: [1, 0.5, 0] },  //outside bottom
            { height: 1, width: 0.2, depth: 30, position: [15, 0.5, 0], color: [1, 0.5, 0] },  //outside right
            { height: 1, width: 30, depth: 0.2, position: [0, 0.5, 15], color: [1, 0.5, 0] },  //outside high
        ],
        moveSpeed: 2,
        robots: [
            {
                position: new BABYLON.Vector3(6.5, 0.1, -7), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            {
                position: new BABYLON.Vector3(5, 0.1, -1), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(-8, 0.1, 7), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(8, 0.1, 7), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(-8, 0.1, ), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            
        ],
        waterAreas: [],
        timeLimit: 60
    },

];


export default levels;