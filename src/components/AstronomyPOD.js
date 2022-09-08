const AstronomyPOD = (props) => {
  return (
    <div>
      <img src={props.url} alt="" />
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default AstronomyPOD;
