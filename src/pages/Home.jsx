import React from "react";
import ShowCard from "../Components/ShowCard";

const Home = ({ showsData }) => {
  return (
    <div className="min-h-screen bg-slate-200 p-3">
      <h1 className="text-center text-3xl">All Shows</h1>
      {showsData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
          {showsData.map((show) => {
            if (!show.show.image) return; //Not showing Show which doesn't have an image on the home screen
            return <ShowCard show={show} key={show.show.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
