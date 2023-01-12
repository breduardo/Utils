module.exports = {
  OnlyNumbers: (valor) => {
    return valor.replace(/\D/g, "");
  },
};
