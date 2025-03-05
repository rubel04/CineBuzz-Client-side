import Banner from "../COMPONENTS/Banner";
import Movies from "../COMPONENTS/Movies";


const Home = () => {
    return (
        <div className="space-y-6 md:space-y-16">
            <Banner></Banner>
            <main className="md:w-9/12 mx-auto p-4 md:p-0">
            <Movies></Movies>
            </main>
        </div>
    );
};

export default Home;