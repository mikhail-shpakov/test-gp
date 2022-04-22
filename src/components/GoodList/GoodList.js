import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Goods from '../Good/Goods';
import '../Cart/CartGood.css'
import {
    selectGood
} from '../../store/goodSlice';
import {
    increment, 
    add
} from '../../store/cartSlice';

export default function GoodList() {
    const good = useSelector(selectGood);
    const dispatch = useDispatch();

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if(!t.classList.contains('add-to-cart')) return true;
        dispatch(increment(t.getAttribute('data-key')));
        dispatch(add())
    }
    return(
        <>
        <div className="good-field" onClick={clickHandler}>
            {good.map(item=>
            <Goods key={item.articul}
            title={item.title} 
            cost={item.cost} 
            image={item.image} 
            articul={item.articul}/>
            )}
        </div>
        </>
    )
}
