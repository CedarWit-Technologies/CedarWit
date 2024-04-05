import React from "react";
import useClientReview from "./hooks/useClientReview";

const ClientReviewsCarousel = () => {
  const reviews = useClientReview();

  return (
    <>
      {reviews.map((review) => (
        <div className="flex flex-col justify-center items-center gap-5 px-28 py-16 w-[900px] bg-lightGreen text-white">
          <h1 className="text-darkGreen font-bold text-3xl">
            What Our Clients Say
          </h1>
          <p className="text-xl text-center">
            A testimonial showing the feedback from clients abouts the products
            we created.
          </p>
          <p className="text-center text-base w-2/3">{review.review}</p>
          <span className="flex flex-col gap-2 justify-center items-center bg-darkGreen rounded-xl py-5 px-16 w-fit mt-10 text-lg">
            {review.client} <p>{review.clientTitle}</p>
          </span>
        </div>
      ))}
    </>
  );
};

export default ClientReviewsCarousel;
