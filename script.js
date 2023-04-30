var socket = io()
let side = 30
///օբյեկտներ պահելու զանգվածներ

function setup() {
    createCanvas(30 * side, 30 * side)
    background("gray")
    const data = {
        labels: [
                'Grass',
                'GrassEater',
                'Predator',
                'Cat',
                'Fish',
                'Hunter',
                "Worm"
        ],
        datasets: [{
                label: 'Chart of game',
                data: [15, 15, 15, 15, 15, 15,15],
                backgroundColor: [
                        'rgb(128, 255, 0',
                        'rgb(165, 41, 41)',
                        'rgb(60, 60, 60)',
                        'rgb(238, 207, 34)',
                        'rgb(171, 203, 255)',
                        'rgb(224, 224, 224)',
                        'rgb(165, 41, 41)',
                ],
                hoverOffset: 5
        }]
};
const config = {
        type: 'doughnut',
        data: data,
        options: {
                plugins: {
                        legend: {
                                display: true,
                                labels: {
                                        color: '#fff'
                                }
                        }
                }
        }
};
myChart = new Chart(
        document.getElementById('myChart'),
        config

);

}
socket.on ("send datas", function(counts){
        myChart.data.datasets[0].data = [counts.grass, counts.grassEater, counts.predator, counts.cat, counts.hunter, counts.fish,counts.worm];
        myChart.update();
})

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







}
socket.on("send matrix", nkarel)

function addGr(){
        socket.emit("addGr")
}
function addGrassEat(){
        socket.emit("addGrassEat")
}
function addpre(){
        socket.emit("addpre")
}
function addworm(){
        socket.emit("addworm")
}
function addfish(){
        socket.emit("addfish")
}
function addcat(){
        socket.emit("addcat")
}
function addhun(){
        socket.emit("addhun")
}