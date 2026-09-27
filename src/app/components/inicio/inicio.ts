import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  especialidades,
  medicos,
  type Medico,
  type Especialidad,
} from './datos';

// Declaración para Toastify (se carga por CDN en index.html)
declare var Toastify: any;

@Component({
  imports: [FormsModule],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit {
  // ================= DATOS =================
  especialidades: Especialidad[] = especialidades;
  medicos: Medico[] = medicos;
  medicosFiltrados: Medico[] = [];
  especialidadActivaId = 'todas';
  especialidadSeleccionada: Especialidad | undefined;

  // ================= FORMULARIO =================
  nombres = '';
  apellidos = '';
  identificacion = '';
  correo = '';
  contrasenia = '';
  confirmarContrasenia = '';
  genero = '';
  aceptaTerminos = false;

  // ================= MENSAJES DE ERROR =================
  errorNombres = '';
  errorApellidos = '';
  errorIdentificacion = '';
  errorCorreo = '';
  errorContrasenia = '';
  errorConfirmarContrasenia = '';
  errorGenero = '';
  errorTerminos = '';

  // ================= ESTADOS DE VALIDACIÓN =================
  nombresValido: boolean | null = null;
  apellidosValido: boolean | null = null;
  identificacionValido: boolean | null = null;
  correoValido: boolean | null = null;
  contraseniaValido: boolean | null = null;
  confirmarValido: boolean | null = null;

  ngOnInit(): void {
    this.especialidadSeleccionada = this.especialidades[0];
    this.medicosFiltrados = [...this.medicos];
  }

  // ================= MÉDICOS =================

  seleccionarEspecialidad(id: string): void {
    this.especialidadActivaId = id;
    this.especialidadSeleccionada = this.especialidades.find((e) => e.id === id);

    if (id === 'todas') {
      this.medicosFiltrados = [...this.medicos];
    } else {
      this.medicosFiltrados = this.medicos.filter((m) => m.especialidad === id);
    }
  }

  obtenerNombreEspecialidad(idEspecialidad: string): string {
    const esp = this.especialidades.find((e) => e.id === idEspecialidad);
    return esp ? esp.nombre : 'Sin especialidad';
  }

  // ================= UTILIDADES DE VALIDACIÓN =================

  private soloLetras(valor: string): boolean {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor.trim());
  }

  private soloNumeros(valor: string): boolean {
    return /^\d+$/.test(valor.trim());
  }

  private formatoCorreo(valor: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
  }
// ================= VALIDACIÓN DE CAMPOS =================

  onNombresChange(): void {
    const v = this.nombres.trim();
    if (v === '') {
      this.errorNombres = 'Este campo es obligatorio.';
      this.nombresValido = false;
    } else if (!this.soloLetras(v)) {
      this.errorNombres = 'El nombre solo puede contener letras.';
      this.nombresValido = false;
    } else {
      this.errorNombres = '';
      this.nombresValido = true;
    }
  }

  onApellidosChange(): void {
    const v = this.apellidos.trim();
    if (v === '') {
      this.errorApellidos = 'Este campo es obligatorio.';
      this.apellidosValido = false;
    } else if (!this.soloLetras(v)) {
      this.errorApellidos = 'Los apellidos solo pueden contener letras.';
      this.apellidosValido = false;
    } else {
      this.errorApellidos = '';
      this.apellidosValido = true;
    }
  }

  onIdentificacionChange(): void {
    const v = this.identificacion.trim();
    if (v === '') {
      this.errorIdentificacion = 'Este campo es obligatorio.';
      this.identificacionValido = false;
    } else if (!this.soloNumeros(v)) {
      this.errorIdentificacion = 'La identificación solo debe contener números.';
      this.identificacionValido = false;
    } else {
      this.errorIdentificacion = '';
      this.identificacionValido = true;
    }
  }

  onCorreoChange(): void {
    const v = this.correo.trim();
    if (v === '') {
      this.errorCorreo = 'Este campo es obligatorio.';
      this.correoValido = false;
    } else if (!this.formatoCorreo(v)) {
      this.errorCorreo = 'Ingresa un formato de correo válido.';
      this.correoValido = false;
    } else {
      this.errorCorreo = '';
      this.correoValido = true;
    }
  }

  onContraseniaChange(): void {
    if (this.contrasenia.length === 0) {
      this.errorContrasenia = 'Este campo es obligatorio.';
      this.contraseniaValido = false;
    } else if (this.contrasenia.length < 8) {
      this.errorContrasenia = 'La contraseña debe tener al menos 8 caracteres.';
      this.contraseniaValido = false;
    } else {
      this.errorContrasenia = '';
      this.contraseniaValido = true;
    }
    // Revalidar confirmación si ya se escribió algo
    if (this.confirmarContrasenia.length > 0) {
      this.onConfirmarChange();
    }
  }

  onConfirmarChange(): void {
    if (this.confirmarContrasenia.length === 0) {
      this.errorConfirmarContrasenia = 'Debes confirmar tu contraseña.';
      this.confirmarValido = false;
    } else if (this.contrasenia !== this.confirmarContrasenia) {
      this.errorConfirmarContrasenia = 'Las contraseñas no coinciden.';
      this.confirmarValido = false;
    } else {
      this.errorConfirmarContrasenia = '';
      this.confirmarValido = true;
    }
  }

  onGeneroChange(): void {
    this.errorGenero = '';
  }

  onTerminosChange(): void {
    this.errorTerminos = '';
  }

  // ================= SUBMIT =================

  onSubmit(): void {
    this.onNombresChange();
    this.onApellidosChange();
    this.onIdentificacionChange();
    this.onCorreoChange();
    this.onContraseniaChange();
    this.onConfirmarChange();

    if (!this.genero) {
      this.errorGenero = 'Debes seleccionar un género.';
   }

    if (!this.aceptaTerminos) {
      this.errorTerminos = 'Debes aceptar los términos y condiciones.';
    }

    const esValido =
      this.nombresValido === true &&
      this.apellidosValido === true &&
      this.identificacionValido === true &&
      this.correoValido === true &&
      this.contraseniaValido === true &&
      this.confirmarValido === true &&
      this.genero !== '' &&
      this.aceptaTerminos;

    if (esValido) {
      this.mostrarMensajeExito();
    }
  }

  // ================= TOAST =================

  private mostrarMensajeExito(): void {
    if (typeof Toastify !== 'undefined') {
      Toastify({
        text: '✅ ¡Registro exitoso!',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: 'rgba(0, 128, 0, 0.8)',
          color: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          padding: '12px 20px',
        },
        stopOnFocus: true,
      }).showToast();
    }
  }
}
