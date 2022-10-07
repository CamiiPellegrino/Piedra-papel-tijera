let cajasUser = document.getElementsByClassName("cajasUser")
n = cajasUser.length

for(i = 0;i < n;i++){
    cajasUser[i].addEventListener("click",function(evt){
        jugada(evt)
    },false)
}

let cajaPiedra = document.getElementById("cajaPiedra")
let cajaPapel = document.getElementById("cajaPapel")
let cajaTijera = document.getElementById("cajaTijera")
let marcador = document.getElementById("marcador")

let imgPiedra = "file:///C:/Users/camii/Desktop/Documentos%20Cami/ESTUDIO/programacion/codo%20a%20codo%20-%20Java%20(charly%20cimino)/javascript/minijuego-Piedra,Papel,Tijera/piedra.png"
let imgPapel = "file:///C:/Users/camii/Desktop/Documentos%20Cami/ESTUDIO/programacion/codo%20a%20codo%20-%20Java%20(charly%20cimino)/javascript/minijuego-Piedra,Papel,Tijera/papel.png"
let imgTijera ="file:///C:/Users/camii/Desktop/Documentos%20Cami/ESTUDIO/programacion/codo%20a%20codo%20-%20Java%20(charly%20cimino)/javascript/minijuego-Piedra,Papel,Tijera/tijera.png"


function jugada(caja){
    //caja.src = "tijera.png"
    console.log(caja.path)
    let cajaImg = caja.path[0]
    let cajaDiv = caja.path[1]
elegirImg(cajaDiv)
compuImgAleatoria()
ganador(cajaImg)
}


function elegirImg(caja){

    if(caja.id == "cajaPiedra"){
        cajaPiedra.style.borderColor = "rgb(255, 153, 28)"
        cajaPapel.style.borderColor = "black"
        cajaTijera.style.borderColor = "black"
        
        cajaPiedra.style.opacity = 1
        cajaPapel.style.opacity = .5
        cajaTijera.style.opacity = .5

    } else if(caja.id == "cajaPapel"){
        cajaPiedra.style.borderColor = "black"
        cajaPapel.style.borderColor = "rgb(255, 153, 28)"
        
        cajaPiedra.style.opacity = .5
        cajaPapel.style.opacity = 1
        cajaTijera.style.borderColor = "black"
        
        cajaTijera.style.opacity = .5
    } else if(caja.id == "cajaTijera"){
        cajaPiedra.style.borderColor = "black"
        cajaPapel.style.borderColor = "black"
        cajaTijera.style.borderColor = "rgb(255, 153, 28)"
        
        cajaPiedra.style.opacity = .5
        cajaPapel.style.opacity = .5
        cajaTijera.style.opacity = 1

    }
}

function compuImgAleatoria(){
    let random = Math.random();
    random = Math.trunc(random * 3 + 1)
    let imgCompu = document.getElementById("imgCompu")
    

if(random == 1){
    imgCompu.src = "piedra.png"
}else if(random == 2){
    imgCompu.src = "papel.png"
}else if(random == 3){
    imgCompu.src = "tijera.png"
}

}

function ganador(cajaImg){
    let imgCompu = document.getElementById("imgCompu").src
    let imgUsuario = cajaImg.src
        if((imgUsuario == imgCompu)){//EMPATES
            marcador.innerHTML = "Empate"
        }else if (((imgUsuario == imgPiedra) && (imgCompu == imgTijera)) || ((imgUsuario == imgPapel) && (imgCompu == imgPiedra))||((imgUsuario == imgTijera) && (imgCompu == imgPapel))){//gana USER
            marcador.innerHTML = "Has ganado!:D"
        }else if (((imgCompu == imgPiedra) && (imgUsuario == imgTijera)) || ((imgCompu == imgPapel) && (imgUsuario == imgPiedra))||((imgCompu == imgTijera) && (imgUsuario == imgPapel))){//gana CPU
            marcador.innerHTML = "Has perdido:("
        
    }
}