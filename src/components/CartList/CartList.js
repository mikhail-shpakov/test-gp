import React from "react";
import Cart from "../../components/Cart/Cart";
import './CartList.css';
import { useSelector, useDispatch } from "react-redux";
import {
    selectCart, 
    minus,
    increment,
    add,
    remove
} from '../../store/cartSlice';
import {
    selectGood
} from '../../store/goodSlice';

export default function CartList(){
    const cart = useSelector(selectCart);
    const good = useSelector(selectGood);
    const dispatch = useDispatch();
    
    //переиндексируем
    const goodObj = good.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    // console.log(goodObj)

    const clickHandler = (event) =>{
        event.preventDefault();
        let t = event.target;
        if(t.classList.contains('minus-good')){
            console.log('minus');
            dispatch(minus(t.getAttribute('data-key')));
        }
        else if(t.classList.contains('plus-good')){
            dispatch(increment(t.getAttribute('data-key')));
            dispatch(add());
        }
        else if(t.classList.contains('remove-good')){
            dispatch(remove(t.getAttribute('data-key')));
            
        }else return true;
        
    }

    let sum = 0;
    Object.keys(cart).map((item) => (
        sum = sum + goodObj[item]['cost'] * cart[item]));
    return(
        <>
        <div>
            <h1 className="cart-title">Товары в корзине:</h1>
            <table className="cart-field" onClick={clickHandler}>
                {/* <thead>
                    <tr>
                        <td>Продукт</td>
                        <td>Цена</td>
                        <td>Количество</td>
                        <td>Всего</td>
                    </tr>
                </thead> */}
                {Object.keys(cart).map(item => 
                    <Cart
                    key = {goodObj[item]['aticul'] + 1}
                    image = {goodObj[item]['image']}
                    articul = {item}
                    title = {goodObj[item]['title']}
                    cost = {goodObj[item]['cost']}
                    count = {cart[item]}
                    totalCost = {goodObj[item]['cost'] *  cart[item]}/>)}
            </table>
            <h2>К оплате: {sum} руб.</h2>
        </div>
        
        </>
    )
};

    


