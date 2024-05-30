import Arena from './Arena.js';
import levels from './levels.js';

document.getElementById("onePlayerBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    showModelSelection(1); // Call showModelSelection instead of initGame directly
});

document.getElementById("twoPlayersBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    showModelSelection(2); // Call showModelSelection instead of initGame directly
});

let ammoLoaded = Ammo().then(function (AmmoLib) {
    window.Ammo = AmmoLib;
});
const materialProperties = {
    water: {
        metallic: 0.33,
        roughness: 0.12,
        albedoTexture: 'Water_001_COLOR.jpg',
        metallicTexture: 'Water_001_SPEC.jpg',
        bumpTexture: 'Water_001_NORM.jpg',
        ambientTexture: 'Water_001_OCC.jpg',
        albedoColor: BABYLON.Color3.Blue(),
        bumpTextureLevel: 2,
        invertNormalMapX: true,
        invertNormalMapY: true,
        invertRefractionY: true,
        indexOfRefraction: 4.2,
        alpha: 1
    },
    volcano: {
        metallic: 0.7,
        roughness: 0.32,
        albedoTexture: '07/37/73/79/1000_F_737737956_FEC3ihNTNmznhFnJB4HozkVdhfrEBtiQ.jpg',
        metallicTexture: '04/33/68/69/1000_F_433686994_9wqTWijo5Ct2su4H1hq4zmWH7pAoLLIL.jpg',
        bumpTexture: '04/91/57/72/1000_F_491577222_UATRWMuQ6xrss6iKUXgB78bwxA0NHfzT.jpg',
        ambientTexture: '07/74/90/19/1000_F_774901967_BHKc5lvYqgt6ogCVx0MkqUAAfWGSQDt6.jpg',
        // color de volcan
        albedoColor: BABYLON.Color3.Red(),
        bumpTextureLevel: 2,
        invertNormalMapX: true,
        invertNormalMapY: true,
        invertRefractionY: true,
        indexOfRefraction: 4.2,
        alpha: 1    },
    grass: {
        metallic: 0.1,
        roughness: 0.32,
        albedoTexture: '06/02/83/14/1000_F_602831480_BxaatSPVp0QD2ydhak6BUjg5TNhLtICP.jpg',
        metallicTexture: '06/87/96/06/1000_F_687960665_Fir3IWkC2bMOov8RztXSzkAPnnjgeoYo.jpg',
        bumpTexture: '05/27/27/32/1000_F_527273218_s8uRtW7BrVe6QLyoQI8WveeoGVrYdJ8f.jpg',
        ambientTexture: '07/09/16/76/1000_F_709167618_PHf6KXAXcfB5dYxioDqQTHENbgqf9Vb3.jpg',
        // color de space
        albedoColor: new BABYLON.Color3(0.1, 0.1, 0.9),
        bumpTextureLevel: 8,
        invertNormalMapX: true,
        invertNormalMapY: true,
        invertRefractionY: true,
        indexOfRefraction: 6,
        alpha: 1     },
    rock: {
        metallic: 0.1,
        roughness: 0.32,
        albedoTexture: '07/05/64/83/1000_F_705648371_jvpv6r6okTpOYvTYIhElW1H6RTRe6Le9.jpg',
        metallicTexture: '07/05/64/83/1000_F_705648371_jvpv6r6okTpOYvTYIhElW1H6RTRe6Le9.jpg',
        bumpTexture: '07/05/64/83/1000_F_705648371_jvpv6r6okTpOYvTYIhElW1H6RTRe6Le9.jpg',
        ambientTexture: '07/05/64/83/1000_F_705648371_jvpv6r6okTpOYvTYIhElW1H6RTRe6Le9.jpg',
        // color de volcan
        albedoColor: new BABYLON.Color3(0.2, 0.15, 0.05),
        bumpTextureLevel: 8,
        invertNormalMapX: true,
        invertNormalMapY: true,
        invertRefractionY: true,
        indexOfRefraction: 9,
        alpha: 1     }
};

let arena;
document.addEventListener("DOMContentLoaded", function () {
    const spheres = {
        water: "canvas-water",
        volcano: "canvas-volcano",
        grass: "canvas-grass",
        rock: "canvas-rock"
    };

    Object.keys(spheres).forEach(key => {
        const canvasId = spheres[key];
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            createPreviewSphere(canvas, key);
        }
    });

    function createPreviewSphere(canvas, model) {
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        scene.createDefaultCameraOrLight(true, true, true);
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
        const mat = new BABYLON.PBRMaterial("sphereMat", scene);
    
        switch (model) {
            case 'water':
                applyMaterialProperties(mat, materialProperties.water , 'https://playgrounds.babylonjs.xyz/glass-ball/');
                break;
            case 'volcano':
                applyMaterialProperties(mat, materialProperties.volcano , 'https://as2.ftcdn.net/v2/jpg/');
                break;
            case 'grass':
                applyMaterialProperties(mat, materialProperties.grass , 'https://as2.ftcdn.net/v2/jpg/');
                break;
            case 'rock':
                applyMaterialProperties(mat, materialProperties.rock , 'https://as2.ftcdn.net/v2/jpg/');
                break;
        }
    
        sphere.material = mat;
    
        engine.runRenderLoop(() => {
            scene.render();
        });
    
        window.addEventListener("resize", () => {
            engine.resize();
        });
    }
});

function showModelSelection(playerCount) {
    document.getElementById("modelSelection").style.display = "block";
    let selectedModels = [];
    const sphereOptions = document.querySelectorAll('.sphere-option');

    sphereOptions.forEach(option => {
        option.addEventListener('click', function () {
            const model = this.getAttribute('data-model');
            selectedModels.push(model);
            if (selectedModels.length === playerCount) {
                document.getElementById("modelSelection").style.display = "none";
                initGame(playerCount, selectedModels).catch(console.error);
            }
        });
    });
}
function applyMaterialProperties(material, properties , baseUrl) {
    material.metallic = properties.metallic;
    material.roughness = properties.roughness;
    material.albedoTexture = new BABYLON.Texture(`${baseUrl}${properties.albedoTexture}`);
    material.metallicTexture = new BABYLON.Texture(`${baseUrl}${properties.metallicTexture}`);
    material.bumpTexture = new BABYLON.Texture(`${baseUrl}${properties.bumpTexture}`);
    material.ambientTexture = new BABYLON.Texture(`${baseUrl}${properties.ambientTexture}`);
    material.albedoColor = properties.albedoColor;
    material.bumpTexture.level = properties.bumpTextureLevel;
    material.invertNormalMapX = properties.invertNormalMapX;
    material.invertNormalMapY = properties.invertNormalMapY;
    material.invertRefractionY = properties.invertRefractionY;
    material.indexOfRefraction = properties.indexOfRefraction;
    material.alpha = properties.alpha;
}
function applyTextureToSphere(sphere, model) {
    const mat = new BABYLON.PBRMaterial("sphereMat");
    switch (model) {
        case 'water':
            applyMaterialProperties(mat, materialProperties.water, 'https://playgrounds.babylonjs.xyz/glass-ball/');
            break;
        case 'volcano':
            applyMaterialProperties(mat, materialProperties.volcano, 'https://as2.ftcdn.net/v2/jpg/');
            break;
        case 'grass':
            applyMaterialProperties(mat, materialProperties.grass, 'https://as2.ftcdn.net/v2/jpg/');
            break;
        case 'rock':
            applyMaterialProperties(mat, materialProperties.rock, 'https://as2.ftcdn.net/v2/jpg/');
            break;
    }
    
    sphere.material = mat;
}
async function initGame(playerCount, selectedModels) {
    await ammoLoaded;

    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    var sphere, sphere2, camera;
    var moveSpeed = 2;
    var isSphereFalling = false;
    var isSphere1Airborne = false;
    var isSphere2Airborne = false;
    var maxJumpHeight = 8;
    var levelIndex = 0;
    var winnerDeclared = false;
    var winningPlayer = null;
    var sphereLabel1, sphereLabel2;
    var camera1, camera2;
    let sphereHealth = 100;

    var keysPlayer1 = { 'ArrowUp': false, 'ArrowDown': false, 'ArrowLeft': false, 'ArrowRight': false, 'Space': false };
    var keysPlayer2 = { 'z': false, 's': false, 'q': false, 'd': false, 'Shift': false };
    var timeLimit = levels[levelIndex].timeLimit;
    var timeRemaining = timeLimit;

    var timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.position = 'absolute';
    timerElement.style.top = '20px';
    timerElement.style.right = '20px';
    timerElement.style.color = '#ffffff';
    timerElement.style.fontSize = '24px';
    timerElement.style.fontWeight = 'bold';
    timerElement.style.zIndex = '9999'; // Assurez-vous que le timer est au-dessus du reste du contenu
    document.body.appendChild(timerElement);

    var gameOverMessage = document.createElement('div');
    gameOverMessage.id = 'gameOverMessage';
    gameOverMessage.style.position = 'absolute';
    gameOverMessage.style.top = '50%';
    gameOverMessage.style.left = '50%';
    gameOverMessage.style.transform = 'translate(-50%, -50%)';
    gameOverMessage.style.backgroundColor = '#ffffff';
    gameOverMessage.style.padding = '20px';
    gameOverMessage.style.textAlign = 'center';
    gameOverMessage.style.border = '2px solid #000000';
    gameOverMessage.style.borderRadius = '10px';
    gameOverMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    gameOverMessage.style.display = 'none'; // Cacher le message au début
  



    var timerInterval = setInterval(function() {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            // Réinitialiser la position de la sphère
            resetSpherePosition(sphere, startPoint);
            if (playerCount === 2) {
                resetSpherePosition(sphere2, startPoint2);
            }
            // Afficher le message de temps écoulé
            timerElement.style.display = 'none'; // Cacher le timer
            displayTimeUpMessage(); // Afficher le message de temps écoulé
        }
        // Mettre à jour l'élément HTML avec le temps restant
        timerElement.textContent = 'Temps restant: ' + timeRemaining + 's';
    }, 1000);
    
   
    function createScene(playerCount, levelConfig) {
        var scene = new BABYLON.Scene(engine);

        scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.AmmoJSPlugin());
        scene.collisionsEnabled = true;

        camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        arena = new Arena(scene, levelConfig); // Assign value to arena variable
        arena.generate();

        var groundWidth = levelConfig.ground.width;
        var groundHeight = levelConfig.ground.height;

        var startPoint = levelConfig.startPoint;
        var startPoint2 = levelConfig.startPoint;
        var endPoint = levelConfig.endPoint;

       // Création des sphères avec les textures sélectionnées
       sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 0.75, scene);
       sphere.position = startPoint;
       sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9, friction: 0.5 }, scene);
       applyTextureToSphere(sphere, selectedModels[0]);

        if (playerCount === 2) {
            var startPoint2 = new BABYLON.Vector3(
                levels[levelIndex].startPoint.x + 2, 
                0.5,
                levels[levelIndex].startPoint.z
            );
            sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 0.75, scene);
            sphere2.position = startPoint2;
            sphere2.physicsImpostor = new BABYLON.PhysicsImpostor(sphere2, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9, friction: 0.5 }, scene);
            applyTextureToSphere(sphere2, selectedModels[1]);

            // Camera for player 1
            camera1 = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
            camera1.viewport = new BABYLON.Viewport(0, 0, 0.5, 1.0); // Left half of the screen
            camera1.setTarget(BABYLON.Vector3.Zero());
            camera1.attachControl(canvas, true);

            // Camera for player 2
            camera2 = new BABYLON.FreeCamera('camera2', new BABYLON.Vector3(0, 5, -10), scene);
            camera2.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1.0); // Right half of the screen
            camera2.setTarget(BABYLON.Vector3.Zero());
            camera2.attachControl(canvas, true);

            scene.activeCameras.push(camera1);
            scene.activeCameras.push(camera2);
        } else {
            // Existing camera setup for one player
            camera1 = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
            camera1.setTarget(BABYLON.Vector3.Zero());
            camera1.attachControl(canvas, true);
        }

        return { scene, groundWidth, groundHeight, startPoint, endPoint };
    }

    
    var sceneData = createScene(playerCount, levels[levelIndex]);
    var scene = sceneData.scene;
    var groundWidth = sceneData.groundWidth;
    var groundHeight = sceneData.groundHeight;
    var startPoint = sceneData.startPoint;
    var startPoint2 = sceneData.startPoint;
    var endPoint = sceneData.endPoint;

    var endPoint = sceneData.endPoint;

    async function resetSpherePosition(sphere, startPoint) {
        sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        sphere.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0, 0, 0));
        sphere.position = startPoint.clone(); 
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    engine.runRenderLoop(async function () {
        let moveSpeed = levels[levelIndex].moveSpeed;
        arena.robots.forEach(robot => {
            if (sphere2) {
                robot.update(sphere.position, sphere2.position);
            } else {
                robot.update(sphere.position);
            }
        });
        
        
        // Check for collision with water zones
        arena.update(sphere); 
        if (playerCount === 2) {
            arena.update(sphere2);
        }
        if (!isSphereFalling) {
            var forceDirection = new BABYLON.Vector3(0, 0, 0);
            if (keysPlayer1['ArrowUp']) forceDirection.z += moveSpeed;
            if (keysPlayer1['ArrowDown']) forceDirection.z -= moveSpeed;
            if (keysPlayer1['ArrowLeft']) forceDirection.x -= moveSpeed;
            if (keysPlayer1['ArrowRight']) forceDirection.x += moveSpeed;
            forceDirection.normalize().scaleInPlace(moveSpeed);
            sphere.physicsImpostor.applyForce(forceDirection, sphere.getAbsolutePosition());
        }

        if (playerCount === 2 && sphere2) {
            var forceDirection2 = new BABYLON.Vector3(0, 0, 0);
            if (keysPlayer2['z']) forceDirection2.z += moveSpeed;
            if (keysPlayer2['s']) forceDirection2.z -= moveSpeed;
            if (keysPlayer2['q']) forceDirection2.x -= moveSpeed;
            if (keysPlayer2['d']) forceDirection2.x += moveSpeed;
            forceDirection2.normalize().scaleInPlace(moveSpeed);
            sphere2.physicsImpostor.applyForce(forceDirection2, sphere2.getAbsolutePosition());
        }

        if (keysPlayer1['Space'] && !isSphere1Airborne && sphere.position.y < maxJumpHeight) {
            var jumpForce = new BABYLON.Vector3(0, 5, 0);
            sphere.physicsImpostor.applyImpulse(jumpForce, sphere.getAbsolutePosition());
            isSphere1Airborne = true;
            setTimeout(() => isSphere1Airborne = false, 2000);
        }

        if (playerCount === 2 && keysPlayer2['Shift'] && !isSphere2Airborne && sphere2.position.y < maxJumpHeight) {
            var jumpForce2 = new BABYLON.Vector3(0, 5, 0);
            sphere2.physicsImpostor.applyImpulse(jumpForce2, sphere2.getAbsolutePosition());
            isSphere2Airborne = true;
            setTimeout(() => isSphere2Airborne = false, 500);
        }

        if (playerCount === 2) {
            // Update camera positions for split-screen
            camera1.position.x = sphere.position.x;
            camera1.position.z = sphere.position.z - 10;

            camera2.position.x = sphere2.position.x;
            camera2.position.z = sphere2.position.z - 10;
        } else {
            // Existing camera update for one player
            camera1.position.x = sphere.position.x;
            camera1.position.z = sphere.position.z - 10;
        }

        arena.animateMovingWalls(); // Animate moving walls

        checkWinCondition(sphere, 1);
        if (playerCount === 2) {
            checkWinCondition(sphere2, 2);
        }

        camera.position.x = sphere.position.x;
        camera.position.z = sphere.position.z - 10;

        if (Math.abs(sphere.position.x) > groundWidth / 2 || Math.abs(sphere.position.z) > groundHeight / 2) {
            await resetSpherePosition(sphere, startPoint);
        }
        if (playerCount === 2 && (Math.abs(sphere2.position.x) > groundWidth / 2 || Math.abs(sphere2.position.z) > groundHeight / 2)) {
            await resetSpherePosition(sphere2, startPoint);
        }

        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });

    window.addEventListener('keydown', function (event) {
        if (timeRemaining <= 0) {
            // Bloquer l'action si le temps est écoulé
            event.preventDefault();
            return;
        }
        if (event.key in keysPlayer1) {
            keysPlayer1[event.key] = true;
        }
        if (event.key in keysPlayer2) {
            keysPlayer2[event.key] = true;
        }
        // Ajoutez une condition pour vérifier si la sphère est en l'air avant de permettre le saut
    if (event.code === 'Space' && !isSphere1Airborne) {
        keysPlayer1['Space'] = true;
    }
    });

    window.addEventListener('keyup', function (event) {
        if (event.key in keysPlayer1) {
            keysPlayer1[event.key] = false;
        }
        if (event.key in keysPlayer2) {
            keysPlayer2[event.key] = false;
        }
        if (event.code === 'Space' && isSphere1Airborne) {
            keysPlayer1['Space'] = false;
        }
    });

    function checkWinCondition(sphere, playerNumber) {
        const winThreshold = 0.5;

        if ((BABYLON.Vector3.Distance(sphere.position, endPoint)) < winThreshold && !winnerDeclared) {
            winnerDeclared = true;
            winningPlayer = playerNumber;
            // Arrêter le timer
            clearInterval(timerInterval)
            sphere.physicsImpostor.dispose();

            BABYLON.Animation.CreateAndStartAnimation('fall', sphere, 'position', 60, 30, sphere.position, endPoint, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

            setTimeout(function () {
                levelIndex++;
                if (levelIndex < levels.length) {
                    displayWinMessage();
                } else {
                    alert('Félicitations ! Vous avez terminé tous les niveaux.');
                }
                setTimeout(function () {
                    isSphereFalling = false;
                }, 1000);
            }, 2000);
        }
    }

    function displayWinMessage() {
        var winMessage = document.createElement('div');
        winMessage.style.position = 'absolute';
        winMessage.style.top = '50%';
        winMessage.style.left = '50%';
        winMessage.style.transform = 'translate(-50%, -50%)';
        winMessage.style.backgroundColor = '#ffffff';
        winMessage.style.padding = '20px';
        winMessage.style.textAlign = 'center';
        winMessage.style.border = '2px solid #000000';
        winMessage.style.borderRadius = '10px';
        winMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';

        var winnerText = document.createElement('p');
        winnerText.style.fontSize = '24px';
        winnerText.style.fontWeight = 'bold';
        winnerText.style.marginBottom = '20px';
        winnerText.innerText = `Joueur ${winningPlayer} a gagné !`;
        winMessage.appendChild(winnerText);

        var nextLevelBtn = document.createElement('button');
        nextLevelBtn.style.backgroundColor = '#4caf50';
        nextLevelBtn.style.color = '#ffffff';
        nextLevelBtn.style.border = 'none';
        nextLevelBtn.style.padding = '10px 20px';
        nextLevelBtn.style.fontSize = '18px';
        nextLevelBtn.style.cursor = 'pointer';
        nextLevelBtn.style.marginRight = '10px';
        nextLevelBtn.innerText = 'Niveau Suivant';
        nextLevelBtn.addEventListener('click', function () {
            document.body.removeChild(winMessage);
            scene.dispose();
            // Recréer la scène avec le nouveau niveau
            sceneData = createScene(playerCount, levels[levelIndex]);
            scene = sceneData.scene;
            groundWidth = sceneData.groundWidth;
            groundHeight = sceneData.groundHeight;
            startPoint = sceneData.startPoint;
            endPoint = sceneData.endPoint;
            applyTextureToSphere(sphere, selectedModels[0]);
            if(playerCount === 2){
                applyTextureToSphere(sphere2, selectedModels[1]);
            }
            winnerDeclared = false;
            levelIndex;
            if (levelIndex < levels.length) {
                // Mettre à jour le temps limite avec le temps du nouveau niveau
                timeLimit = levels[levelIndex].timeLimit;
                // Réinitialiser le temps restant avec le temps limite du nouveau niveau
                timeRemaining = timeLimit;
                // Réinitialiser le timer
                timerElement.style.display = 'block';
                clearInterval(timerInterval);
                timerInterval = setInterval(function () {
                    timeRemaining--;
                    if (timeRemaining <= 0) {
                        clearInterval(timerInterval);
                        resetSpherePosition(sphere, startPoint);
                        if (playerCount === 2) {
                            resetSpherePosition(sphere2, startPoint2);
                        }
                        timerElement.style.display = 'none';
                        displayTimeUpMessage(); // Afficher le message de temps écoulé

                    }
                    timerElement.textContent = 'Temps restant: ' + timeRemaining + 's';
                }, 1000);
            } else {
                alert('Félicitations ! Vous avez terminé tous les niveaux.');
            }
        });
        winMessage.appendChild(nextLevelBtn);

        var restartBtn = document.createElement('button');
        restartBtn.style.backgroundColor = '#f44336';
        restartBtn.style.color = '#ffffff';
        restartBtn.style.border = 'none';
        restartBtn.style.padding = '10px 20px';
        restartBtn.style.fontSize = '18px';
        restartBtn.style.cursor = 'pointer';
        restartBtn.innerText = 'Recommencer';
        restartBtn.addEventListener('click', function () {
            document.body.removeChild(winMessage);
            levelIndex = 0;
            scene.dispose();
            sceneData = createScene(playerCount, levels[levelIndex]);
            scene = sceneData.scene;
            groundWidth = sceneData.groundWidth;
            groundHeight = sceneData.groundHeight;
            startPoint = sceneData.startPoint;
            endPoint = sceneData.endPoint;
            applyTextureToSphere(sphere, selectedModels[0]);
            if(playerCount === 2){
                applyTextureToSphere(sphere2, selectedModels[1]);
            }
            winnerDeclared = false;
            // Mettre à jour le temps limite avec le temps du nouveau niveau
            timeLimit = levels[levelIndex].timeLimit;
           // Réinitialiser le temps restant avec le temps limite du nouveau niveau
           timeRemaining = timeLimit;       
            timerElement.style.display = 'block'; // Afficher le timer
            clearInterval(timerInterval); // Arrêter le timer actuel
            timerInterval = setInterval(function() { // Démarrer un nouveau timer
                timeRemaining--;
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    // Réinitialiser la position de la sphère
                    resetSpherePosition(sphere, startPoint);
                    if (playerCount === 2) {
                        resetSpherePosition(sphere2, startPoint2);
                    }
                    // Afficher le message de temps écoulé
                    timerElement.style.display = 'none'; // Cacher le timer
                    displayTimeUpMessage(); // Afficher le message de temps écoulé
                }
                // Mettre à jour l'élément HTML avec le temps restant
                timerElement.textContent = 'Temps restant: ' + timeRemaining + 's';
            }, 1000);
        });
        winMessage.appendChild(restartBtn);

        document.body.appendChild(winMessage);
    }
    function displayTimeUpMessage() {
        var timeUpMessage = document.createElement('div');
        timeUpMessage.style.position = 'absolute';
        timeUpMessage.style.top = '50%';
        timeUpMessage.style.left = '50%';
        timeUpMessage.style.transform = 'translate(-50%, -50%)';
        timeUpMessage.style.backgroundColor = '#ffffff';
        timeUpMessage.style.padding = '20px';
        timeUpMessage.style.textAlign = 'center';
        timeUpMessage.style.border = '2px solid #000000';
        timeUpMessage.style.borderRadius = '10px';
        timeUpMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    
        var timeUpText = document.createElement('p');
        timeUpText.style.fontSize = '24px';
        timeUpText.style.fontWeight = 'bold';
        timeUpText.style.marginBottom = '20px';
        timeUpText.innerText = `Temps écoulé !`;
        timeUpMessage.appendChild(timeUpText);
    
        var restartBtn = document.createElement('button');
        restartBtn.style.backgroundColor = '#f44336';
        restartBtn.style.color = '#ffffff';
        restartBtn.style.border = 'none';
        restartBtn.style.padding = '10px 20px';
        restartBtn.style.fontSize = '18px';
        restartBtn.style.cursor = 'pointer';
        restartBtn.innerText = 'Recommencer';
        restartBtn.addEventListener('click', function () {
            document.body.removeChild(timeUpMessage);
            if(levelIndex > 0){
            levelIndex--;}
            else{
                levelIndex = 0;
            }
            scene.dispose();
            sceneData = createScene(playerCount, levels[levelIndex]);
            scene = sceneData.scene;
            groundWidth = sceneData.groundWidth;
            groundHeight = sceneData.groundHeight;
            startPoint = sceneData.startPoint;
            startPoint2 = sceneData.startPoint;
            endPoint = sceneData.endPoint;
            applyTextureToSphere(sphere, selectedModels[0]);
            if(playerCount === 2){
                applyTextureToSphere(sphere2, selectedModels[1]);
            }
            winnerDeclared = false;
           // Mettre à jour le temps limite avec le temps du nouveau niveau
           timeLimit = levels[levelIndex].timeLimit;
           // Réinitialiser le temps restant avec le temps limite du nouveau niveau
           timeRemaining = timeLimit; 
            timerElement.style.display = 'block'; // Afficher le timer
            clearInterval(timerInterval); // Arrêter le timer actuel
            timerInterval = setInterval(function() { // Démarrer un nouveau timer
                timeRemaining--;
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    // Réinitialiser la position de la sphère
                    resetSpherePosition(sphere, startPoint);
                    if (playerCount === 2) {
                        resetSpherePosition(sphere2, startPoint2);
                    }
                    // Afficher le message de temps écoulé
                    timerElement.style.display = 'none'; // Cacher le timer
                    displayTimeUpMessage(); // Afficher le message de temps écoulé
                }
                // Mettre à jour l'élément HTML avec le temps restant
                timerElement.textContent = 'Temps restant: ' + timeRemaining + 's';
            }, 1000);
        });
        
        timeUpMessage.appendChild(restartBtn);
    
        document.body.appendChild(timeUpMessage);
    }
    
}
