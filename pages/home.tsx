import HeaderAuth from "@/src/components/common/headerAuth";
import Head from "next/head";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>SkillUp - Home</title>
        <link rel="shortcut icon" href="/logoCurso.png" type="image/x-icon-" />
      </Head>
      <main>
        <HeaderAuth />
      </main>
    </>
  );
};

export default HomeAuth;
