class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad +=1;

    }

    reducirVelocidad(){
        this.velocidad-=1;
    }

}

class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad){
    super(modelo,velocidad, antiguedad);
    this.altura = 5;}

    mostrarAltura(){
        return "La altura es:  "+this.altura;
    }
}

var autobus1 = new Autobus('PEGASUS', 200,2017);
console.log(autobus1);

var coche1 = new Coche('BMW', 200,2017);


document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");
coche1.reducirVelocidad();
document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");