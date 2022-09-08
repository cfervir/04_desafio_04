const Characters = ({ characters }) => {

  return (
    <div className="container--flex container--cards">
      {characters.map((d) => (
          <div className="card" key={ d.id }>
            <img className="card__image" src={ d.image } alt={ d.name } />
            <div className="card__body" >
              <h3>{ d.name }</h3>
              <p>{ d.species } - { d.gender }</p>
              <p>From: {d.origin.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Characters;