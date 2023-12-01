import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './menu.component.html',
})
export class TuComponenteComponent {
  ventaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ventaForm = this.fb.group({
      modelo: ['', Validators.required],
      numeroZapatos: ['', [Validators.required, Validators.min(1)]],
    });
  }

  registrarVenta() {
    if (this.ventaForm.valid) {
      // Puedes agregar la lógica para manejar la venta aquí
      const formData = this.ventaForm.value;
      console.log('Datos de venta:', formData);
    } else {
      // Puedes agregar lógica para manejar formularios inválidos si es necesario
    }
  }
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class AppMenuComponent {
  ventaForm: FormGroup; // Declara la variable del formulario

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario en el constructor
    this.ventaForm = this.fb.group({
      modelo: ['', Validators.required],
      numeroZapatos: ['', [Validators.required, Validators.min(1)]],
    });
  }

  registrarVenta() {
    // Agrega la lógica que necesites al registrar la venta
    const formData = this.ventaForm.value;
    console.log('Datos de venta:', formData);
  }
}
