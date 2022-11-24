var handler = ePayco.checkout.configure({
  key: "c33e2f91a21e66b91e993640062c8200",
  test: true,
});
var data = {
  //Parametros compra (obligatorio)
  name: "Pijamas",
  description: "Pijamas",
  invoice: "",
  currency: "cop",
  amount: "",
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
  confirmation: "http://isaela.shop/response",
  response: "http://isaela.shop/response",
  // confirmation: "http://localhost:4200/response",
  // response: "http://localhost:4200/response",

  //Atributos cliente
  name_billing: "",
  address_billing: "",
  type_doc_billing: "CC",
  mobilephone_billing: "",
  number_doc_billing: "",

  //atributo deshabilitación metodo de pago
  methodsDisable: [],
};

function execute(total, invoiceN, form) {
  data.name_billing = form.nombre + ' ' + form.apellido;
  data.address_billing = form.direccion;
  data.mobilephone_billing = form.celular;
  // data.amount = total;
  data.amount = 5000;
  data.invoice = invoiceN;
  handler.open(data);
}
