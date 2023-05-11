import WelcomeEmail from "@/emails/WelcomeTemplate";
import { ValidLocale, getTranslator } from "@/i18n";
import { sendEmail } from "@/lib/email";
import { render } from "@react-email/render";

export default async function Home({
  params,
}: {
  params: { language: string };
}) {
  const translate = await getTranslator(
    `${params.language}` as ValidLocale // our middleware ensures this is valid
  );

  await sendEmail({
    to: "oztepeali@gmail.com",
    subject: "test",
    html: render(WelcomeEmail())
  })
  return <h1>{translate("welcome.helloWorld")}</h1>;
}