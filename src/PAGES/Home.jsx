import Banner from "../COMPONENTS/Banner";
import Movies from "../COMPONENTS/Movies";


const Home = () => {
    return (
        <div className="space-y-6 md:space-y-16">
            <Banner></Banner>
            <main className="w-11/12 mx-auto">
            <Movies></Movies>
            </main>
        </div>
    );
};

export default Home;