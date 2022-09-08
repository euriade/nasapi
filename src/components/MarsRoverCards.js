const MarsRoverCards = (props) => {
  return (
    <div className="w-3/4 mx-auto my-12 bg-gray-dark rounded-lg">
      <img className="mx-auto rounded-lg" src={props.url} alt={props.name} />
      <p className="text-center text-white mx-auto">Robot: {props.name}</p>
      <p className="text-center text-white mx-auto">
        Launching date: {props.launching}
      </p>
      <p className="text-center text-white mx-auto">
        Landing date: {props.landing}
      </p>
    </div>
  );
};

export default MarsRoverCards;
