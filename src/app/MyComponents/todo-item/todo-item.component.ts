import { ToDo } from './../../ToDo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo = new ToDo();
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<ToDo> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onClick(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log('Deleted');
  }
  onCheckboxClick(todo: ToDo) {
    this.todoCheckbox.emit(todo);
  }
}
