import { Resend } from "resend";
const resend = new Resend("re_123456789");

export const sendEmail = async (event:any) => {
    event.preventDefault()
  await resend.emails.send({
    from: "Facudev",
    to: ["facundoramirez089@gmail.com"],
    subject: "hello world",
    html: "<p>it works!</p>",
  });
};
