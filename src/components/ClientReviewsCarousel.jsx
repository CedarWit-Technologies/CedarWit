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
        "At cedar wit, our team are not only equipped with the tools and knowledge on creating websites (both mobile and desktop), mobile applications and creating SAAS products, we also manage preexisting products and improving the overall performance and outlook of the said products.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 ipad:gap-5 ipad:px-24 py-10 lg:pt-14 bg-lightGreen text-white">
        <h1 className="text-[#3F4525] font-bold text-[1.375rem] ipad:text-2xl lg:text-3xl">
          What Our Clients Say
        </h1>

        <p className="text-center text-base ipad:text-xl w-[88%]">
          {reviews[0].review}
        </p>
        <span className="flex flex-col gap-1 ipad:gap-2 justify-center items-center bg-darkGreen rounded-xl py-3 mb-16 lg:mb-8 ipad:py-5 px-8 ipad:px-16 w-fit mt-5 text-sm ipad:text-lg font-normal">

          {reviews[0].client} <p>{reviews[0].clientTitle}</p>
        </span>
      </div>
    </>
  );
};

export default ClientReviewsCarousel;
