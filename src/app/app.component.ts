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
      link: 'https://agro.example.com',
      text: 'Перейти на сайт Agro',
    },
    {
      src: '/assets/spark_logo.svg',
      alt: 'Spark Logo',
      link: 'https://spark.example.com',
      text: 'Перейти на сайт Spark',
    },
    {
      src: '/assets/sun_logo.svg',
      alt: 'Sun Logo',
      link: 'https://sun.example.com',
      text: 'Перейти на сайт Sun',
    },
  ];
}
