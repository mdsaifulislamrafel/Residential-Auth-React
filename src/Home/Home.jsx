import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner";
import Houses from "../Pages/Houses";

const Home = () => {

    return (
        <div className=" my-5">
            <Helmet>
                <title>House</title>
            </Helmet>
            <Banner />
            <Houses />
        </div>
    );
};

export default Home;