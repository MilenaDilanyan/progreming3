var socket = io()
let side = 30
///օբյեկտներ պահելու զանգվածներ

function setup() {
    createCanvas(30 * side, 30 * side)
    background("gray")

}


function nkarel (matrix) {
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



        // for (let i in grassArr) {
        //         grassArr[i].mul()
        // }


        // for (let i in grassEaterArr) {
        //         grassEaterArr[i].eat()
        // }



        // for (let i in predatorArr) {
        //         predatorArr[i].eat()
        // }

        // for (let i in wormArr) {
        //         wormArr[i].eat()
        // }

        // for (let i in fishArr) {
        //         fishArr[i].eat()
        // }
        // for (let i in catArr) {
        //         catArr[i].eat()
        // }
        
        // for (let i in hunterArr) {
        //         hunterArr[i].eat()
        // }



}
socket.on("send message", nkarel)