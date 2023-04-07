function matrixGenerator(matrixSize, grass, grassEater, predator, worm, fish,cat, hunter) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 2

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 predator


        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }

        for (let i = 0; i < worm; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }

        for (let i = 0; i < fish; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }
    

        for (let i = 0; i < cat; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }
    
        for (let i = 0; i < hunter; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7
        }
    


        return matrix
}

let matrix = matrixGenerator(30, 17, 7, 10, 15, 20, 10,15)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var wormArr = []
var fishArr = []
var catArr = []
var hunterArr=[]

function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pre = new Predator(x, y)
                                predatorArr.push(pre)
                        } else if (matrix[y][x] == 4) {
                                let worm = new Worm(x, y)
                                wormArr.push(worm)
                        } else if (matrix[y][x] == 5) {
                                let fish = new Fish(x, y)
                                fishArr.push(fish)
                        } else if (matrix[y][x] == 6) {
                                let cat = new Cat(x, y)
                                catArr.push(cat)
                        }else if (matrix[y][x] == 7) {
                                let hunter = new Hunter (x, y)
                                hunterArr.push(hunter)
                        }

                }
        }

}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.2
                        textSize(toBot)
                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect(x * side, y * side, side, side)
                                text("🌿", x * side, y * side + toBot)
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                                rect(x * side, y * side, side, side)
                                text("🐄", x * side, y * side + toBot)
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                                rect(x * side, y * side, side, side)
                                text("🐲", x * side, y * side + toBot)
                        } else if (matrix[y][x] == 4) {
                                fill("#FFD295")
                                rect(x * side, y * side, side, side)
                                text("🪱", x * side, y * side + toBot)
                        } else if (matrix[y][x] == 5) {
                                fill("#7BCFFF")
                                rect(x * side, y * side, side, side)
                                text(" 🐠", x * side, y * side + toBot)
                        } else if (matrix[y][x] == 6) {
                                fill("#2D3A47")
                                rect(x * side, y * side, side, side)
                                text("🐈", x * side, y * side + toBot)
                        }else if (matrix[y][x] == 7) {
                                fill("white")
                                rect(x * side, y * side, side, side)
                                text("🥷🏻", x * side, y * side + toBot)
                        }
                        else {
                                fill("gray")
                                rect(x * side, y * side, side, side)

                        }


                }
        }



        for (let i in grassArr) {
                grassArr[i].mul()
        }


        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }



        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in wormArr) {
                wormArr[i].eat()
        }

        for (let i in fishArr) {
                fishArr[i].eat()
        }
        for (let i in catArr) {
                catArr[i].eat()
        }
        
        for (let i in hunterArr) {
                hunterArr[i].eat()
        }



}
