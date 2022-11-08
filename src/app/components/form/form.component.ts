import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/shared/interface/IProduct.interface';

declare var execute: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: string, totalValue: number, products: IProduct[] },
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.min(999999999), Validators.max(9999999990)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  buy() {
    if (this.data.totalValue && this.data.invoice) {
      this.localStorageService();
      execute(this.data.totalValue, this.data.invoice);
    }
  }

  localStorageService() {
    localStorage.removeItem('form');
    localStorage.setItem('form', JSON.stringify(this.form.value));
    localStorage.removeItem('sendEmail');
    localStorage.setItem('sendEmail', 'yes');
    localStorage.removeItem('products');
    localStorage.setItem('products', JSON.stringify(this.data.products));
  }
}
