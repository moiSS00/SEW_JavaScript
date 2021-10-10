"use strict";
class CalculadoraBásica {
    
    constructor (){
        this.pantalla = ""; //Almacena expresión algrebraica que se irá formando 
        this.memoria = ""; //Representa a la memoria de la calculadora 
    }

    /*
    * Añade un dígito que se le pasa como 
    * parámetro a la pantalla 
    */
    dígitos(digito){ 
        this.pantalla += digito; 
        this.acutalizar(); 
    }

    /*
    * Añade un punto decimal a la pantalla 
    */
    punto(){
        this.pantalla += "."; 
        this.acutalizar();       
    }

    /*
    * Añade el símbolo de suma a la pantalla 
    */
    suma(){ 
        this.pantalla += "+"; 
        this.acutalizar();     
    }

    /*
    * Añade el símbolo de resta a la pantalla 
    */
    resta(){
        this.pantalla += "-"; 
        this.acutalizar();     
    }

    /*
    * Añade el símbolo de multiplicación a la pantalla 
    */
    multiplicación(){
        this.pantalla += "*"; 
        this.acutalizar();      
    }

    /*
    * Añade el símbolo de división a la pantalla 
    */
    división(){
        this.pantalla += "/"; 
        this.acutalizar();     
    }

    /*
    * Añade a la pantalla el valor acumulado en memoria  
    */
    mrc(){ 
        this.pantalla += this.memoria; 
        this.acutalizar(); 
    }

    /*
    * Resta el numero en pantalla a la memoria. En caso, de que sea una operación 
    * lo que hay en pantalla, se evaluará y se restará el resultado obtenido a la memoria 
    */
    mMenos(){ 
        this.igual(); 
        if(this.pantalla.charAt(0) == "-"){ //Menos y menos es más 
            this.memoria += "+" + this.pantalla.substring(1,this.pantalla.length); 
        }
        else{ //Menos y más es menos 
            this.memoria += "-"; 
            this.memoria += this.pantalla;
        }
        try{ //Se controla si no se inserta en memoria nada malicioso
            this.memoria = eval(this.memoria); 
            this.acutalizar();  
        }
        catch{
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
         
    }

    /*
    * Suma el numero en pantalla a la memoria. En caso, de que sea una operación 
    * lo que hay en pantalla, se evaluará y se sumará el resultado obtenido a la memoria 
    */
    mMas(){
        this.igual();
        this.memoria += "+"; 
        this.memoria += this.pantalla; 
        try{ //Se controla si no se inserta en memoria nada malicioso
            this.memoria = eval(this.memoria); 
            this.acutalizar();  
        }
        catch{
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
    }

    /*
    * Se limpia la memoria y la pantalla 
    */
    borrar(){ 
       this.pantalla = "";
       this.memoria = "";  
       this.acutalizar(); 
    }

    /*
    * Se realiza la operación escrita en la pantalla con eval 
    */
    igual(){
        try{ //Se prueba a realizar la operación 
            this.pantalla = "" + eval(this.pantalla);
            this.acutalizar();     
        }catch(error){ //En caso de algún error de sintáxis que se haya filtrado 
            document.getElementById("pantalla").value = "Error de sintáxis";
            this.pantalla = ""; 
            this.memoria = ""; 
        }
    }

    /*
    * Actualiza el contenido de la pantalla 
    */
    acutalizar(){ 
        document.getElementById("pantalla").value = this.pantalla;
    }
}

class CalculadoraCientífica extends CalculadoraBásica {
    
    constructor (){
        super(); //LLama al constructo de la super clase
    }

    /*
    * Añade la constante PI a la pantalla  
    */
    pi(){
        this.pantalla += Math.PI;
        this.acutalizar();  
    }

    /*
    * Añade la constante E a la pantalla  
    */
    e(){
        this.pantalla += Math.E; 
        this.acutalizar();  
    }

    /*
    * Añade un paréntesis abierto a la pantalla   
    */
    parentesisAbierto(){
        this.pantalla += "("; 
        this.acutalizar();   
    }

    /*
    * Añade un paréntesis cerrado a la pantalla   
    */
    parentesisCerrado(){
        this.pantalla += ")"; 
        this.acutalizar();   
    }
  
    /*
    * Realiza el logaritmo neperiano de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    logaritmoNeperiano(){
        this.pantalla = "" + Math.log(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza el logaritmo en base 10 de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    logaritmoBase10(){
        this.pantalla = "" + Math.log10(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza una potencia con base e y tomando como exponente el valor de la pantalla.
    * Si la pantalla tiene una expresión , primero se evalua
    */
    exponencialE(){
        this.pantalla = "" + Math.exp(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza una potencia con base 10 y tomando como exponente el valor de la pantalla.
    * Si la pantalla tiene una expresión , primero se evalua
    */
    exponencial10(){
        this.pantalla = "" + Math.pow(10,eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza la raíz cuadrada de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    raiz(){
        this.pantalla = "" + Math.sqrt(eval(this.pantalla)); 
        this.acutalizar(); 
    }

    /*
    * Realiza una potencia con base 10 y tomando como base el valor de la pantalla 
    * y pidiendo el exponenete al usuario mediante una ventana emergente.Si la pantalla 
    * tiene una expresión, primero se evalua
    */
    potencia(){
        this.pantalla = "" + Math.pow(eval(this.pantalla),prompt("Valor del exponente","0")); 
        this.acutalizar(); 
    }
 
    /*
    * Realiza el seno de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    seno(){
        this.pantalla = "" + Math.sin(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza el arcoseno de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    arcoseno(){
        this.pantalla = "" + Math.asin(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza el coseno de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    coseno(){
        this.pantalla = "" + Math.cos(eval(this.pantalla)); 
        this.acutalizar();   
    }
 
    /*
    * Realiza el arcocoseno de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    arcocoseno(){
        this.pantalla = "" + Math.acos(eval(this.pantalla)); 
        this.acutalizar();   
    }
  
    /*
    * Realiza latangente de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    tangente(){
        this.pantalla = "" + Math.tan(eval(this.pantalla)); 
        this.acutalizar();   
    }

    /*
    * Realiza la arcotangente de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    arcotangente(){
        this.pantalla = "" + Math.atan(eval(this.pantalla)); 
        this.acutalizar();   
    }

    
    /*
    * Realiza el modulo / valor absoluto de lo que está actualmente en pantalla.
    * Si la pantalla tiene una expresión , primero se evalua 
    */
    modulo(){
        this.pantalla = "" + Math.abs(eval(this.pantalla)); 
        this.acutalizar();   
    }

    
    /*
    * Elimina el último carácter introducido en la pantalla 
    */
    atras(){
        this.pantalla = this.pantalla.substring(0,this.pantalla.length-1); 
        this.acutalizar();   
    }
}

var calculadora = new CalculadoraCientífica(); 
