import Arena from './Arena.js';
import levels from './levels.js';



document.getElementById("onePlayerBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    initGame(1).catch(console.error); // Démarrer le jeu avec 1 joueur
});

document.getElementById("twoPlayersBtn").addEventListener("click", function () {
    document.getElementById("playerSelection").style.display = "none";
    initGame(2).catch(console.error); // Démarrer le jeu avec 2 joueurs
});
let ammoLoaded = Ammo().then(function (AmmoLib) {
    window.Ammo = AmmoLib; // Assurez-vous que Ammo est disponible globalement
});
async function initGame(playerCount) {
    await ammoLoaded; // Assurez-vous qu'Ammo est chargé avant de continuer

    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    var sphere, camera;
    var sphere2; // Déclaration pour la seconde sphère si deux joueurs sont sélectionnés
    var groundWidth = 10;
    var groundHeight = 15;
    var moveSpeed = 2; 
    var startPoint = new BABYLON.Vector3(-groundWidth / 2.5, 0.5, groundHeight / 3.5);
    var endPoint = new BABYLON.Vector3(groundWidth / 3, 0.5, -groundHeight / 3);
    var isSphereFalling = false;
    var isSphere1Airborne = false; // Pour suivre si la première sphère est en l'air
    var isSphere2Airborne = false; // Pour suivre si la seconde sphère est en l'air
    var levelIndex = 0;


    window.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementById('renderCanvas');
        var keysPlayer1 = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            Space: false
        };
        var keysPlayer2 = {
            z: false,
            s: false,
            q: false,
            d: false,
            Shift: false
        };

        window.addEventListener("keydown", function (event) {
            const key = event.key.toLowerCase(); // Normalisez la clé pour la comparaison
            if (key in keysPlayer1) {
                keysPlayer1[key] = true;
                event.preventDefault(); // Prévenez l'action par défaut uniquement si la clé est utilisée pour le jeu
            } else if (key in keysPlayer2) {
                keysPlayer2[key] = true;
                event.preventDefault();
            }
        });

        window.addEventListener("keyup", function (event) {
            const key = event.key.toLowerCase(); // Normalisez la clé pour la comparaison
            if (key in keysPlayer1) {
                keysPlayer1[key] = false;
            } else if (key in keysPlayer2) {
                keysPlayer2[key] = false;
            }
        });

    });

    var keysPlayer1 = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };
    var keysPlayer2 = {
        z: false,
        s: false,
        q: false,
        d: false,
        Shift: false
    };
    window.addEventListener("keydown", function (event) {
        if (event.key in keysPlayer1) {
            keysPlayer1[event.key] = true;
        } else if (event.key.toLowerCase() in keysPlayer2) {
            // Utiliser toLowerCase pour s'assurer que les touches majuscules et minuscules sont traitées de la même manière
            keysPlayer2[event.key.toLowerCase()] = true;
        }
        event.preventDefault();
    });

    window.addEventListener("keyup", function (event) {
        if (event.key in keysPlayer1) {
            keysPlayer1[event.key] = false;
        } else if (event.key.toLowerCase() in keysPlayer2) {
            keysPlayer2[event.key.toLowerCase()] = false;
        }
    });


    var createScene = function (playerCount, levelIndex) {
        levelIndex = levelIndex || 0; // Niveau par défaut
        var scene = new BABYLON.Scene(engine);
        var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
        var physicsPlugin = new BABYLON.AmmoJSPlugin();
        scene.enablePhysics(gravityVector, physicsPlugin);
        scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

        // Caméra universelle
        camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
        camera.keysUp = []; // Désactiver le contrôle par défaut de la caméra
        camera.keysDown = [];
        camera.keysLeft = [];
        camera.keysRight = [];

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

        // var groundObject = new Ground(scene, groundWidth, groundHeight, startPoint);
        // var ground = groundObject.createGround();

        var arenaData = levels[levelIndex];
        var arena = new Arena(scene, arenaData.map, arenaData.startPoint, arenaData.endPoint, arenaData.holeSize);
        arena.createGround(arenaData.ground.width, arenaData.ground.height, arenaData.ground.subdivisions, arenaData.ground.minHeight, arenaData.ground.maxHeight, arenaData.ground.map);

        // Création de la sphère au point de départ avec les collisions
        sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.5 }, scene);
        sphere.position = startPoint.clone();
        sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);

        if (playerCount === 2) {
            // Créer une deuxième sphère pour le deuxième joueur
            sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", { diameter: 0.5 }, scene);
            sphere2.position = startPoint.clone().add(new BABYLON.Vector3(1, 0, 0)); // Légèrement décalée pour éviter les superpositions
            sphere2.physicsImpostor = new BABYLON.PhysicsImpostor(sphere2, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);
        }

        // // Création d'un petit cube pour représenter le mouvement de la sphère
        // var cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 0.1 }, scene);
        // cube.parent = sphere; // Attacher le cube à la sphère
        // cube.position.y = 0.25; // Décalage vers le haut pour le placer à l'intérieur de la sphère

        // Ajout de l'animation de rotation à la sphère
        var rotateAnimation = new BABYLON.Animation(
            "rotationAnimation", // Nom de l'animation
            "rotation.y", // Propriété à animer (rotation autour de l'axe y)
            30, // Nombre de frames par seconde
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE // Mode de boucle de l'animation
        );

        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 30,
            value: Math.PI * 2 // Une rotation complète sur 30 frames (une seconde)
        });

        rotateAnimation.setKeys(keys);
        sphere.animations.push(rotateAnimation);
        scene.beginAnimation(sphere, 0, 30, true);

        // Création des murs en utilisant les dessins comme guide pour les positions et les dimensions
        arenaData.walls.forEach(wallData => {
            arena.createWalls(wallData.height, wallData.width, wallData.depth, wallData.position, wallData.color);
        });

        // Création du trou et le rendre visible
        arena.createHole(arenaData.holeColor);

        return scene;
    };


    var scene = createScene();

    engine.runRenderLoop(function () {
        if (!isSphereFalling) {
            var forceDirection = new BABYLON.Vector3(0, 0, 0);
            if (keysPlayer1.ArrowUp) forceDirection.z += moveSpeed;
            if (keysPlayer1.ArrowDown) forceDirection.z -= moveSpeed;
            if (keysPlayer1.ArrowLeft) forceDirection.x -= moveSpeed;
            if (keysPlayer1.ArrowRight) forceDirection.x += moveSpeed;
            forceDirection.normalize().scaleInPlace(moveSpeed);
            sphere.physicsImpostor.applyForce(forceDirection, sphere.getAbsolutePosition());
        }
        if (playerCount === 2 && sphere2) {
            var forceDirection2 = new BABYLON.Vector3(0, 0, 0);
            if (keysPlayer2.z) forceDirection2.z += moveSpeed;
            if (keysPlayer2.s) forceDirection2.z -= moveSpeed;
            if (keysPlayer2.q) forceDirection2.x -= moveSpeed;
            if (keysPlayer2.d) forceDirection2.x += moveSpeed;
            forceDirection2.normalize().scaleInPlace(moveSpeed);
            sphere2.physicsImpostor.applyForce(forceDirection2, sphere2.getAbsolutePosition());
        }

        // Gestion du saut pour la première sphère
        if (keysPlayer1.Space && !isSphere1Airborne) {
            var jumpForce = new BABYLON.Vector3(0, 5, 0); // Ajustez la force selon le besoin
            sphere.physicsImpostor.applyImpulse(jumpForce, sphere.getAbsolutePosition());
            isSphere1Airborne = true;
            // Utilisez les événements de collision ou un délai pour réinitialiser cet état
            setTimeout(() => isSphere1Airborne = false, 500); // Exemple avec un délai
        }

        // Gestion du saut pour la deuxième sphère
        if (playerCount === 2 && keysPlayer2.Shift && !isSphere2Airborne) {
            var jumpForce2 = new BABYLON.Vector3(0, 5, 0);
            sphere2.physicsImpostor.applyImpulse(jumpForce2, sphere2.getAbsolutePosition());
            isSphere2Airborne = true;
            setTimeout(() => isSphere2Airborne = false, 500); // De même pour le deuxième joueur
        }

        // Inside the event handler where the sphere falls into the hole
        if ((BABYLON.Vector3.Distance(sphere.position, endPoint)) < 1 && !isSphereFalling) {
            // Marquer que la sphère tombe dans le trou
            isSphereFalling = true;

            // Animer la sphère pour donner l'illusion qu'elle tombe dans le trou
            BABYLON.Animation.CreateAndStartAnimation('fall', sphere, 'position.y', 60, 30, sphere.position.y, sphere.position.y - 1.5, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

            // Attendre 2 secondes avant de réinitialiser la position de la sphère
            setTimeout(function () {
                // Stopper l'animation de chute
                scene.stopAnimation(sphere);

                // Réinitialiser la position de la sphère au-dessus du trou
                sphere.position = new BABYLON.Vector3(endPoint.x, 0.5, endPoint.z);

                // Incrémenter le niveau si d'autres niveaux sont disponibles
                levelIndex++;
                console.log('Level Index:' + levelIndex);

                if (levelIndex < levels.length) {
                    // Créer une nouvelle scène pour le prochain niveau
                    scene.dispose(); // Dispose the current scene resources
                    scene = createScene(playerCount, levelIndex);
                } else {
                    // End the game if there are no more levels
                    alert('Congratulations! You have completed all levels.');
                }

                // Attendre un moment avant de retourner au point de départ
                setTimeout(function () {
                    isSphereFalling = false; // La sphère peut à nouveau bouger
                }, 1000); // Attend 1 seconde avant de revenir au point de départ
            }, 2000); // Attend 2 secondes pour simuler la chute
        }

        // Mise à jour de la position de la caméra pour suivre la sphère
        camera.position.x = sphere.position.x;
        camera.position.z = sphere.position.z - 10;
        // Vérification des limites pour la sphère
        if (Math.abs(sphere.position.x) > groundWidth / 2 || Math.abs(sphere.position.z) > groundHeight / 2) {
            // La sphère a dépassé les limites, la réinitialiser au centre
            sphere.position = startPoint.clone();

        }
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });
}
// Attendre que le DOM soit chargé pour lancer initGame
window.addEventListener('DOMContentLoaded', function () {
    initGame().catch(console.error); // Gérer les erreurs potentielles
});
