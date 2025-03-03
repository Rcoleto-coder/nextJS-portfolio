// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY_DEV);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {body} = req;
  const {email, subject, message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [""],
      subject: 'Testing Resend API ',
      react: (
      <>
      <p>Testing Email Resend</p>
      </>
      )
    });

    

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
{/* <EmailTemplate firstName='Rcoleto' />, */}