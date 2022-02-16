import React from 'react'
import accounting from 'accounting';
import { getBasketTotal } from '../reducer';
import {useStateValue} from "../StateProvide";


const Total = () => {
    const [{basket},dispatch]=useStateValue();

  return (
    <div >
        <h5>
            Total items:{basket?.length}
        </h5>
        <h5>
            {accounting.formatMoney(getBasketTotal(basket)) }
        </h5>
        <buton className="btn btn-outline-success my-2 my-sm-0" type="submit">Verificar</buton>
    </div>
  )
}

export default Total