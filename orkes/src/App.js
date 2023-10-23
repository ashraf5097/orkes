import React, { useEffect, useState } from "react";
import Card from "./Card"; // Assuming the Card component is in a separate file
import "./App.css";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const apiUrl =
      "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1"; // The API URL you want to send to the backend

    try {
      // Send the API URL in the request body
      const response = await axios.post("http://localhost:3001/api/fetchData", {
        apiUrl,
      });
      const data = response.data;
      setList(data);
      // Process and use the data as needed in your component
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log({ list });
  return (
    <div className="app">
      {list?.map(({ node }) => {
        return (
          <div>
            <Card data={node} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
