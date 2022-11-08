var handler = ePayco.checkout.configure({
  key: "36b68cfec3da6f59f9faf598e993973b",
  test: true,
});
var data = {
  //Parametros compra (obligatorio)
  name: "Pijamas",
  description: "Pijamas",
  invoice: "127332224",
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
  confirmation: "http://localhost:4200/response",
  response: "http://localhost:4200/response",

  //Atributos cliente
  name_billing: "Andres Perez",
  address_billing: "Carrera 19 numero 14 91",
  type_doc_billing: "cc",
  mobilephone_billing: "3050000000",
  number_doc_billing: "0000000",

  //atributo deshabilitación metodo de pago
  methodsDisable: [],
};

function execute(total, invoiceN) {
  data.amount = total;
  data.invoice = invoiceN;
  handler.open(data);
}
