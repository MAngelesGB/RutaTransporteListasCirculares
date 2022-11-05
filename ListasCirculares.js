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

    buscar(nombre)
    {
        let listaBases = ""; 
        let temp = this.primero.sig;

        if(this.primero.nombre === nombre)
        {
            return `${this.primero.nombre} ${this.primero.minutos}`
        }
        else
        {
            while(temp.nombre !== this.primero.nombre)
            {
                if(temp.nombre === nombre)
                {
                    listaBases = `${temp.nombre} ${temp.minutos}`;
                }
    
                temp = temp.sig; 
            }

            return listaBases
        }   
    }

    eliminar(nombre)
    {
        let temp = this.primero.sig;
        
        if(this.primero.nombre === nombre)
        {
            this.primero.ant.sig = this.primero.sig
            this.primero.sig.ant = this.primero.ant; 
            this.primero = this.primero.sig; 
        }
        else
        {
            while(temp.nombre !== this.primero.nombre)
            {
                if(temp.nombre === nombre)
                {
                    temp.ant.sig = temp.sig; 
                    temp.sig.ant = temp.ant; 
                }
                temp = temp.sig; 
            }

        }
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

    recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin)
    {
        let recorridoBase = `${baseInicio} Horas: ${horaInicio} Minutos ${minutoInicio} `; 
        let temp = this.primero;
        let bandera = false; 
        let totalInicio = minutoInicio = (horaInicio*60) + minutoInicio; 
        let totalFin = minutoFin = (horaFin*60) + minutoFin; 

        while(temp.nombre !== baseInicio)
        {
            temp = temp.sig; 
        }
       
        while(bandera === false)
        {
            temp = temp.sig; 
            if(totalInicio+temp.sig.minutos > totalFin)
            {
                bandera = true; 
            }
            else
            {
                totalInicio += temp.minutos; 
                recorridoBase += `${temp.nombre} Horas: ${Math.trunc(totalInicio/60)} Minutos: ${totalInicio%60} `;
            }
        }
        return recorridoBase; 

    }
}

let base = new Base('A', 65); 
let ruta = new RutaTransporte();

ruta.agregar(base); 

base = new Base('B', 30); 
ruta.agregar(base); 

base = new Base('C', 20); 
ruta.agregar(base);

console.log(ruta.imprimir()); 
console.log(ruta.buscar('A')); 
console.log(ruta.recorrido('B', 5, 15, 7, 35)); 
ruta.eliminar('C');  
console.log(ruta.imprimir()); 

