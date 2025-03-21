import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})

export class TwoWayBindingComponent {
  @Input() size: number | string = 20;

  fontSizePx = 16;

  inCreaseSize() {
    this.resize(+1);
  }
  decreaseSize() {
    this.resize(-1);
  }

  resize(delta: number){
    this.size = Math.min(40, Math.max(8, +this.size + delta));
  }
}
