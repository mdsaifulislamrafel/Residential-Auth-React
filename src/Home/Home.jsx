import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner";
import Houses from "../Pages/Houses";
import Pricing from "../Pages/Pricing";
import Teams from "../Pages/Teams";


const Home = () => {

    return (
        <div className=" my-5">
            <Helmet>
                <title>House</title>
            </Helmet>
            <Banner />
            <Houses />
            <Pricing />
            <Teams />
        </div>
    );
};

export default Home;