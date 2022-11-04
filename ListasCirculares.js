class Base{
    constructor(nombre, minutos)
    {
        this.nombre = nombre; 
        this.minutos = minutos; 
        this.ant = null; 
        this.sig = null; 
    }
}

class RutaTransporte{
    constructor()
    {
        this.primero = null; 
    }

    agregar(base)
    {
        if(this.primero === null)
        {
            this.primero = base; 
            base.sig = base;  
            base.ant = base;  
        }
        else
        {
            base.sig = this.primero; 
            base.ant = this.primero.ant; 
            this.primero.ant.sig = base; 
            this.primero.ant = base; 
        }

        return this.primero; 
    }

    buscar()
    {

    }

    eliminar()
    {

    }

    imprimir()
    {

        let listaBases = `${this.primero.nombre} ${this.primero.minutos} `; 
        let temp = this.primero.sig;

        while(temp.nombre !== this.primero.nombre){
            listaBases += `${temp.nombre} ${temp.minutos} `;
            temp = temp.sig;
        }  

        return listaBases; 
    }
}

let base = new Base('A', 120); 
let ruta = new RutaTransporte();

ruta.agregar(base); 

base = new Base('B', 180); 
ruta.agregar(base); 

base = new Base('C', 240); 
ruta.agregar(base);

console.log(ruta.imprimir()); 
