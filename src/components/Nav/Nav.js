import {NavLink} from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import {
    selectValue
} from '../../store/cartSlice';

function Nav(props){
    const value = useSelector(selectValue);
 
    return(
        <div className='Nav'>
            <ul className='Nav-list' >
                {props.main.map(item=>
                <li className='Nav-link'><NavLink to = {item.link}  className="Nav-link">{item.name}</NavLink></li>)}
            </ul>
            <div className="Nav-cart">
            <NavLink to ="./cart" className="Cart-img">
                <img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/shopping-cart-1024.png" alt="cart" />
            </NavLink>
            <div className="Cart-number">{value}</div>
            </div>
        </div>
    )
}
export default Nav;