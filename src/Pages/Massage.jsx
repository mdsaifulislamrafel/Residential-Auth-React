import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Massage = () => {
    return (
        <div>
            <Helmet>
                <title>Massage</title>
            </Helmet>
            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mt-5 dark:bg-gray-100 dark:text-gray-800">
                <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="1100" className="flex flex-col items-center justify-between">
                    <div className="space-y-2">
                        <h2 data-aos-duration="1300" data-aos="fade-right" data-aos-delay="800" className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div data-aos-duration="1400" data-aos="fade-right" data-aos-delay="900" className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img data-aos-duration="1500" data-aos="fade-right" data-aos-delay="1000" src="https://mambaui.com/assets/svg/doodle.svg" alt="" className=" h-52 md:h-64" />
                </div>
                <form data-aos="fade-left" data-aos-delay="700" data-aos-duration="1200" noValidate="" className="space-y-6">
                    <div data-aos="fade-left" data-aos-delay="800" data-aos-duration="1600">
                        <label htmlFor="name" className="text-sm font-bold">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 border-2 border-black rounded dark:bg-gray-100" />
                    </div>
                    <div data-aos-duration="1700" data-aos="fade-left" data-aos-delay="900">
                        <label htmlFor="email" className="text-sm font-bold">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100 border-2 border-black" />
                    </div>
                    <div data-aos-duration="1800" data-aos="fade-left" data-aos-delay="1000">
                        <label htmlFor="message" className="text-sm font-bold">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border-2 border-black dark:bg-gray-100 mb-5"></textarea>
                    </div>
                    <Link to={"/"} data-aos-duration="1900" data-aos="fade-left" data-aos-delay="1100" type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</Link>
                </form>
            </div>
        </div>

    );
};

export default Massage;