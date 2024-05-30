import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory";
import FeaturedSection from "@/src/components/homeAuth/featuredSection";
import NewestCategory from "@/src/components/homeAuth/newestCategory";
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
        <NewestCategory />
        <FavoriteCategory />
      </main>
    </>
  );
};

export default HomeAuth;
