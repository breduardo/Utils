export const ISODateToBrazilString = (date) => {
  var dateArray = date.split("-");
  return dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
};

export const DateBrazilToISODate = (date) => {
  var dateArray = date.split("/");
  return dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];
};

export const ListaUltimosSeisMeses = () => {
  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var data = new Date();
  var mes = meses[data.getMonth()];
  var ano = data.getFullYear();
  var listaMeses = [];
  for (let i = 0; i < 6; i++) {
    // listaMeses.push(mes + " de " + ano)
    listaMeses.push({
      label: mes + "/" + ano,
      data: data.getMonth() + 1 + "/" + data.getFullYear(),
    });

    data.setMonth(data.getMonth() - 1);
    mes = meses[data.getMonth()];
    ano = data.getFullYear();
  }
  return listaMeses;
};

export const DateTimeBrazilToISODateTime = (date) => {
  var dateArray = date.split(" ");
  var dateArray2 = dateArray[0].split("/");
  var timeArray = dateArray[1].split(":");
  return (
    dateArray2[2] +
    "-" +
    dateArray2[1] +
    "-" +
    dateArray2[0] +
    " " +
    timeArray[0] +
    ":" +
    timeArray[1] +
    ":" +
    timeArray[2]
  );
};

export const IsoDateTimeToBrazilString = (date) => {
  var dateArray = date.split(" ");
  var dateArray2 = dateArray[0].split("-");
  var timeArray = dateArray[1].split(":");
  return (
    dateArray2[2] +
    "/" +
    dateArray2[1] +
    "/" +
    dateArray2[0] +
    " " +
    timeArray[0] +
    ":" +
    timeArray[1] +
    ":" +
    timeArray[2]
  );
};

const ListaUltimosSeisMesesPorExtenso = () => {
  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var data = new Date();
  var mes = meses[data.getMonth()];
  var ano = data.getFullYear();
  var lista = [];
  for (var i = 0; i < 6; i++) {
    var data = new Date(ano, data.getMonth() - i, 1);
    lista.push(meses[data.getMonth()] + " de " + ano);
  }
  return lista;
};

const QuantidadedeDiasEntreDuasDatas = (dataInicial, dataFinal) => {
  var dataInicial = new Date(dataInicial);
  var dataFinal = new Date(dataFinal);
  var diferenca = dataFinal.getTime() - dataInicial.getTime();
  var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  return dias;
};

module.exports = {
  QuantidadedeDiasEntreDuasDatas,
  ListaUltimosSeisMesesPorExtenso,
  IsoDateTimeToBrazilString,
  DateTimeBrazilToISODateTime,
  ListaUltimosSeisMeses,
  DateBrazilToISODate,
  ISODateToBrazilString,
};
