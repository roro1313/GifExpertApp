import { useState } from "react";
import { PropTypes } from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      console.log("Submit hecho " + inputValue);
      setInputValue("")
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
