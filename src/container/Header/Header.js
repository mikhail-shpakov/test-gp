import Nav from '../../components/Nav/Nav';

export default function Header(props){
    return(
        <div className>
            <Nav main = {props.main}/>
        </div>
    )
}