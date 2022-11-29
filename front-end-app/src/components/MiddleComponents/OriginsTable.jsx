import './OriginsTable.css';

import OriginCard from './OriginCard.jsx';

const DUMMY_ORIGINS = [
    {
      id: 0,
      city: "Madrid",
    },
    {
      id: 1,
      city: "Sevilla",
    },
    {
      id: 3,
      city: "Barcelona",
    },
    {
      id: 4,
      city: "Valencia",
    },
    {
      id: 5,
      city: "Bilbao",
    },
  ];
  
  function OriginsTable() {
    const origins = DUMMY_ORIGINS.map((origin) => (
      <OriginCard
      key={origin.id}
      name={origin.city}/>
    ));
  
    return (<div>
        {origins}
    </div>);
  }
  
  export default OriginsTable;