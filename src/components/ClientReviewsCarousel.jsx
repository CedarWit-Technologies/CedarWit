import React from "react";
import useClientReview from "./hooks/useClientReview";

const ClientReviewsCarousel = ({ id }) => {
  const reviews = useClientReview();
  return (
    <>
      {reviews.map((review) => (
        <div className="flex flex-col justify-center items-center gap-5 px-24 py-14 w-[1100px] bg-lightGreen text-white">
          <h1 className="text-[#3F4525] font-bold text-3xl">
            What Our Clients Say
          </h1>
          <p className="text-2xl text-center">
            A testimonial showing the feedback from clients abouts the products
            we created.
          </p>
          <p className="text-center text-lg w-2/3">{review.review}</p>
          <span className="flex flex-col gap-2 justify-center items-center bg-darkGreen rounded-xl py-5 px-16 w-fit mt-5 text-lg">
            {review.client} <p>{review.clientTitle}</p>
          </span>
        </div>
      ))}
    </>
  );
};

export default ClientReviewsCarousel;
