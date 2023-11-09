import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://work-atlas-server.vercel.app/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return categories;
};

export default useCategories;
