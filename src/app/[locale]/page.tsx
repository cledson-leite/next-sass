import { TitleScss } from "@/components/sintax-scss";
import { TitleSass } from "@/components/sintax-sass";
import { RegraEstilo } from "@/components/regras-estilos";
import { Variaveis } from "@/components/variaveis";
import { ToggleMode } from "@/components/toggle-mode";
import { ToggleLang } from "@/components/toggle-lang";

export default function Home() {
  return (
    <>
      {/* <TitleScss />
      <TitleSass /> */}
      {/* <RegraEstilo /> */}
      <Variaveis />
      {/* <ToggleMode /> */}
      <ToggleLang/>
    </>
  );
}
