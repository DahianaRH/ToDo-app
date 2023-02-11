import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() newTask: string = '';
  @Output() onAdd: EventEmitter<string> = new EventEmitter();

  Add() {
    this.onAdd.emit(this.newTask);
    this.newTask='';

  }

  imprimirValor() {
    console.log(this.newTask);
  }
}
