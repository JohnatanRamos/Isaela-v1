var handler = ePayco.checkout.configure({
  key: "36b68cfec3da6f59f9faf598e993973b",
  test: true,
});
var data = {
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

function execute(invoice) {
  data.amount = "20000";
  data.invoice = invoice;
  handler.open(data);
}

var total = 0;

function test () {
  console.log('hi')
    // total = total + 1;
    // console.log(total);
}
