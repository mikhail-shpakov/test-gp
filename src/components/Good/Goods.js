import React from "react";

export default function Goods(props){
        return(
        <div className="good-field card">
            <img src={props.image} alt="" className="card-img"/>
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text">{props.cost} ₽</p>
            <div className="btn-add">
                <button className="add-to-cart btn btn-outline-secondary btn-pizza btn-start" data-key={props.articul}>Купить</button>
            </div>
        </div>
        )

}
