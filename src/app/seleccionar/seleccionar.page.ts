// import { Component, OnInit } from '@angular/core';
// import { CategoriaService } from '../services/api.service';


// @Component({
//   selector: 'app-seleccionar',
//   templateUrl: './seleccionar.page.html',
//   styleUrls: ['./seleccionar.page.scss'],
// })
// export class SeleccionarPage implements OnInit {
//   categories: any;

//   constructor(private categoriaService: CategoriaService) {}

//   ngOnInit() {
//     this.categoriaService.getCategorias().subscribe((data: any) => {
//       this.categories = data.categories;
//     });
//   }
// }

import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CategoriaService } from '../services/api.service';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private categoriaService: CategoriaService) {}

  scrollToTop() {
    this.content.scrollToTop(400); // 400ms de duración de la animación
  }
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }
}


