import { useEffect, useState } from "react";
import DataHook from "../DataHook/DaraHook";
import House from "./House";
import Marquee from "react-fast-marquee";

const Houses = () => {
    const { data } = DataHook();
    const [house, setHouse] = useState([]);
    useEffect(() => {
        setHouse(data);
    }, [data])
    return (
        <div className="my-10">
            <Marquee speed={350}><h3 className="text-2xl font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient italic uppercase">choose your house</h3></Marquee>
            
            <br />
            <hr className="border-y-4 border-yellow-400" />
            <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-8 my-10">
                {
                    house.map(item => <House key={item.id} item={item}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;