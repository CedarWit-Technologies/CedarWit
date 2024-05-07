import React from "react";

const ClientReviewsCarousel = ({ inView }) => {
  const reviews = [
    {
      client: "Ogooluwa Fagbemi",
      clientTitle: "OgTech",
      review:
        "'Overall, I was extremely satisfied with the results and would highly recommend CedarWit Technologies to anyone looking for a reliable and high-quality web/app development partner. They brought fresh ideas to the table and helped create a product that exceeded our expectations. They kept the project on track and delivered the final product on time and within budget.'",
    },
    {
      client: "Solomon Kingsley",
      clientTitle: "Kaydulf Consults",
      review:
        "'CedarWit has strong vision for Client's satisfaction and they always provide that to us at kaydulfconsults'",
    },
  ];

  return (
    <section className="flex justify-center items-center w-[200vw]">
      {reviews.map((review, id) => (
        <div
          key={id}
          className={`flex flex-col justify-center items-center gap-3 ipad:gap-5 ipad:px-24 py-10 lg:pt-14 bg-lightGreen text-white h-[30rem] ipad:h-[37rem] md:h-[33rem] tab:h-[28rem] lg:h-[33rem] translate-x-1/2 transition-all duration-300 ease-in-out ${
            inView !== 0 && "-translate-x-1/2"
          } w-screen`}
        >
          <p
            className={`text-center text-base ipad:text-xl pt-10 tab:pt-14 lg:pt-28 ${
              id == 1 ? "w-2/3" : "w-[82%] lg:w-4/5"
            }`}
          >
            {review.review}
          </p>
          <span className="flex flex-col gap-1 ipad:gap-2 justify-center items-center bg-darkGreen rounded-xl py-3 mb-16 lg:mb-8 ipad:py-5 px-8 ipad:px-16 w-fit mt-5 tab:mt-1 text-sm ipad:text-lg font-normal">
            {review.client} <p>{review.clientTitle}</p>
          </span>
        </div>
      ))}
    </section>
  );
};

export default ClientReviewsCarousel;
