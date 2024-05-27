import Arena from './Arena.js';
import levels from './levels.js';

document.getElementById("onePlayerBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    initGame(1).catch(console.error);
});

document.getElementById("twoPlayersBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    initGame(2).catch(console.error);
});

let ammoLoaded = Ammo().then(function (AmmoLib) {
    window.Ammo = AmmoLib;
});

async function initGame(playerCount) {
    await ammoLoaded;

    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    var sphere, sphere2, camera;
    var groundWidth = 10;
    var groundHeight = 15;
    var moveSpeed = 2;
    var startPoint = new BABYLON.Vector3(-groundWidth / 2.5, 0.5, groundHeight / 3.5);
    var endPoint = new BABYLON.Vector3(groundWidth / 3, 0.5, -groundHeight / 3);
    var isSphereFalling = false;
    var isSphere1Airborne = false;
    var isSphere2Airborne = false;
    var levelIndex = 0;
    var winnerDeclared = false;
    var winningPlayer = null;
    var sphereLabel1, sphereLabel2;

    var keysPlayer1 = { 'ArrowUp': false, 'ArrowDown': false, 'ArrowLeft': false, 'ArrowRight': false, 'Space': false };
    var keysPlayer2 = { 'z': false, 's': false, 'q': false, 'd': false, 'Shift': false };

    function createScene(playerCount, levelIndex) {
        var scene = new BABYLON.Scene(engine);
    
        scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.AmmoJSPlugin());
        scene.collisionsEnabled = true;
    
        camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
    
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
    
        var arena = new Arena(scene, levels[levelIndex]);
        arena.generate();

        
    
        // Remove or hide the green sphere (endSphere)
        // var endSphere = BABYLON.Mesh.CreateSphere('endSphere', 16, 0.4, scene);
        // endSphere.position = endPoint;
        // endSphere.material = new BABYLON.StandardMaterial('endSphereMat', scene);
        // endSphere.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
    
        sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 0.75, scene);
        sphere.position = startPoint;
        sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9, friction: 0.5 }, scene);
    
        if (playerCount === 2) {
            var startPoint2 = new BABYLON.Vector3(groundWidth / 2.5, 0.5, groundHeight / 3.5);
            sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 0.75, scene);
            sphere2.position = startPoint2;
            sphere2.physicsImpostor = new BABYLON.PhysicsImpostor(sphere2, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9, friction: 0.5 }, scene);
        }
    
        return scene;
    }
    

    var scene = createScene(playerCount, levelIndex);

    engine.runRenderLoop(function () {
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

        if (keysPlayer1['Space'] && !isSphere1Airborne) {
            var jumpForce = new BABYLON.Vector3(0, 5, 0);
            sphere.physicsImpostor.applyImpulse(jumpForce, sphere.getAbsolutePosition());
            isSphere1Airborne = true;
            setTimeout(() => isSphere1Airborne = false, 500);
        }

        if (playerCount === 2 && keysPlayer2['Shift'] && !isSphere2Airborne) {
            var jumpForce2 = new BABYLON.Vector3(0, 5, 0);
            sphere2.physicsImpostor.applyImpulse(jumpForce2, sphere2.getAbsolutePosition());
            isSphere2Airborne = true;
            setTimeout(() => isSphere2Airborne = false, 500);
        }

        checkWinCondition(sphere, 1);
        if (playerCount === 2) {
            checkWinCondition(sphere2, 2);
        }

        camera.position.x = sphere.position.x;
        camera.position.z = sphere.position.z - 10;

        if (Math.abs(sphere.position.x) > groundWidth / 2 || Math.abs(sphere.position.z) > groundHeight / 2) {
            sphere.position = startPoint.clone();
        }

        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });

    window.addEventListener('keydown', function (event) {
        if (event.key in keysPlayer1) {
            keysPlayer1[event.key] = true;
        }
        if (event.key in keysPlayer2) {
            keysPlayer2[event.key] = true;
        }
        // Ajoutez une condition pour la touche d'espace
        if (event.code === 'Space') {
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
        // Ajoutez une condition pour la touche d'espace
        if (event.code === 'Space') {
            keysPlayer1['Space'] = false;
        }
    });
    

    // Vérifier la condition de victoire
     
    function checkWinCondition(sphere, playerNumber) {
        const winThreshold = 0.5;
    
        if ((BABYLON.Vector3.Distance(sphere.position, endPoint)) < winThreshold && !winnerDeclared) {
            // Déclarer le joueur gagnant
            winnerDeclared = true;
            winningPlayer = playerNumber;
    
            // Désactiver la physique de la sphère
            sphere.physicsImpostor.dispose();
    
            // Animer la sphère pour qu'elle se déplace au centre du trou
            BABYLON.Animation.CreateAndStartAnimation('fall', sphere, 'position', 60, 30, sphere.position, endPoint, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
            // Attendre 2 secondes avant de passer au niveau suivant
            setTimeout(function () {
                // Passer au niveau suivant si disponible
                levelIndex++;
                if (levelIndex < levels.length) {
                    displayWinMessage();
                } else {
                    alert('Félicitations ! Vous avez terminé tous les niveaux.');
                }
                // Réinitialiser la variable indiquant si la sphère tombe
                setTimeout(function () {
                    isSphereFalling = false;
                }, 1000);
            }, 2000);
        }
    }
    

    
    
// Affichage du message de victoire
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
    nextLevelBtn.style.marginRight = '10px';
    nextLevelBtn.style.cursor = 'pointer';
    nextLevelBtn.innerText = 'Niveau Suivant';
    nextLevelBtn.addEventListener('click', function () {
        document.body.removeChild(winMessage);
        scene.dispose();
        scene = createScene(playerCount, levelIndex);
        winnerDeclared = false;
    });
    winMessage.appendChild(nextLevelBtn);

    var restartBtn = document.createElement('button');
    restartBtn.style.backgroundColor = '#f44336';
    restartBtn.style.color = '#ffffff';
    restartBtn.style.border = 'none';
    restartBtn.style.padding = '10px 20px';
    restartBtn.style.cursor = 'pointer';
    restartBtn.innerText = 'Recommencer';
    restartBtn.addEventListener('click', function () {
        document.body.removeChild(winMessage);
        levelIndex = 0;
        scene.dispose();
        scene = createScene(playerCount, levelIndex);
        winnerDeclared = false;
    });
    winMessage.appendChild(restartBtn);

    document.body.appendChild(winMessage);
}

}
