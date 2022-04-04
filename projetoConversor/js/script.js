
class Moedas {
    dolar;
    real;
    euro;
    libra;
    iene;
    peso;
    kwanza;
    brl;
    dolar2;

    constructor() {
        this.dolar = 4.76;
        this.euro = 5.28;
        this.libra = 6.11;
        this.iene = 0.038;
        this.peso = 0.090;
        this.kwanza = 0.010;
        this.brl = 0.21;
        this.dolar2 = 4.76;
        
    }

    converterRealDolar() {
      this.real = document.getElementById("realDolar").value;
      
      const valorEmDolar = parseFloat(this.real) / this.dolar;

      const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    
      const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
     
      document.getElementById("resultadoRealDolar").innerText = `${valorEmReal} é igual a ${valorConvertido}`;

    }

    converterRealEuro() {
        this.real = document.getElementById("realEuro").value;
        
        const valorEmEuro = parseFloat(this.real) / this.euro;

        const valorConvertido = valorEmEuro.toLocaleString('en-US', {style: 'currency', currency: 'EUR'})
       
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoRealEuro").innerText = `${valorEmReal} é igual a ${valorConvertido}`;

    }

    converterRealLibra() {
        this.real = document.getElementById("realLibra").value;
        
        const valorEmLibra = parseFloat(this.real) / this.libra;
  
        const valorConvertido = valorEmLibra.toLocaleString('en-US', {style: 'currency', currency: 'GBP'})
      
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
       
        document.getElementById("resultadoRealLibra").innerText = `${valorEmReal} é igual a ${valorConvertido}`;

     }
 
     converterRealIene() {
        this.real = document.getElementById("realIene").value;
        
        const valorEmIene = parseFloat(this.real) / this.iene;
  
        const valorConvertido = valorEmIene.toLocaleString('en-US', {style: 'currency', currency: 'JPY'})
      
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
       
        document.getElementById("resultadoRealIene").innerText = `${valorEmReal} é igual a ${valorConvertido}`;

     }

     converterRealPeso() {
        this.real = document.getElementById("realPeso").value;
        
        const valorEmPeso = parseFloat(this.real) / this.peso;
  
        const valorConvertido = valorEmPeso.toLocaleString('en-US', {style: 'currency', currency: 'PHP'})
      
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
       
        document.getElementById("resultadoRealPeso").innerText = `${valorEmReal} é igual a ${valorConvertido}`;

     }

     converterDolar2Brl() {
      this.dolar2 = document.getElementById("dolar2Brl").value;
      
      const valorEmBrl = parseFloat(this.dolar2) / this.brl;

      const valorConvertido = valorEmBrl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
      const valorEmDolar2 = parseFloat(this.dolar2).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
     
      document.getElementById("resultadoDolar2Brl").innerText = `${valorEmDolar2} é igual a ${valorConvertido}`;

     

     }


}

const conversao = new Moedas();

