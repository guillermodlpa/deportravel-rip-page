import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "../components/sections/Hero";
import Quotes from "../components/sections/Quotes";
import Subscribe from "../components/sections/Subscribe";
import AppFooter from "../components/sections/AppFooter";
import AppThemeProvider from "../components/theme/AppThemeProvider";
import FixedBackgroundImage from "../components/shared/FixedBackgroundImage";
import Team from "../components/sections/Team";

const TITLE = "depor.travel - Viajar y hacer deporte";
const DESCRIPTION =
  "Multitud de viajes deportivos por todo el mundo. Si buscas practicar tus deportes favoritos en lugares nuevos, estás de enhorabuena.";

function SqueezePage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://depor.travel" />
      </Head>
      <CssBaseline />
      <AppThemeProvider>
        <Hero />
        <Quotes />
        <Team />
        <Subscribe />
        <AppFooter />

        <FixedBackgroundImage />
      </AppThemeProvider>
    </>
  );
}

export default SqueezePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
