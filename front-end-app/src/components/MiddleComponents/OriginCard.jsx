import './OriginCard.css';

function OriginCard(props) {
  return (
    <div className="button-borders">
      <button className="primary-button">{props.name}</button>
    </div>
  );
}

export default OriginCard;
