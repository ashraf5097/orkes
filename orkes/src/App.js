import React, { useEffect } from "react";
import Card from "./common/Card"; // Assuming the Card component is in a separate file
import "./App.css";
import { useDataFetching } from "./hooks/useDataFetching";

const App = () => {
  const { list, loading, page, fetchData } = useDataFetching();

  useEffect(() => {
    fetchData(0);
  }, []);

  const handleScroll = () => {
    const container = document.getElementById("listPaper");
    if (container) {
      const windowHeight = container.clientHeight;
      const documentHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 200 && !loading) {
        fetchData(page + 1);
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById("listPaper");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [list, loading]);

  return (
    <div className="app" id="listPaper">
      {list?.map(({ node }, index) => {
        return (
          <div key={node?.nid + index + node?.title}>
            <Card data={node} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
