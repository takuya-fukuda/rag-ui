import React, { useState, useEffect } from "react";

const Category = ({ setSelectedCategory }) => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = "http://44.219.78.185:8000/ragapp/category/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        // レスポンスをJSON形式に変換
        const data = await response.json();
        setOptions(data.category);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <select id="dropdown" onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <br />
    </div>
  );
};

export default Category;
