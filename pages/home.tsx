import FeaturedSection from "@/src/components/homeAuth/featuredSection";
import Head from "next/head";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>SkillUp - Home</title>
        <link rel="shortcut icon" href="/logoCurso.png" type="image/x-icon-" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  );
};

export default HomeAuth;
