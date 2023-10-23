// useDataFetching.js
import { useState } from "react";
import axios from "axios";

export function useDataFetching() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (newPage) => {
    console.log("fetching data", newPage);
    const apiUrl = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${newPage}`; // The API URL you want to send to the backend
    setLoading(true);
    try {
      // Send the API URL in the request body
      const response = await axios.post("http://localhost:3001/api/fetchData", {
        apiUrl,
      });
      const data = response.data;
      setPage(newPage);
      setLoading(false);

      setList([...list, ...data]);
      // Process and use the data as needed in your component
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { list, loading, page, fetchData };
}
