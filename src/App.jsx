import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import BookShow from "./pages/BookShow";

function App() {
  const [showsData, setShowsData] = useState([]);

  const fetchShowsData = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setShowsData(res.data);
  };

  useEffect(() => {
    fetchShowsData();
  }, []);
  console.log(showsData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home showsData={showsData} />} />
        <Route
          path="/book-show/:id"
          element={<BookShow showsData={showsData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
