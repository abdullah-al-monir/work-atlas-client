import { useEffect, useState } from "react";

const useDateFormat = (date) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setFormattedDate(formatDate(date));
  }, [date]);

  return formattedDate;
};
export default useDateFormat;
