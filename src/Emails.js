var Mailgen = require("mailgen");
var SibApiV3Sdk = require("sib-api-v3-sdk");

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
  theme: "default",
  product: {
    // Appears in header & footer of e-mails
    name: "B2B Leads",
    link: "https://b2bleads.com.br/",
    // Optional product logo
    logo: "https://b2bleads.com.br/images/logotipo.png",
  },
});

module.exports = {
  EmailBasico: (nome, texto, subTexto = []) => {
    var emailContent = {
      body: {
        name: nome,
        intro: texto,
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };

    if (subTexto.length > 0) {
      emailContent["body"]["outro"] = [];
      subTexto.map((val) => {
        emailContent["body"]["outro"].push(val);
      });
    }

    return mailGenerator.generate(emailContent);
  },
  Cadastro: (nome, _id) => {
    var emailContent = {
      body: {
        name: nome,
        intro: "Bem vindo ao B2B Leads!",
        outro: [
          "Acabamos de receber seu cadastro, para confirmar o endereço do seu email, clique no link abaixo ou cole no seu navegador.",
          '<a href="https://b2bleads.com.br/confirmarCadastro?hash=' +
            String(_id) +
            '">https://b2bleads.com.br/confirmarCadastro?hash=' +
            String(_id) +
            "</a>",
        ],
        // action: {
        //     instructions: 'Acabamos de receber seu cadastro, para confirmar o endereço do seu email, clique no link abaixo ou cole no seu navegador. ',
        //     button: {
        //         color: '#22BC66', // Optional action button color
        //         text: 'Confirme seu cadastro',
        //         link: 'https://b2bleads.com.br/confirmarCadastro/'+String(_id)
        //     }
        // },
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };
    return mailGenerator.generate(emailContent);
  },

  CodigoRedefinirSenha: (nome, codigo) => {
    var emailContent = {
      body: {
        name: nome,
        intro:
          "Você solicitou a recuperação de sua senha da B2B Leads recentemente.<br>Abaixo segue o código para redefinição da sua senha.",
        outro: [
          "<h1 style='font-size:30pxtext-align:initial;margin-bottom:0px;font-weight:700;color:#002f66 !important'>" +
            codigo +
            "</h1>",
          "Se você não solicitou a recuperação de sua senha avise-nos imediatamente.",
          "Em caso de dúvidas entre em contato conosco pelo nosso contato de suporte.",
        ],
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };
    return mailGenerator.generate(emailContent);
  },

  CompraCreditoAprovada: (nome) => {
    var emailContent = {
      body: {
        name: nome,
        intro:
          "Sua compra de crédito foi aprovada e está disponível em sua conta.",
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };
    return mailGenerator.generate(emailContent);
  },

  ListaExportada: (nome, link, dadosLista) => {
    var emailContent = {
      body: {
        name: nome,
        intro: "Sua solicitação de lista foi processada com sucesso!",

        table: {
          data: [
            {
              Descrição: "Quantidade de empresas",
              "": dadosLista.quantidadeProcessado,
            },
            {
              Descrição: "Data de processamento",
              "": new Date(dadosLista.dataCriacao).toLocaleString(),
            },
            {
              Descrição: "Nome do arquivo",
              "": dadosLista.nomeArquivo,
            },
          ],
          columns: {
            // Optionally, customize the column widths
            customWidth: {
              item: "20%",
              price: "15%",
            },
            // Optionally, change column text alignment
            customAlignment: {
              price: "right",
            },
          },
        },
        outro: [
          '<a href="https://b2bleads.com.br/minha-conta/listas/' +
            dadosLista.nomeArquivo +
            '">Clique aqui para baixar a lista</a>',
          "Sua lista ficará disponível para download por 30 dias. Após isso sua lista será excluída do sistema.",
        ],
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };
    return mailGenerator.generate(emailContent);
  },

  EmailConvite: (nome, cliente, membro, subTexto = []) => {
    var emailContent = {
      body: {
        name: nome,
        intro: "Bem vindo ao B2 CRM!",
        outro: [
          "Você convidado para se tornar membro. Para aceitar, clique no link abaixo.",
          `<a href=${process.env.URL_BACKEND}/member/acceptInvite/${cliente}/${membro}>Aceitar convite</a>`,
        ],
        greeting: "Olá",
        signature: "Atenciosamente",
      },
    };

    if (subTexto.length > 0) {
      emailContent["body"]["outro"] = [];
      subTexto.map((val) => {
        emailContent["body"]["outro"].push(val);
      });
    }

    return mailGenerator.generate(emailContent);
  },
};
