import React from "react";

const ClientReviewsCarousel = ({ id }) => {
  const reviews = [
    {
      client: "Nike Korodele",
      clientTitle: "Manager, Bariga consult",
      review:
        "At cedar wit, our team are not only equipped with the tools and knowledge on creating websites (both mobile and desktop), mobile applications and creating SAAS products, we also manage preexisting products and improving the overall performance and outlook of the said product.",
    },
    {
      client: "Nike Korodele",
      clientTitle: "Manager, Bariga consult",
      review:
        "At cedar wit, our team are not only equipped with the tools and knowledge on creating websites (both mobile and desktop), mobile applications and creating SAAS products, we also manage preexisting products and improving the overall performance and outlook of the said product.",
    },
    {
      client: "Nike Korodele",
      clientTitle: "Manager, Bariga consult",
      review:
        "At cedar wit, our team are not only equipped with the tools and knowledge on creating websites (both mobile and desktop), mobile applications and creating SAAS products, we also manage preexisting products and improving the overall performance and outlook of the said product.",
    },
    {
      client: "Nike Korodele",
      clientTitle: "Manager, Bariga consult",
      review:
        "At cedar wit, our team are not only equipped with the tools and knowledge on creating websites (both mobile and desktop), mobile applications and creating SAAS products, we also manage preexisting products and improving the overall performance and outlook of the said product.",
    },
  ];
  return (
    <>
      {/* {reviews.map((review) => ( */}
      <div className="flex flex-col justify-center items-center gap-5 px-24 py-14 bg-lightGreen text-white">
        <h1 className="text-[#3F4525] font-bold text-3xl">
          What Our Clients Say
        </h1>
        <p className="text-2xl text-center">
          A testimonial showing the feedback from clients abouts the products we
          created.
        </p>
        <p className="text-center text-lg w-2/3">{reviews.review}</p>
        <span className="flex flex-col gap-2 justify-center items-center bg-darkGreen rounded-xl py-5 px-16 w-fit mt-5 text-lg">
          {reviews[0].client} <p>{reviews[0].clientTitle}</p>
        </span>
      </div>
      {/* ))} */}
    </>
  );
};

export default ClientReviewsCarousel;
