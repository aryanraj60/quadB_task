import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <Link
      to={`/book-show/${show.show.id}`}
      className="flex flex-col items-center"
    >
      <img
        src={show.show?.image?.medium || show.show?.image?.original}
        className="rounded-2xl"
      />
      <h2 className="py-2 text-xl">{show.show.name}</h2>
    </Link>
  );
};

export default ShowCard;
