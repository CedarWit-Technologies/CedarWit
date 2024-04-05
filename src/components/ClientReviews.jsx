import React from "react";
import ClientReviewsCarousel from "./ClientReviewsCarousel";

const ClientReviews = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className={`flex translate-x-0`}>
        <ClientReviewsCarousel />
      </div>
    </div>
  );
};

export default ClientReviews;
