import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "flowbite-react";

import BookingModal from "../Components/BookingModal";

const BookShow = ({ showsData }) => {
  const { id } = useParams();
  const [name, setName] = useState("");

  const [showModal, setShowModal] = useState(false);

  //filtering out current show data based on the id of the show from the ShowsData Array

  const currentShow = showsData.find((show) => show.show.id == id);

  //Function to remove <p> tag from summary
  const removePTagFromSummary = (summary) => {
    const summaryWithoutPTag = summary.replace(/<\/?p>/gi, "");

    return summaryWithoutPTag;
  };

  return (
    <div className="">
      {showsData.length > 0 && (
        <>
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10"></div>
            <img
              src={currentShow?.show?.image?.original}
              className="h-full w-full object-cover"
            />
            <div className="absolute px-2 w-full max-w-7xl left-[50%] right-[50%] top-[55%] translate-x-[-50%] text-white z-10">
              <h2 className="py-2 text-slate-50 text-3xl pl-2 sm:pl-0">
                {currentShow.show?.name}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr] px-2 md:px-16 md:py-10 py-4">
            <div>
              <h2 className="text-xl py-2">About the Show</h2>
              <p className="text-sm md:text-base text-gray-600">
                {removePTagFromSummary(currentShow.show?.summary)}
              </p>
            </div>

            <div className="">
              <p className="text-gray-400 text-lg text-center">Book The Show</p>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="p-2.5 bg-red-600 text-center w-[70%] text-white"
                >
                  Book Show
                </button>
              </div>
            </div>
          </div>

          {/* Booking Modal */}
          <BookingModal
            showModal={showModal}
            setShowModal={setShowModal}
            currentShow={currentShow}
          />
        </>
      )}
    </div>
  );
};

export default BookShow;
