import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/api.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    activo: null,
  };

  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.userId = sessionStorage.getItem('userId');
  }

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const idUsuario = this.route.snapshot.paramMap.get('id');
    if (idUsuario) {
      if (idUsuario === this.userId || this.userId === '2') {
        this.usuarioService.getUsuarioId(+idUsuario).subscribe(
          (response: any) => {
            if (response.ok && response.data && Array.isArray(response.data)) {
              const usuarioData = response.data[0];
              this.usuario = {
                nombre: usuarioData.nombre,
                apellido: usuarioData.apellido,
                correo: usuarioData.correo,
                activo: usuarioData.activo,
              };
            } else {
              console.error('Error en la respuesta del servicio:', response);
            }
          },
          (error) => {
            console.error('Error al obtener el usuario:', error);
          }
        );
      } else {
        // Redirigir al usuario a la página de selección si no está autorizado
        this.router.navigate(['/seleccionar']);
      }
    }
  }
}