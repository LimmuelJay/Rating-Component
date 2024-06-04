import Head from "next/head";
import GlobalStyle from "@/styles/global";
import Main from "@/pages/component/main/main";
import IndexStyled from "@/pages/index.styled"

export default function Home() {
  return (
    <IndexStyled>
      <GlobalStyle />
      <Head>
        <title>Rating Component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
        <Main />
    </IndexStyled>
  );
}
