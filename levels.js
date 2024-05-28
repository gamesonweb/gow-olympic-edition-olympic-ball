
    
const levels = [  
    

    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(10/3, 0.1, -5),
        holeSize: 1.0,
        ground: { width: 10, height: 15, subdivisions: 0, minHeight: 0, maxHeight: 0.0 },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 6, depth: 0.2, position: [-2, 0.5, 2], color: [1, 0.5, 0] }, 
            { height: 1, width: 4, depth: 0.2, position: [3, 0.5, -2], color: [1, 0.5, 0] },  
            { height: 1, width: 0.2, depth: 15.4, position: [-5.1, 0.5, 0], color: [1, 0.5, 0] },  
            { height: 1, width: 0.2, depth: 15.4, position: [5.1, 0.5, 0], color: [1, 0.5, 0] },  
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, 7.7], color: [1, 0.5, 0] },  
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, -7.7], color: [1, 0.5, 0] },  
            
        ],
        
        moveSpeed: 10,
        waterAreas: []
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(10/3, 1, -5),
        holeSize: 1.0,
        ground: { width: 10, height: 15, subdivisions: 32, minHeight: 0, maxHeight: 0.2 , map : "heightmap.webp" },
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
        waterAreas: []
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
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
             { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
            { height: 1, width: 1.7, depth: 0.2, position: [3, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 2 }, // Mur mobile à droite
        ],
        moveSpeed: 2,
        waterAreas: []

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
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
             { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
        ],
        moveSpeed: 2,
        robots: [
            {
                position: new BABYLON.Vector3(5, 0.1, ), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            
        ],
        waterAreas: []

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
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
             { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
        ],
        moveSpeed: 2,
        robots: [
            {
                position: new BABYLON.Vector3(5, 0.1, 2), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            {
                position: new BABYLON.Vector3(5, 0.1, -2), // Position du deuxième robot
                attackRange: 2, // Portée d'attaque du deuxième robot
                attackDamage: 10 // Dégâts infligés par le deuxième robot
            }
        ],
        waterAreas: []

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
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
             { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
            { height: 1, width: 1.7, depth: 0.2, position: [3, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 2 }, // Mur mobile à droite
        ],
        moveSpeed: 10,
        waterAreas: [
            { x: -3, y: 0.1, z: 3, width: 2, height: 3 }, 
            { x: -3, y: 0.1, z: -3, width: 2, height: 3 },
            { x: 1, y: 0.1, z: 0, width: 2, height: 3 },
        ]
        
        

    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 4),
        endPoint: new BABYLON.Vector3(6, 0.1, ),
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
             { height: 1, width: 1.7, depth: 0.2, position: [-2, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 1 }, // Mur mobile à gauche
            { height: 1, width: 1.7, depth: 0.2, position: [3, 1, 0], color: [6, 8, 1] , isMoving: true, axis: 'z', range: 5, speed: 2 }, // Mur mobile à droite
        ],
        moveSpeed: 10,
        robots: [
            {
                position: new BABYLON.Vector3(5, 0.1, ), // Position du premier robot
                attackRange: 2, // Portée d'attaque du premier robot
                attackDamage: 10 // Dégâts infligés par le premier robot
            },
            
        ],
        waterAreas: [
            { x: -3, y: 0.1, z: 3, width: 2, height: 3 }, 
            { x: -3, y: 0.1, z: -3, width: 2, height: 3 },
            { x: 1, y: 0.1, z: 0, width: 2, height: 3 },
        ]
        
        

    },

];


export default levels;