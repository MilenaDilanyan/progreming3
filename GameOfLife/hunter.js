class Hunter extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.energy = 10
        
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(char) {
        this.getNewCoordinates()
        return super.chooseCell(char)

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7

            let hunter = new Hunter(newX, newY)

            hunterArr.push(hunter)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(3)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
            }

            matrix[newY][newX] = 7
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 30) {
                this.mul()
            }

        } else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            

            if (this.energy < 0) {
                this.die()
            }
        }
    }


    die() {
        matrix[this.y][this.x] = 0

        for (let i in hunterArr) {
            if (this.x == hunterArr[i].x && this.y == hunterArr[i].y) {
                hunterArr.splice(i, 1)
            }
        }
    }
}

