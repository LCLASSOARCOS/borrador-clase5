//declaro mis funciones:

const suma = (a,b) => a + b
const resta =(a, b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a, b) => a / b

//dos formas de importar y exportar modulos:
//Common JS
// ES Module (llega en el año 2015)

module.exports = {
    suma,
    resta,
    multiplicar,
    dividir
} 