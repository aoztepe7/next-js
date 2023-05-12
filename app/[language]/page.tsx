import { ValidLocale, getTranslator } from "@/i18n";

export default async function Home({
  params,
}: {
  params: { language: string };
}) {
  const translate = await getTranslator(
    `${params.language}` as ValidLocale // our middleware ensures this is valid
  );

  return <h1>{translate("welcome.helloWorld")}</h1>;
}