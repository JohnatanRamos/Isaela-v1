import { Component } from '@angular/core';

declare var execute: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isaela-angular';

  ePayco: any;

  data = {
    //Parametros compra (obligatorio)
    name: "Vestido Mujer Primavera",
    description: "Vestido Mujer Primavera",
    invoice: "12734",
    currency: "cop",
    amount: "12000",
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",

    //Onpage="false" - Standard="true"
    external: "false",

    //Atributos opcionales
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    confirmation: "file:///C:/Users/Administrador/Documents/personal/proyectos/isaela/index.html",
    response: "file:///C:/Users/Administrador/Documents/personal/proyectos/isaela/index.html",


    //Atributos cliente
    name_billing: "Andres Perez",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",

    //atributo deshabilitación metodo de pago
    methodsDisable: [],
  };

  execute() {
    execute('890022');
  }
}
