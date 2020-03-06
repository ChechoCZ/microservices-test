const Mail = require('../../lib/Mail');

class SendMailController {
  async sendMail(req, res) {
    const { description, total } = req.body;

    await Mail.sendMail({
      to: 'Usuário <usuario@mail.com>',
      subject: 'Pagamento Aprovado!',
      text: `Pagamento da compra ${description} pelo valor de R$${total} recebido!`
    });

    return res.json({ msg: 'Email de aviso enviado' });
  }
}

module.exports = new SendMailController();