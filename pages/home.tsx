import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/src/components/homeAuth/featuredCategoty";
import FeaturedSection from "@/src/components/homeAuth/featuredSection";
import ListCategories from "@/src/components/homeAuth/listCategories";
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
        <FeaturedCategory/>
        <ListCategories />
      </main>
    </>
  );
};

export default HomeAuth;
