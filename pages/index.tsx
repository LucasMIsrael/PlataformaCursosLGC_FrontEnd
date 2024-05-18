import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss"
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";

const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>SkillUp – Plataforma de Cursos</title>
        <link rel="shortcut icon" href="/logoCurso.png" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
      </Head>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  );
};

export default HomeNotAuth;