import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Contact = () => {
    
    return (
        <div>
            <Helmet>
                <title>Contact info</title>
            </Helmet>
            <div className="flex justify-center items-center flex-col md:flex-row my-20">
                <div data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000" className="relative max-w-[350px] group">
                    <img className="rounded-lg transform scale-105" src="https://source.unsplash.com/350x350/?men" alt="card navigate ui" />
                    <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                        <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path> </g> </g> </g> </svg>
                    </span>
                    <span className="bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
                    <span className="bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
                </div>
                <div data-aos="fade-up-left" data-aos-delay="1000" data-aos-duration="1000" className="bg-white space-y-12  max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                    <div className="space-y-1">
                        <h2 data-aos="fade-up-left" data-aos-delay="1100" data-aos-duration="1100" className="text-3xl font-medium text-gray-700 text-center font-sans">
                            Mohammad Arif
                        </h2>
                        <p className="font-sans  text-gray-500">@_arif</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div data-aos="fade-up-left" data-aos-delay="1200" data-aos-duration="1200" className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Shots</p>
                            <p className="text-3xl tracking-wider text-gray-700">23</p>
                        </div>
                        <div data-aos="fade-up-left" data-aos-delay="1300" data-aos-duration="1300" className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Following</p>
                            <p className="text-3xl tracking-wider text-gray-700">314</p>
                        </div>
                        <div data-aos="fade-up-left" data-aos-delay="1400" data-aos-duration="1400" className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Followers</p>
                            <p className="text-3xl tracking-wider text-gray-700">487</p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-delay="1500" data-aos-duration="1500">
                        <Link to={"/massage"} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                            contact us
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-[450px] mb-5">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1852586.262385163!2d88.12156477500001!3d24.920738915958676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1712605663504!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
