import "../Cart/CartGood.css";

export default function Cart(props){
   
    return(
        <tbody>
        <tr> 
            <td className="table-row-text">
                <img src={props.image} alt={props.title} className="img-to-cart"/>
                {props.title}</td>
            {/* <td>{props.cost} руб</td> */}
            <td className="table-row-btn">
                <button className="plus-good" data-key={props.articul}>+</button>
            </td>
            <td className="table-row-btn">{props.count} шт</td>
            <td className="table-row-btn">
                <button className="minus-good" data-key={props.articul}>-</button>
            </td>
            <td className="table-row-td">{props.totalCost} руб</td>
            <td className="table-row-td">
                <button className="remove-good" data-key={props.articul}>Удалить</button>
            </td>
        </tr>
    </tbody>
    )
}