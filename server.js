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

 matrix = matrixGenerator(30, 17, 7, 10, 15, 20, 10,15)

io.sockets.emit("send matrix",matrix)

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
 Fish = require("./fish")
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
io.sockets.emit("send matrix",matrix)
 }
 function Winter() {
        weath = "winter";
        io.sockets.emit('Winter', weath);
    }
    
    function Summer() {
        weath = "summer";
        io.sockets.emit('Summer', weath);
    }
    
    function Spring() {
        weath = "spring";
        io.sockets.emit('Spring', weath);
    }
    function Autumn() {
        weath = "autumn";
        io.sockets.emit('Autumn', weath);
    }
function game (){
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
  io.sockets.emit("send matrix",matrix)

}


setInterval(game,300)


function addGr(){
       

            for (let i = 0 ; i < 5 ; i++){
                let x = Math.floor(Math.random() * matrix.length)
                let y = Math.floor(Math.random() * matrix.length)
                      
                      matrix[y][x] = 1 

                      var gr = new Grass(x,y)

                      grassArr.push(gr)
            }
}
function addpre (){
       

            for (let i = 0 ; i < 5 ; i++){
                let x = Math.floor(Math.random() * matrix.length)
                let y = Math.floor(Math.random() * matrix.length)
                      
                      matrix[y][x] = 3 

                      var pre = new Predator(x,y)

                      predatorArr.push(pre)
            }
        }
       
        function addGrassEat (){
       

                for (let i = 0 ; i < 10 ; i++){
                    let x = Math.floor(Math.random() * matrix.length)
                    let y = Math.floor(Math.random() * matrix.length)
                          
                          matrix[y][x] = 2 
    
                          var great = new GrassEater(x,y)
    
                          grassEaterArr.push(great)
                }
            }
            function addworm (){
       

                for (let i = 0 ; i < 15 ; i++){
                    let x = Math.floor(Math.random() * matrix.length)
                    let y = Math.floor(Math.random() * matrix.length)
                          
                          matrix[y][x] = 4 
    
                          var worm = new Worm(x,y)
    
                          wormArr.push(worm)
                }
            }
            function addfish (){
       

                for (let i = 0 ; i < 10 ; i++){
                    let x = Math.floor(Math.random() * matrix.length)
                    let y = Math.floor(Math.random() * matrix.length)
                          
                          matrix[y][x] = 5 
    
                          var fish = new Fish(x,y)
    
                          fishArr.push(fish)
                }
            }
            function addcat (){
       

                for (let i = 0 ; i < 8 ; i++){
                    let x = Math.floor(Math.random() * matrix.length)
                    let y = Math.floor(Math.random() * matrix.length)
                          
                          matrix[y][x] = 6 
    
                          var cat = new Cat(x,y)
    
                          catArr.push(cat)
                }
            }
            function addhun (){
       

                for (let i = 0 ; i < 8 ; i++){
                    let x = Math.floor(Math.random() * matrix.length)
                    let y = Math.floor(Math.random() * matrix.length)
                          
                          matrix[y][x] = 7 
    
                          var hun= new Hunter(x,y)
    
                          hunterArr.push(hun)
                }
            }
            
     
        
var statistics = {}

setInterval(function(){
     statistics.grass = grassArr.length
     statistics.grassEater = grassEaterArr.length
     statistics.predator = predatorArr.length
     statistics.worm = wormArr.length
     statistics.cat = catArr.length
     statistics.fish = fishArr.length
     statistics.hunter= hunterArr.length

     fs.writeFile("statistics.json",JSON.stringify(statistics),function(){

     })
},300)



io.on("connection",function(socket){
    creanteObjet()
    socket.on("addGr",addGr)
    socket.on("addGrassEat",addGrassEat)
    socket.on("addpre",addpre)
    socket.on("addworm",addworm)
    socket.on("addfish",addfish)
    socket.on("addcat",addcat)
    socket.on("addhun",addhun)
    socket.on("spring", Spring);
    socket.on("summer", Summer);
    socket.on("autumn", Autumn);
    socket.on("winter", Winter);
})
function alldatas() {
        countd = {
                grass: grassArr.length,
                grassEater: grassEaterArr.length,
                predator: predatorArr.length,
                hunter: hunterArr.length,
                fish: fishArr.length,
                cat: catArr.length,
                worm: wormArr.length,
        }
        fs.writeFile("statistics.json", JSON.stringify(countd), function () {
                io.sockets.emit("send datas", countd)
        })
        // io.sockets.emit("send datas", countd)

}
setInterval(alldatas, 150);


