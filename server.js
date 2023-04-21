var express = require('express');
var app = express();


var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000,function(){
    console.log("server is run");
})
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

io.sockets.emit('send message',matrix)

 grassArr = []
 grassEaterArr = []
 predatorArr = []
 wormArr = []
 fishArr = []
 catArr = []
 hunterArr=[]

 Grass = require("./grass")
 GrassEater = require("./grasseater")
 Predator  = require("./predator")
 Worm  = require("./worm")
 Cat  = require("./cat")
 Hunter =   require("./hunter")

 function creanteObjet(){
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
io.sockets.emit('send message',matrix)
 }

io.on("connection",function(){
    creanteObjet()
})