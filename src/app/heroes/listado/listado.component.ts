import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor','Capitan America']

  heroeBorrado: string = ''

  borrarHeroe() {
     const ultimoBorrado = this.heroes.shift() || ''
     this.heroeBorrado = ultimoBorrado

    //this.heroes.shift() //shift borra el primer elemento

    // this.heroeBorrado = this.heroes[3];
    // this.heroes.splice(3,1) // splice borra desde el elemeno 3 tantos elementos como dice el segundo parametro
  }

}
