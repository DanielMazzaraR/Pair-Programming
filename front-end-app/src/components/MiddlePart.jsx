import './MiddlePart.css';
import './MiddleComponents/OriginsTable.jsx'
import OriginsTable from './MiddleComponents/OriginsTable.jsx';

function MiddlePart (props) {

    return (<div className={props.nameClass}>
        <OriginsTable/>
    </div>)
}

export default MiddlePart;