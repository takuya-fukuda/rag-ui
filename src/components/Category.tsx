import React, { useState, useEffect } from "react";

interface CategoryProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({ setSelectedCategory }) => {
  const [options, setOptions] = useState<Array<string | number>>([]);
  const [error, setError] = useState<string | null>(null);

  const apiUrl: string = "http://localhost:8000/ragapp/category/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // クッキーを含めるために必要
        });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        // レスポンスをJSON形式に変換
        const data = await response.json();

        // `category`配列から`h3`の値だけを取り出して`options`にセット
        const categoryOptions = Array.from(
          new Set<string>(data.category.map((item: { h3: string }) => item.h3))
        );

        setOptions(categoryOptions);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
