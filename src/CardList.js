const CardList = ({cards}) => {
  return (  
    <div className="card-list">
      {cards.map((card) => (
          <div className="card-preview" key={card.id}>
            <h2>{card.name}</h2>
            <h4>TYPE: {card.type}</h4>
            <h4>REWARDS: </h4>
            {
                Object.entries(card.rewards).map(([key, val]) => 
                    <p key={key}>{key}: {val}%</p>
                )
            }
          </div>
        ))}
    </div>
  );
}
export default CardList;