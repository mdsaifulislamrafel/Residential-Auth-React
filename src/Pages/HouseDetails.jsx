import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DataHook from '../DataHook/DaraHook';
import { Helmet } from 'react-helmet-async';
const HouseDetails = () => {
    const { id } = useParams();
    const { data } = DataHook();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        if (data) {
            const singleData = data.find((house) => house.id === id);
            setSingleData(singleData);
        }
    }, [data, id]);
    return (
        <div>
            <Helmet>
                <title>House Details</title>
            </Helmet>
            <section className="dark:bg-gray-100 mt-10 dark:text-gray-800">
                <div className="container max-w-6xl p-10 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img data-aos="zoom-in" data-aos-delay="100" src={singleData?.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 flex flex-col justify-center space-y-2 lg:col-span-5">
                            <h3 data-aos="fade-left" data-aos-delay="500" className="text-2xl font-semibold sm:text-4xl">{singleData?.estate_title}</h3>
                            <p data-aos="fade-left" data-aos-delay="600"><span className='font-bold'>Location : </span> {singleData?.location}</p>
                            <p data-aos="fade-left" data-aos-delay="700"><span className='font-bold'>Area : </span>{singleData?.area}</p>
                            <p data-aos="fade-left" data-aos-delay="800"><span className='font-bold'>Price : </span> {singleData?.price}</p>
                            <h2 data-aos="fade-left" data-aos-delay="900" className="card-title">
                                {singleData?.segment_name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p data-aos="fade-left" data-aos-delay="1000"><span className='font-bold'>Description : </span> {singleData?.description}</p>
                            <p data-aos="fade-left" data-aos-delay="1100" className="my-2"><small className="ring p-1 font-semibold text-sm rounded-lg">{singleData?.status}</small></p>
                            <div className="card-actions justify-start">
                                {
                                    singleData?.facilities?.map((fac, index) => { return (<div data-aos="fade-left" data-aos-delay="1200" key={index} className="badge badge-outline">{fac}</div>) })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HouseDetails;