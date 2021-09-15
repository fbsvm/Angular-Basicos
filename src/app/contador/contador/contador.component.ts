import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `

        <h1> {{ titulo }}</h1>

        <span> {{ 'Base: ' + base }}</span>
        
        <br>
        
        <button (click)="acumular(base)"> + {{ base }} </button>
        
        <span> {{ numero }} </span>
        
        <button (click)="acumular(-base)"> - {{ base }} </button>
    `
})

export class ContadorComponent {

    titulo: string = 'Contador APP';
    numero: number = 0;

    base: number = 5;

    acumular(valor: number) {
        this.numero+=valor;  
  }

}
