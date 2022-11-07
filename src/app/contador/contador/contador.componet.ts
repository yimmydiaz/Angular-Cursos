import {Component} from '@angular/core';
@Component({
    selector:'app-contador',
    template: `
        <h1>  {{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumularBase(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumularBase(-base)">-{{base}}</button>   
    
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero:number=10;
    base: number =5;
  
    Restar(){
      this.numero = this.numero-1;
    }
    Sumar(){
      this.numero= this.numero+1;
    }
  
    acumular(valor:number){
      this.numero+=valor;
    }
  
    acumularBase(valor: number){
      this.base +=valor;
    }
}