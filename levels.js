const levels = [
    
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(10 / 3,0.1, -5),
        holeSize: 1.0,
        ground: { width: 10, height: 15, subdivisions: 0, minHeight: 0, maxHeight: 0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 6, depth: 0.2, position: [-2, 0.5, 2], color: [1, 0.5, 0] },
            { height: 1, width: 4, depth: 0.2, position: [3, 0.5, -2], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15.4, position: [-5.1, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15.4, position: [5.1, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, 7.7], color: [1, 0.5, 0] },
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, -7.7], color: [1, 0.5, 0] },

        ],
        moveSpeed: 3,
        waterAreas: [],
        timeLimit: 40,
        maxJumpHeight:0.5,
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
        moveSpeed: 7,
        waterAreas: [],
        timeLimit: 40,
        maxJumpHeight:0.4,
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6.5, 0.4,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 0, minHeight: 0, maxHeight: 0. },
        holeColor: [0, 0, 0],
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
        moveSpeed: 3,
        waterAreas: [],
        timeLimit: 60,
        maxJumpHeight:1,

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 0, minHeight: 0, maxHeight: 0},
        holeColor: [0, 0, 0],
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
                position: new BABYLON.Vector3(4, 0.1,), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },

        ],
        waterAreas: [],
        timeLimit: 50,
        maxJumpHeight:1,
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
                position: new BABYLON.Vector3(0, 0.1, -1), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            {
                position: new BABYLON.Vector3(-8, 0.1, 0), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            },
            {
                position: new BABYLON.Vector3(8, 0.1, 0), // Position du deuxième robot
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
        timeLimit: 90,
        maxJumpHeight:1,
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1,),
        holeSize: 1.0,
        ground: { width: 20, height: 10, subdivisions: 0, minHeight: 0, maxHeight: 0. },
        holeColor: [0, 0, 0],
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
        moveSpeed: 7,
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
        timeLimit: 100,
        maxJumpHeight:1,
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
        moveSpeed: 4,
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
        timeLimit: 140,
        maxJumpHeight:0.5,
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 0),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
        holeSize: 1.0,
        ground: { width: 20, height: 4, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
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
        timeLimit: 90,
        maxJumpHeight:8,
    },
    {
        startPoint: new BABYLON.Vector3(-28, 0.5, 28),
        endPoint: new BABYLON.Vector3(3, 0., -2),
        holeSize: 1.0,
        ground: { width: 60, height: 60, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 0.2, depth: 60, position: [-30, 0.5, 0], color: [1, 0.5, 0] },  //outside left 1
            { height: 1, width: 60, depth: 0.2, position: [0, 0.5, -30], color: [1, 0.5, 0] },  //outside bottom 1
            { height: 1, width: 0.2, depth: 60, position: [30, 0.5, 0], color: [1, 0.5, 0] },  //outside right 1 
            { height: 1, width: 60, depth: 0.2, position: [0, 0.5, 30], color: [1, 0.5, 0] },  //outside high 1
            { height: 1, width: 14, depth: 0.2, position: [-23, 0.5, 25], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 10, position: [-25, 0.5, 20], color: [1, 0.5, 0] },
            { height: 1, width: 5, depth: 0.2, position: [-22.5, 0.5, 15], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 5, position: [-20, 0.5, 17.4], color: [1, 0.5, 0] },
            { height: 1, width: 7, depth: 0.2, position: [-19, 0.5, 20], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 20, position: [-12, 0.5, 20], color: [1, 0.5, 0] },
            { height: 1, width: 14, depth: 0.2, position: [-23, 0.5, 11], color: [1, 0.5, 0] },
            { height: 1, width: 10, depth: 0.2, position: [-21, 0.5, 7], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 30, position: [-25, 0.5, -8], color: [1, 0.5, 0] },
            { height: 1, width: 10, depth: 0.2, position: [-21, 0.5, -25], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 5, position: [-16, 0.5, -27.5], color: [1, 0.5, 0] },
            { height: 1, width: 8, depth: 0.2, position: [-12, 0.5, 15], color: [1, 0.5, 0] },
            { height: 1, width: 8, depth: 0.2, position: [-8.5, 0.5, 10], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 50, position: [0, 0.5, 5], color: [1, 0.5, 0] },
            { height: 1, width: 40, depth: 0.2, position: [0, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15, position: [-5, 0.5, 20], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 10, position: [-8, 0.5, 20], color: [1, 0.5, 0] },
            { height: 1, width: 35, depth: 0.2, position: [5, 0.5, 3.5], color: [1, 0.5, 0] },
            { height: 1, width: 20, depth: 0.2, position: [0, 0.5, 7], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 10, position: [-17, 0.5, -2], color: [1, 0.5, 0] },
            { height: 1, width: 8, depth: 0.2, position: [-13, 0.5, -7], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 4, position: [-9, 0.5, -5], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 12, position: [-13, 0.5, -9], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 14, position: [-17, 0.5, -18], color: [1, 0.5, 0] },
            { height: 1, width: 6, depth: 0.2, position: [-6, 0.5, -11], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 10, position: [-6, 0.5, -13], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 10, position: [-3, 0.5, -13], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 14, position: [-9, 0.5, -18], color: [1, 0.5, 0] },
            { height: 1, width: 9, depth: 0.2, position: [-4.5, 0.5, -25], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 6, position: [0, 0.5, -27], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 45, position: [25, 0.5, 0], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 18, position: [5, 0.5, -13.5], color: [1, 0.5, 0] },
            { height: 1, width: 16, depth: 0.2, position: [8, 0.5, -4.5], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 15, position: [20, 0.5, -7.6], color: [1, 0.5, 0] },
            { height: 1, width: 16, depth: 0.2, position: [17, 0.5, -22.4], color: [1, 0.5, 0] },
            { height: 1, width: 12, depth: 0.2, position: [15, 0.5, -18], color: [1, 0.5, 0] },
            { height: 1, width: 0.2, depth: 6, position: [9, 0.5, -15], color: [1, 0.5, 0] },
            { height: 1, width: 7, depth: 0.2, position: [12.5, 0.5, -12], color: [1, 0.5, 0] },
            { height: 1, width: 11, depth: 0.2, position: [14.5, 0.5, -9], color: [1, 0.5, 0] },
            { height: 1, width: 5, depth: 0.2, position: [7.5, 0.5, -22.4], color: [1, 0.5, 0] },
        ],
        moveSpeed: 2,
        robots: [
            {
                position: new BABYLON.Vector3(3, 0.1, 25), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            {
                position: new BABYLON.Vector3(5, 0.1, 15),
                attackRange: 2,
                attackDamage: 10
            },
            {
                position: new BABYLON.Vector3(20, 0.1, 25),
                attackRange: 2,
                attackDamage: 10
            },
            {
                position: new BABYLON.Vector3(13, 0.1, 20),
                attackRange: 6,
                attackDamage: 10
            },
            {
                position: new BABYLON.Vector3(15, 0.1, 10),
                attackRange: 5,
                attackDamage: 10
            },
            {
                position: new BABYLON.Vector3(20, 0.1, 10),
                attackRange: 3,
                attackDamage: 10
            },

        ],
        waterAreas: [],
        timeLimit: 300,
        maxJumpHeight:0.2,
    },
];


export default levels;