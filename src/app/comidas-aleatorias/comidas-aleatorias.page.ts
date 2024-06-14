import { Component, OnInit } from '@angular/core';
import { AleatoriaMeal } from '../services/api.service';

interface RandomRecipe {
  id_receta: number;
  url_imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-comidas-aleatorias',
  templateUrl: './comidas-aleatorias.page.html',
  styleUrls: ['./comidas-aleatorias.page.scss'],
})
export class ComidasAleatoriasPage implements OnInit {
  recetasRandom: RandomRecipe[] = [];

  constructor(private mealService: AleatoriaMeal) { }

  ngOnInit() {
    this.obtenerRecetasAleatorias();
  }

  obtenerRecetasAleatorias() {
    this.mealService.getrandomMeal().subscribe(
      (response) => {
        if (response.ok && response.data) {
          this.recetasRandom = response.data;
        } else {
          console.error('Error en la respuesta del servicio:', response);
        }
      },
      (error) => {
        console.error('Error al obtener las recetas aleatorias:', error);
      }
    );
  }
}
