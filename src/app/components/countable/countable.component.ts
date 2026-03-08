import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-countable',
  imports: [],
  templateUrl: './countable.component.html',
  styleUrl: './countable.component.css'
})
export class CountableComponent {
  public count = signal(0)
  public isMax = computed(() => this.count() > 10);

  constructor() {
    effect(() => {
      console.log(`Valor atual do contador: ${this.count()}`);
    });
  }


  public increaseValue(): void {
    this.count.update((actualValue) => actualValue + 1);
  }

  public decreaseValue(): void {
    this.count.update((actualValue) => actualValue - 1);
  }

  public resetValue(): void {
    this.count.set(0);
  }
}
