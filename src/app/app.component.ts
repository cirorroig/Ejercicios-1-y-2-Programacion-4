import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios1y2';
  
  edadUno: number | null = null;
  edadDos: number | null = null;
  suma: number | null = null;
  promedio: number | null = null;

  calcular(){
    if (this.edadUno !== null && this.edadDos !== null) {
      this.suma = +this.edadUno + +this.edadDos;
      this.promedio = this.suma / 2;
    }
  }

  limpiarInputs(form: any){
    form.resetForm();
    this.suma = null;
    this.promedio = null;
  }
}
