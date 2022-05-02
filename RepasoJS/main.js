var nombre = "Christian Reyes";
var altura = 170;

/*var concatenacion = nombre + "   "+ altura;
var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;
datos.innerHTML = '<h1> hola</h1> <h2>Mundo</h2>';

if(altura>=190){
    datos.innerHTML+= '<h1>Eres una persona ALTA</h1>'

}else{
    datos.innerHTML+= '<h1>Eres una persona BAJITA</h1>'
}

for(var i = 2000; i<=2020; i++){
    datos.innerHTML+= "<h2>Estamos en el año: "+i;
} */

var datos = document.getElementById("datos");
datos.innerHTML = '<h1> hola '+nombre+ '</h1>';

var nombres = ['uno', 'dos','tres'];
nombres.forEach((nombre)=>{
    document.write(nombre + '<br/>');
}
)

var coche ={
    modelo: 'Mercedes Clase A',
    mostrarDatos(){
        console.log(this.modelo);
    }
}

document.write("<h1>"+altura+"</h1>");
coche.mostrarDatos();

var saludar = new Promise((resolve, reject)=>{

    setTimeout(() =>{
        let saludo = "Hola a todos";
        if(saludo){
            resolve(saludo);
        }else{
            reject("No hay saludos disponibles");
        }



    },2000);

});

saludar.then(resultado => {
    alert(resultado);

})
.catch(err=>{
    alert(err);

});









                