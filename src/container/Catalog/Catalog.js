// import CatalogGoods from "./CatalogGoods";
import GoodList from '../../components/GoodList/GoodList'
import '../../components/Cart/CartGood.css';

function Catalog(){

    return(
        <div className="container">
            <h1>Каталог</h1>
            <GoodList/>
        </div>
    )
}
export default Catalog;