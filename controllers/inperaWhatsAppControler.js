const { default: axios } = require("axios");
const FormData = require('form-data');

  const postMessage = async (req, res, next) => {
    try {
      const url = `https://tdpapi.whatschatia.com.br/api/messages/send`;
      const token = `2C5F5DE5-D1E2-4755-98A7-F8B442E221HFFS`;

      const midia = req.file;
      const { numeroCelular, mensagem } = req.body;

      if (req.file) {
        const form = new FormData();
        form.append('number', numeroCelular);
        form.append('openTicket', '1');
        form.append('queueId', '0');
        form.append('body', mensagem);
        form.append('medias', midia.buffer, { filename: midia.originalname });

        const response = await axios.post(url, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          res.status(201).json({
            success: true,
            message: 'Mensagem e Arquivo enviados com sucesso!',
          });
        } else {
          throw new Error('Falha no envio dos dados');
        }
      } else {
        const expression =
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
        const regex = new RegExp(expression);
        const t = url;

        if (!t.match(regex)) {
          throw new Error('URL invalida');
        }

        const response = await axios.post(
          url,
          {
            number: numeroCelular,
            openTicket: 1,
            queueId: 0,
            body: mensagem,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200) {
          res.status(201).json({
            success: true,
            message: 'Mensagem enviada com sucesso',
          });
        }
      }
    } catch (e) {
      next(e);
    }
  };

module.exports = {
  postMessage
}
