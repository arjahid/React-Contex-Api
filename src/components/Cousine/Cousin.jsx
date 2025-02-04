import { useContext } from "react";
import { assetApi } from "../Grandpa/Grandpa";



const Cousin = ({name}) => {
   const gift=useContext(assetApi)
    return (
        <div>
            <h2>Cousin: {name}</h2>
            <p>{gift}</p>

        </div>
    );
};

export default Cousin;