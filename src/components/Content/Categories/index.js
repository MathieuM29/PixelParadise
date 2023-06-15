import './_style.scss';
import datas from '../../../data/data';
import Category from './Category';
import { useState } from "react";

function Categories() {

  const [results, setResults] = useState(datas.categories);
  console.log(results);
  return (
    <div className="categories">
      {results.map((data) => (<Category key={data.id} {...data} />))}
    </div>
  );
}

export default Categories;