
let bienvenida = document.getElementById("bienvenida")
let bienvenidaNombreBoton;
let nombre;
let pantallaElegirTema = document.getElementById('elegir__tema')

function inicio() {
    bienvenida.style.display = "block";
    bienvenidaNombreBoton = document.getElementById("bienvenida__nombre__boton");
    
    bienvenidaNombreBoton.addEventListener('click', function() {
        nombre = document.getElementById('bienvenida__nombre').value
        elegirTema()
    })
}

function elegirTema() {
    bienvenida.style.display = "none";
    pantallaElegirTema.style.display = "block";
    document.getElementById("elegir__tema--nombre").innerHTML = "Bienvenido " + nombre
    botonAstronomia = document.getElementById('jugar_astronomia')
    botonAstronomia.addEventListener('click', triviaAstronomia)
    botonCine = document.getElementById('jugar_cine');
    botonCine.addEventListener('click', triviaCine)
}

function volverAJugar() {
    document.getElementById('volver_jugar').style.display = "block";
    botonAstronomia = document.getElementById('jugar_astronomia2')
    botonAstronomia.addEventListener('click', triviaAstronomia)
    botonCine = document.getElementById('jugar_cine2');
    botonCine.addEventListener('click', triviaCine)
}

document.onload = inicio()

let explicacionReglasAstronomia = document.getElementById('explicacion_reglas_astronomia')
let explicacionReglasCine = document.getElementById('explicacion_reglas_cine');


function triviaAstronomia() {
    let puntaje = 0
    document.getElementById('volver_jugar').style.display = 'none';
    document.getElementById('mostrar_puntaje').style.display = 'none';
    pantallaElegirTema.style.display = 'none';
    explicacionReglasAstronomia.style.display = 'block';
    document.getElementById('comenzar_astronomia').addEventListener('click', function() {
        explicacionReglasAstronomia.style.display = "none"
        document.getElementById('astronomia_pregunta_uno').style.display = "block";
        opcionesAstronomiaPreguntaUno = document.getElementsByClassName('opciones_astronomia_pregunta_uno_boton')
        opcionesAstronomiaPreguntaDos = document.getElementsByClassName('opciones_astronomia_pregunta_dos_boton')
        opcionesAstronomiaPreguntaTres = document.getElementsByClassName('opciones_astronomia_pregunta_tres_boton')
        opcionesAstronomiaPreguntaCuatro = document.getElementsByClassName('opciones_astronomia_pregunta_cuatro_boton')

        for(let i = 0; i < opcionesAstronomiaPreguntaUno.length; i++) {
            opcionesAstronomiaPreguntaUno[i].addEventListener('click', function() { 
                if(opcionesAstronomiaPreguntaUno[i].value === opcionesAstronomiaPreguntaUno[0].value) {
                    puntaje++
                }
                document.getElementById('astronomia_pregunta_uno').style.display = "none";
                document.getElementById('astronomia_pregunta_dos').style.display = "block"; 
            })
        }
        for(let i = 0; i < opcionesAstronomiaPreguntaDos.length; i++) {
            opcionesAstronomiaPreguntaDos[i].addEventListener('click', function() { 
                if(opcionesAstronomiaPreguntaDos[i].value === opcionesAstronomiaPreguntaDos[1].value) {
                    puntaje++
                }
                document.getElementById('astronomia_pregunta_dos').style.display = "none";
                document.getElementById('astronomia_pregunta_tres').style.display = "block"; 
            })
        }
        for(let i = 0; i < opcionesAstronomiaPreguntaTres.length; i++) {
            opcionesAstronomiaPreguntaTres[i].addEventListener('click', function() { 
                if(opcionesAstronomiaPreguntaTres[i].value === opcionesAstronomiaPreguntaTres[0].value) {
                    puntaje++
                }
                document.getElementById('astronomia_pregunta_tres').style.display = "none";
                document.getElementById('astronomia_pregunta_cuatro').style.display = "block"; 
            })
        }
        for(let i = 0; i < opcionesAstronomiaPreguntaCuatro.length; i++) {
            opcionesAstronomiaPreguntaCuatro[i].addEventListener('click', function() { 
                if(opcionesAstronomiaPreguntaCuatro[i].value === opcionesAstronomiaPreguntaCuatro[1].value) {
                    puntaje++
                }
                document.getElementById('astronomia_pregunta_cuatro').style.display = "none";
                document.getElementById('mostrar_puntaje').style.display = 'block'; 
                document.getElementById('puntaje').innerHTML = "Tu puntaje es de<br> " + puntaje + "/4";
                volverAJugar()                                   
            })
        } 
    })
}



function triviaCine() {
    let puntaje = 0
    document.getElementById('volver_jugar').style.display = 'none';
    document.getElementById('mostrar_puntaje').style.display = 'none';
    pantallaElegirTema.style.display = 'none';
    explicacionReglasCine.style.display = 'block';
    document.getElementById('comenzar_cine').addEventListener('click', function() {
        explicacionReglasCine.style.display = "none";
        document.getElementById('cine_pregunta_uno').style.display = "block";
        opcionesCinePreguntaUno = document.getElementsByClassName('opciones_cine_pregunta_uno_boton')
        opcionesCinePreguntaDos = document.getElementsByClassName('opciones_cine_pregunta_dos_boton')
        opcionesCinePreguntaTres = document.getElementsByClassName('opciones_cine_pregunta_tres_boton')
        opcionesCinePreguntaCuatro = document.getElementsByClassName('opciones_cine_pregunta_cuatro_boton')

        for(let i = 0; i < opcionesCinePreguntaUno.length; i++) {
            opcionesCinePreguntaUno[i].addEventListener('click', function() { 
                if(opcionesCinePreguntaUno[i] === opcionesCinePreguntaUno[0]) {
                    puntaje++
                }
                document.getElementById('cine_pregunta_uno').style.display = "none";
                document.getElementById('cine_pregunta_dos').style.display = "block"; 
            })
        }
        for(let i = 0; i < opcionesCinePreguntaDos.length; i++) {
            opcionesCinePreguntaDos[i].addEventListener('click', function() { 
                if(opcionesCinePreguntaDos[i] === opcionesCinePreguntaDos[3]) {
                    puntaje++
                }
                document.getElementById('cine_pregunta_dos').style.display = "none";
                document.getElementById('cine_pregunta_tres').style.display = "block"; 
            })
        }
        for(let i = 0; i < opcionesCinePreguntaTres.length; i++) {
            opcionesCinePreguntaTres[i].addEventListener('click', function() { //Evaluar respuestas de la pregunta 3
                if(opcionesCinePreguntaTres[i] === opcionesCinePreguntaTres[2]) {
                    puntaje++
                }
                document.getElementById('cine_pregunta_tres').style.display = "none";
                document.getElementById('cine_pregunta_cuatro').style.display = "block"; //Cambio de pregunta
            })
        }
        for(let i = 0; i < opcionesCinePreguntaCuatro.length; i++) {
            opcionesCinePreguntaCuatro[i].addEventListener('click', function() { //Evaluar respuestas de la pregunta 4
                if(opcionesCinePreguntaCuatro[i] === opcionesCinePreguntaCuatro[1]) {
                    puntaje++
                }
                document.getElementById('cine_pregunta_cuatro').style.display = "none";
                document.getElementById('mostrar_puntaje').style.display = 'block'; 
                document.getElementById('puntaje').innerHTML = "Tu puntaje es de<br> " + puntaje + "/4";   
                volverAJugar()                                                                    //Mostrar puntaje
            })
        } 
    })
}

