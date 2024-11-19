import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  logos = [
    {
      src: '/assets/agro_logo.svg',
      alt: 'Agro Logo',
      link: 'https://agropv.kz',
      text: 'Перейти на сайт Agro',
      description:
        '«AGRO PARTNERS PV» – группа специалистов, готовая помочь в поиске решений по вопросам экспорта зерновых и масличных культур.',
    },
    {
      src: '/assets/spark_logo.svg',
      alt: 'Spark Logo',
      link: 'https://sparkstudio.kz',
      text: 'Перейти на сайт Spark',
      description:
        'Мы являемся командой профессионалов, специализирующихся на создании привлекательных и эффективных веб-сайтов.',
    },
    {
      src: '/assets/sun_logo.svg',
      alt: 'Sun Logo',
      link: 'https://sungrain.kz',
      text: 'Перейти на сайт Sun',
      description:
        'Мы являемся поставщиками высококачественной муки и гречневой крупы ядрицы, предоставляя нашим клиентам непревзойденное качество и натуральность в каждом продукте.',
    },
  ];
  flippedIndex: number | null = null; // Track the flipped card index

  toggleFlip(index: number): void {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}
