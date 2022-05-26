import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  items: string[] = [];
  str: string = '';

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('todo-list') || '[]');
  }

  addItem() {
    console.log(this.str);
    if (this.str) {
      this.items.push(this.str);
      localStorage.setItem('todo-list', JSON.stringify(this.items));
      this.str = '';
    }
  }
}
