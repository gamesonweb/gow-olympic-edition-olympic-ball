export default class Robot {
    constructor(scene, position, attackRange, attackDamage) {
        this.scene = scene;
        this.attackRange = attackRange;
        this.attackDamage = attackDamage;
        this.mesh = BABYLON.MeshBuilder.CreateSphere("robot", { diameter: 1 }, this.scene);
        this.mesh.position = position;
        // ajouter une couleur aléatoire
        this.mesh.material = new BABYLON.StandardMaterial("robotMaterial", this.scene);
        this.mesh.material.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
        
        this.physicsBody = this.createPhysicsBody();

        this.initialPosition = position.clone(); 
        this.moveSpeed = 5;

        this.attacking = false;
        this.attackCooldown = 3000; 
        this.lastAttackTime = 0;
    }

    createPhysicsBody() {
        const physicsBody = new BABYLON.PhysicsImpostor(
            this.mesh,
            BABYLON.PhysicsImpostor.SphereImpostor,
            { mass: 1, restitution: 0.9, friction: 0.5 },
            this.scene
        );
        return physicsBody;
    }
    

    update(player1Position, player2Position) {
        let closestPlayerPosition;
        if (player2Position === undefined) {
            closestPlayerPosition = player1Position;
        } else {
            const distanceToPlayer1 = BABYLON.Vector3.Distance(this.mesh.position, player1Position);
            const distanceToPlayer2 = BABYLON.Vector3.Distance(this.mesh.position, player2Position);
            
            if (distanceToPlayer1 < distanceToPlayer2) {
                closestPlayerPosition = player1Position;
            } else {
                closestPlayerPosition = player2Position;
            }
        }
    
        const distance = BABYLON.Vector3.Distance(this.mesh.position, closestPlayerPosition);
        
        if (distance <= this.attackRange && !this.attacking && Date.now() - this.lastAttackTime >= this.attackCooldown) {
            const distanceFromInitialPosition = BABYLON.Vector3.Distance(this.mesh.position, this.initialPosition);
            if (distanceFromInitialPosition > this.attackRange){
                const directionToInitialPosition = this.initialPosition.subtract(this.mesh.position);
                directionToInitialPosition.normalize();
                this.move(directionToInitialPosition);
            } else {
                const direction = closestPlayerPosition.subtract(this.mesh.position);
                direction.normalize();
                this.move(direction);
            }
        } else {
            this.physicsBody.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        }
    }
    
    

    move(direction) {
        const velocity = direction.scale(this.moveSpeed);
        this.physicsBody.setLinearVelocity(velocity);
    }
    
    
    attack() {
        console.log("Robot attaque !");
        this.attacking = true;
        this.lastAttackTime = Date.now(); 
        setTimeout(() => {
            this.attacking = false;
        }, this.attackCooldown);
    }
    
}
