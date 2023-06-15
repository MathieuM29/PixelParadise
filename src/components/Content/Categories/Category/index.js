import './_style.scss';

function Category( { name, description } ) {


  return (
    <div className="category">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Category;