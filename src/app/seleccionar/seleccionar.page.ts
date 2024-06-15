import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/api.service';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage implements OnInit {
  categories: any;

  constructor(private categoriaService: CategoriaService) {}

  subir() {
    console.log('Subiendooo :D');
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(500); // Desplaza hacia arriba en 500ms
    }
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }
}
