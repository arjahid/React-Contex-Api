import { useContext } from "react";
import { assetApi } from "../Grandpa/Grandpa";

const Pio = () => {
    const gift=useContext(assetApi)
    return (
        <div>
            <h2>pio</h2>
            <p>{gift}</p>
        </div>
    );
};

export default Pio;