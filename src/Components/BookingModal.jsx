import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Modal from "react-modal";

const BookingModal = ({ showModal, setShowModal, currentShow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const customStyles = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
    },
  };

  const handleBooking = (ev) => {
    ev.preventDefault();
    const bookingDetails = {
      name: name,
      email: email,
      showName: currentShow.show.name,
      showId: currentShow.show.id,
    };
    const userBookings = JSON.parse(localStorage.getItem("userBookings"));
    if (userBookings) {
      localStorage.setItem(
        "userBookings",
        JSON.stringify([...userBookings, bookingDetails])
      );
    } else {
      localStorage.setItem("userBookings", JSON.stringify([bookingDetails]));
    }
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} style={customStyles}>
      <div className="flex justify-between">
        <h2 className="text-xl">
          Booking Show for{" "}
          <span className="text-red-500">{currentShow?.show?.name}</span>
        </h2>
        <button onClick={() => setShowModal(false)}>close</button>
      </div>
      <form onSubmit={handleBooking}>
        <div>
          <div className="mb-2">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            required={true}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div>
          <div className="mb-2">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            id="email"
            type="text"
            required={true}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="p-2.5 bg-red-600 text-center w-[70%] text-white"
          >
            Book Show
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BookingModal;
