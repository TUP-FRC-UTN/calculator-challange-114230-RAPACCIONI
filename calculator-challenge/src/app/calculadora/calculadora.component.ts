import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  valor1: number = 0;
  valor2: number = 0;
  resultado: number | string | null = null;

  operar(operacion: string) {
    switch (operacion) {
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case '*':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '/':
        this.resultado = this.valor2 != 0 ? this.valor1 / this.valor2 : 'Error: Division por 0';
        break;
      case '^':
        this.resultado = Math.pow(this.valor1, this.valor2);
        break;
        case 'sqrt':
        this.resultado = Math.sqrt(this.valor1);
        break;
        case 'CE':
        this.limpiar();
        break;


    }
  }

  limpiar(){
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = null;
  }

}
