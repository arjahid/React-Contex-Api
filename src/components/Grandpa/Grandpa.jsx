import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granpa.css'

export const assetApi=createContext('diamond')
export const MoneyContex=createContext(1000)
const Grandpa = () => {
    const [money,setMoney]=useState(1000)
    const asset='diamond'
    return (
        <div className="Grandpa ">
            <h3>Grandpa</h3>
         <MoneyContex.Provider value={[money,setMoney]}>
         <assetApi.Provider value={asset}>
          <div className="flex">
           <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </div>
          </assetApi.Provider>
         </MoneyContex.Provider>
        </div>
    );
};

export default Grandpa;