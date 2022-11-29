import './MiddlePart.css';
import './MiddleComponents/OriginsTable.jsx'
import OriginsTable from './MiddleComponents/OriginsTable.jsx';

function MiddlePart (props) {

    return (<div className={props.nameClass}>
        <OriginsTable nameClass = {props.nameClass}/>
    </div>)
}

export default MiddlePart;