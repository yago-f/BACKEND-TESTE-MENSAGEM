const { default: axios } = require('axios');
const FormData = require('form-data');
const { Integrador, IntegradorInpera } = require('../config/database');

const postMessage = async (req, res, next) => {
  try {
    const { key } = req.body;
    const integracaoAdmin = await IntegradorInpera.findOne({
      where: { I_NOMEINTEGRACAO: 'WhatsApp ChatIA' },
    });

    if (!integracaoAdmin) {
      res.status(404).json({ message: 'Integração não encontrada' });
      return;
    }

    const admIntegracao = await Integrador.findOne({
      where: { idDatabase: key, integracaoID: integracaoAdmin.ID_INTEGRADORES },
    });

    console.log(key, 'key')

    if (!admIntegracao) {
      res.status(404).json({ message: 'Administração de integração não encontrada' });
      return;
    }

    const { url, token } = admIntegracao.dadosIntegracao;
    const midia = req.file;
    const { numeroCelular, mensagem } = req.body;

    console.log(admIntegracao.dadosIntegracao, 'admIntegracao.dadosIntegracao')

    if (midia) {
      const form = new FormData();
      form.append('number', numeroCelular);
      form.append('openTicket', '1');
      form.append('queueId', '0');
      form.append('body', mensagem);
      form.append('medias', midia.buffer, {
        filename: midia.originalname,
        contentType: midia.mimetype,
      });

      const response = await axios.post(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          ...form.getHeaders(),
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
      const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
      const regex = new RegExp(expression);

      if (!url.match(regex)) {
        throw new Error('URL inválida');
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

      console.log('Response:', response);

      if (response.status === 200) {
        res.status(201).json({
          success: true,
          message: 'Mensagem enviada com sucesso',
        });
      }
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  postMessage,
};
