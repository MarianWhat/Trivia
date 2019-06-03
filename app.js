const contUserName = document.getElementById("name");
const contNameShow = document.getElementById("nameShow"); // Esto me aljbkfns

// Secciones
const secInicioVar = document.getElementById("secInicio");
const secBienvenidaVar = document.getElementById("secBienvenida");
const secPreguntaMVar = document.getElementById("secPreguntaM");
const secPreguntaPVar=document.getElementById("secPreguntaP");
const secRespuestas=document.getElementById("secRespuestas");
const secByeVar=document.getElementById("bye");


const respuestaCorrVar=document.getElementById("correctas");
const respuestaIncoVar=document.getElementById("incorrectas");

//Bortones
const triviaMVar =document.getElementById('triviaM');
const triviaPVar =document.getElementById('triviaP');
const btnInicioVar = document.getElementById('btnInicio');
const btnPreguntaMVar = document.getElementById('btnPreguntaM');
const btnPreguntaPVar = document.getElementById('btnPreguntaP');
const btnMUnoVar = document.getElementById('btnMUno');
const btnMDosVar = document.getElementById('btnMDos');
const btnMTresVar = document.getElementById('btnMTres');
const btnPUnoVar = document.getElementById('btnPUno');
const btnPDosVar = document.getElementById('btnPDos');
const btnPTresVar = document.getElementById('btnPTres');

// Variables Comunes
let contador= 0;
let cantidadInco=0;

// Cuando le doy click a inicio
btnInicioVar.addEventListener('click', () => { //se puede usar cualquier expresion de funciones
 contNameShow.innerHTML = contUserName.value; 
  secBienvenidaVar.style.display="flex";
 secInicioVar.style.display="none";
});

 
// Para Elegir que tipo de Juego
triviaMVar.addEventListener('click',function(){elecionTrivia(0)});
triviaPVar.addEventListener('click',function(){elecionTrivia(1)});

function elecionTrivia(opc) {
  if (opc===0) {
    secPreguntaMVar.style.display="flex";
    secBienvenidaVar.style.display="none";
    secPreguntaPVar.style.display="none";
  } else if (opc===1) {
    secPreguntaPVar.style.display="flex";
    secBienvenidaVar.style.display="none";
    secPreguntaMVar.style.display="none";
  }
}

//Verificar respuestas correctas:

btnMUnoVar.addEventListener('click', validar);
btnMDosVar.addEventListener('click', validar);
 btnMTresVar.addEventListener('click', validar);
 btnPUnoVar.addEventListener('click', validar);
 btnPDosVar.addEventListener('click', validar);
 btnPTresVar.addEventListener('click', validar);
function validar() {
  contador=contador+1;
}

btnPreguntaMVar.addEventListener('click', mostrar);
btnPreguntaPVar.addEventListener('click', mostrar);


function mostrar(){
  cantidadInco=3-contador;
	respuestaCorrVar.innerHTML="Respuestas correctas: "+contador;
  secPreguntaPVar.style.display="none";
  secPreguntaMVar.style.display="none";
  secRespuestas.style.display="flex";
  respuestaIncoVar.innerHTML="Respuestas incorrectas: "+cantidadInco;
}
// Volver o Salir

function queHacer(opc) {
  
  if (opc===0) {
    // Volver
    secInicioVar.style.display='flex';
    secBienvenidaVar.style.display='none';
    secPreguntaPVar.style.display='none';
    secRespuestas.style.display='none';

    //Inicializar Variables
    contador = 0;
    cantidadInco=0;
    opcionTrivia = 3;
  } else if (opc===1) {
    secByeVar.style.display='flex';
  }
}
