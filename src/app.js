// CLASE 05 ADMINISTRADOR DE PAQUETES NPM

// Modulo: es un archivo que tiene codigo de JS que encapsula una funcionalidad especifica. 
// Los modulos se usan para reutilizar codigo y mantenerlo organizado.

// importar modulos escritos por nosotros:

const operaciones = require('./operaciones.js')

// 'Require' es una funcion que me permite cargar o requerir algun modulo en particular.


console.log(operaciones.suma(5,5))
console.log(operaciones.resta(10,5))

//Modulos nativos: son los que vienen incluidos en Node JS. No es necesario instalarlos, solo importarlos para poder usarlos. 

//Los mas conocidos: 
//1) FileSystem: permite trabajar con el sistema de archivos de la compu. 
//2) Modulo HTTP: permite crear un servidor web. 
//3) Modulo Crypto: permite encriptar datos. 
//4) Modulo Path: permite trabajar con rutas de archivos y directorios. 
//5) Modulo Timers: setTimeout, setInterval.. etc. 
//6) Console: para mostrar mensajes por consola. 


//Modulos de terceros: no vienen incluidos en node y los tenemos que instalar nosotros. 

//Pasos para instalar modulos de terceros: 

//1) Instalamos el modulo de terceros desde la termina con el comando "npm install nombreModulo". 

//npm install moment
//npm i express


//Y si lo quiero borrar: npm uninstall moment

//Instalamos dependencias de desarrollo. (Esta dependencia solo la vamos a usar  en etapa de desarrollo )

//ejemplo: npm i nodemon -D

