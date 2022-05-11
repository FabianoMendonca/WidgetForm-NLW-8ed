import { MailAdapter, MailAdapterData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9ac67998459ef7",
    pass: "16faefa68b7107",
  },
});

export class nodeMailerAdapter implements MailAdapter {
  async sendMail(data: MailAdapterData) {
    await transport.sendMail({
      from: "",
      to: "Fabiano <mendonca.biano@gmail.com>",
      subject: data.subject,
      html: data.body,
    });
  }
}
