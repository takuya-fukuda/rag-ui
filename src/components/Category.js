import React, { useState, useEffect } from "react";

const Category = ({ setSelectedCategory }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const arr = ["test1", "test2", "test3", "test4", "test5"];
      setOptions(arr);
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select id="dropdown" onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Category;
