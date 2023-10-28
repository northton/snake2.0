let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export class Keys {
    constructor( keysList = ["KeyW", "KeyA", "KeyS", "KeyD"] ) {
        this.keysList = keysList
        this.keys = {}
        this.inputDirection = inputDirection
        this.lastInputDirection = lastInputDirection

        window.addEventListener("keydown", e => this.changeState(e))
    }

    changeState(e) {

        switch (e.key) {
            case 'w':
                if (this.lastInputDirection.y !== 0) {break}
                this.inputDirection = { x: 0, y: -1 }
                break
            case 's':
                if (this.lastInputDirection.y !== 0) {break}
                this.inputDirection = { x: 0, y: 1 }
                break
            case 'd':
                if (e.keyCode === 68) {
                    if (this.lastInputDirection.x !== 0) {break}
                    this.inputDirection = { x: 1, y: 0 }
                }
                break
            case 'a':                
                if (this.lastInputDirection.x !== 0) {break}
                this.inputDirection = { x: -1, y: 0 }
                break
        }
    } 

    getInputDirection() {
        this.lastInputDirection = this.inputDirection
        return this.inputDirection
    }
}


