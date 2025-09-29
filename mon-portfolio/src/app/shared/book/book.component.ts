import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'extranet-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  isTurn = false

  turn(): void {
    this.isTurn = !this.isTurn
  }
}
