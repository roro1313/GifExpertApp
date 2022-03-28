import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const titulo = "GifExpertApp";
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h2>{titulo}</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => {
          return (<GifGrid key={category} category={category} />)
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;




  /*   
  Dentro del setCategories usamos una función a modo de callback
  const handleAdd = () => {
    setCategories([categories => [...categories, "holi"]]);
  }; */
