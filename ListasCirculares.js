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
    }

    buscar()
    {

    }

    eliminar()
    {

    }

    imprimir()
    {

    }
}
