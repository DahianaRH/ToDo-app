import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() texto: string = '';
  @Output() onEliminar: EventEmitter<any> = new EventEmitter();
  isTareaHecha: boolean = false;

  toggleTareaHecha() {
    if(this.isTareaHecha) {
        console.log(`${this.texto} Hecho`);
    } else {
        console.log(`${this.texto} Sin hacer`);
    }
  }

  eliminar() {
    this.onEliminar.emit(null);
  }
}
