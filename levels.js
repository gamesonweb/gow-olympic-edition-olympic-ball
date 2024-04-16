const levels = [
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(10/3, 0.5, -5),
        holeSize: 1.0,
        ground: { width: 10, height: 15, subdivisions: 32, minHeight: 0, maxHeight: 0.01, map: "heightmap.webp" },
        holeColor: [0, 0, 0],
        walls: [
            { height: 1, width: 6, depth: 0.2, position: [-2, 0.5, 2], color: [1, 0.5, 0] }, 
            { height: 1, width: 4, depth: 0.2, position: [3, 0.5, -2], color: [1, 0.5, 0] },  
            { height: 1, width: 0.2, depth: 15.4, position: [-5.1, 0.5, 0], color: [1, 0.5, 0] },  
            { height: 1, width: 0.2, depth: 15.4, position: [5.1, 0.5, 0], color: [1, 0.5, 0] },  
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, 7.7], color: [1, 0.5, 0] },  
            { height: 1, width: 10.5, depth: 0.2, position: [0, 0.5, -7.7], color: [1, 0.5, 0] },  
            
        ]
    },
    {
        startPoint: new BABYLON.Vector3(-5, 0.5, 5),
        endPoint: new BABYLON.Vector3(5, 0.5, -5),
        holeSize: 1.0,
        ground: { width: 15, height: 10, subdivisions: 32, minHeight: 0, maxHeight: 0.4, map: "heightmap.webp" },
        holeColor: [0, 1, 0],
        walls: [
            { height: 2, width: 2, depth: 0.2, position: [-5, 1, 0], color: [6, 8, 1] }, 
            { height: 2, width: 2, depth: 0.2, position: [5, 1, 0], color: [3, 1, 4] },  

        ]
    },
];

export default levels;