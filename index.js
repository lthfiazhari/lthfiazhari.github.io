let tulisMenang = document.getElementsByClassName("menangh1")
let inputan = 0
let dadu1 = document.getElementById('kotakDadu1').style.backgroundImage
let dadu2 = document.getElementById('kotakDadu2').style.backgroundImage
function rollTheDice(){
    let a = Math.floor(Math.random() * 7)
    let b = Math.floor(Math.random() * 7)

    document.getElementById('menang').style.backgroundColor = "#000000"
    let gambarDadu = [
        {
            gambar: "url('./img/dadu1.jpg')",
            id: 1
        },
        {
            gambar: "url('./img/dadu2.jpg')",
            id: 2
        },
        {
            gambar: "url('./img/dadu3.jpg')",
            id: 3
        },
        {
            gambar: "url('./img/dadu4.jpg')",
            id: 4
        },
        {
            gambar: "url('./img/dadu5.jpg')",
            id: 5
        },
        {
            gambar: "url('./img/dadu6.jpg')",
            id: 6
        }
    ]
    let pilihanA = a
    let pilihanB = b

    for(let i = 0; i < gambarDadu.length; i++){
        if (pilihanA === gambarDadu[i].id){
            document.getElementById('kotakDadu1').style.backgroundImage = gambarDadu[i].gambar
        }
        if (pilihanB === gambarDadu[i].id){
            document.getElementById('kotakDadu2').style.backgroundImage = gambarDadu[i].gambar
        }
    }

//document.getElementById('kotakDadu1').style.backgroundImage = "url('./img/dadu1.jpg')" // ganti gambar


    let input = inputan
    let menangA = false
    let menangB = false
    let draw = false

    if (input === "a"){
        if (a > b){
            menangA = true
        } else if (a < b){
            menangA = false
        } else if (a === b){
            draw = true
        }
    } else {
        if (b > a){
            menangB = true
        } else if (b < a){
            menangB = false
        } else if (b === a){
            draw = true
        }
    }

    if (input === "a"){
        if (draw === true){
            // console.log(`Sama angkanya.ga ada yang menang. coba lagi`)
            return tulisMenang[0].innerHTML = "Draw. coba lagi"
        } else if (menangA === true){
            // console.log(`Selamat kamu menang`)
            return tulisMenang[0].innerHTML = "Selamat kamu menang"
        } else {
            // console.log(`Kamu kalah sama b, coba lagi`)
            return tulisMenang[0].innerHTML = "Kamu kalah !!!, coba lagi"
        }
    } else {
        if (draw === true){
            // console.log(`Sama angkanya.ga ada yang menang. coba lagi`)
            return tulisMenang[0].innerHTML = "Draw. coba lagi"
        } else if (menangB === true){
            // console.log(`Selamat kamu menang`)
            return tulisMenang[0].innerHTML = "Selamat kamu menang !!!"
        } else {
            // console.log(`Kamu kalah sama a, coba lagi`)
            return tulisMenang[0].innerHTML = "Kamu kalah !!!, coba lagi"
        }
    }
}

let roll = document.getElementById("start")
// console.log(roll)

roll.addEventListener("click", rollTheDice)

function inputKlik1(){
    inputan = "a"
    pilih1.style.color = "#f05454"
    return inputan
}

let pilih1 = document.getElementById("buttonselect1")
// console.log(pilih1)
pilih1.addEventListener("click", inputKlik1)


function inputKlik2(){
    inputan = "b"
    pilih2.style.color = "#f05454"
    return inputan
}
let pilih2 = document.getElementById("buttonselect2")
// console.log(pilih1)
pilih2.addEventListener("click", inputKlik2)



// document.getElementById('kotakDadu1').style.backgroundImage = "url('./img/dadu1.jpg')" // ganti gambar
// console.log(document.getElementById('kotakDadu1').style.backgroundImage)
// console.log(dadu1)

