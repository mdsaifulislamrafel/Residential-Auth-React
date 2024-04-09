/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const House = ({ item }) => {
    const { id, image, segment_name, description, facilities, status } = item;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="3000" className="card bg-base-100 md:h-[500px] p-5 border-2 transition hover:shadow-xl">
                <figure><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {segment_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <p className="my-2"><small className="ring p-1 font-semibold text-sm rounded-lg">{status}</small></p>
                    <div className="card-actions justify-end">
                        {
                            facilities?.map((fac, index) => { return (<div key={index} className="badge badge-outline">{fac}</div>) })
                        }
                    </div>
                </div>
                <Link to={`/houseDetails/${id}`} className="btn btn-secondary">View Property</Link>
            </div>
        </div>
    );
};

export default House;