module.exports = {
  OnlyNumbers: (valor) => {
    return valor.replace(/\D/g, "");
  },
  // Float To Real
  MoneyToReal: (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },
  RemoverSpecialChars: (valor) => {
    return valor
      .normalize("NFD")
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
  },
  RemoveNumbers: (valor) => {
    return valor.replace(/[0-9]/g, "");
  },
  MoneyRealToFloat: (valor) => {
    return parseFloat(valor.replace("R$", "").replace(",", "."));
  },
};
