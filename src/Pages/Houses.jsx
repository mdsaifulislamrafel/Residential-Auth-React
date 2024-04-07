import { useEffect, useState } from "react";
import DataHook from "../DataHook/DaraHook";
import House from "./House";

const Houses = () => {
    const { data } = DataHook();
    const [house, setHouse] = useState([]);
    useEffect(() => {
        setHouse(data);
    }, [data])
    return (
        <div className="my-10">
            <h3 className="text-5xl font-extrabold text-center">Select Houses</h3>
            <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-8 my-10">
                {
                    house.map(item => <House key={item.id} item={item}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;