import { useContext } from "react";
import Cousin from "../Cousine/Cousin";
import { MoneyContex } from "../Grandpa/Grandpa";


const Aunty = () => {
    const[money,setMoney]  =useContext(MoneyContex)
    return (
        <div>
            <h2>Aunty</h2>
            <section>
                <Cousin name={'mimi'}></Cousin>
            </section>
            <p>money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000tk</button>
        </div>
    );
};

export default Aunty;