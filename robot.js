export default class Robot {
    constructor(scene, position, attackRange, attackDamage) {
        this.scene = scene;
        this.attackRange = attackRange;
        this.attackDamage = attackDamage;
        this.mesh = BABYLON.MeshBuilder.CreateSphere("robot", { diameter: 1 }, this.scene);
        this.mesh.position = position;
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
    

    update(playerPosition) {
        const distance = BABYLON.Vector3.Distance(this.mesh.position, playerPosition);
        if (distance <= this.attackRange && !this.attacking && Date.now() - this.lastAttackTime >= this.attackCooldown) {
            const distanceFromInitialPosition = BABYLON.Vector3.Distance(this.mesh.position, this.initialPosition);
            if (distanceFromInitialPosition > this.attackRange){
                const directionToInitialPosition = this.initialPosition.subtract(this.mesh.position);
                directionToInitialPosition.normalize();
                this.move(directionToInitialPosition);
            }else{
            const direction = playerPosition.subtract(this.mesh.position);
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
