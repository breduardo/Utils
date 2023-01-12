const { default: axios } = require("axios");

module.exports = {
  EmailValido: (email) => {
    const emailToValidate = "a@a.com";
    const emailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailRegexp.test(email);
  },
  ValidarCaptcha: async (captcha, ip) => {
    if (!captcha) return false;

    const { RECAPTCHA_SECRET } = process.env;
    var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${captcha}&remoteip=${ip}`;
    return await axios
      .post(verificationUrl, null, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        if (response.data.success !== undefined && !response.data.success) {
          return false;
        }
        return true;
      });
  },
};
