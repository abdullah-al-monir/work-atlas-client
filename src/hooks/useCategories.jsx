import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return categories;
};

export default useCategories;
