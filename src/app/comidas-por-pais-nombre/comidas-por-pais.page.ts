import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/api.service';

@Component({
  selector: 'app-comidas-por-pais',
  templateUrl: './comidas-por-pais.page.html',
  styleUrls: ['./comidas-por-pais.page.scss'],
})
export class ComidasPorPaisPage implements OnInit {

  pais: any[0];

  constructor(private categoriaService: PaisService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(data)
      this.pais = data;
    });
  }

}