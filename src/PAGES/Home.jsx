import Banner from "../COMPONENTS/Banner";
import MovieCategories from "../COMPONENTS/MovieCategories";
import Movies from "../COMPONENTS/Movies";
import Reviews from "../COMPONENTS/Reviews";

const Home = () => {
  return (
    <div className="space-y-6 md:space-y-16">
      <Banner></Banner>
      <main className="md:w-9/12 mx-auto p-4 md:p-0 space-y-6 md:space-y-16">
        <section>
          <Movies></Movies>
        </section>
        <section>
          <MovieCategories></MovieCategories>
        </section>
        <section>
          <Reviews></Reviews>
        </section>
      </main>
    </div>
  );
};

export default Home;
