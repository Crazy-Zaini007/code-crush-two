import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewSection/ReviewCard";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const ClientReviews = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
        setShowDots(false);
      } else {
        setSlidesToShow(3);
        setShowDots(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer absolute -bottom-20 z-50 right-10 "
      onClick={onClick}
    >
      <FaRegArrowAltCircleRight size={60} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer absolute -bottom-20 z-50 left-10"
      onClick={onClick}
    >
      <FaRegArrowAltCircleLeft size={60} />
    </div>
  );

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        {showDots && (
          <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
        )}
      </div>
    ),
  };

  const reviews = Array(10).fill(<ReviewCard />);
  const reviewContent = [
    {
      desc: "Working with Code Crush Technologies was a game-changer for our business. Their team delivered a top-notch app that exceeded our expectations. Highly professional and always available to answer our queries.",
    },
    {
      desc: "Code Crush Technologies provided exceptional service and innovative solutions for our e-commerce platform. Their attention to detail and commitment to quality were evident in every step of the project.",
    },
    {
      desc: "Code Crush Technologies transformed our digital presence with their exceptional UX/UI design. Their creative approach and understanding of our needs resulted in a highly engaging website.",
    },
    {
      desc: "From start to finish, Code Crush Technologies was a pleasure to work with. Their professionalism, technical expertise, and commitment to customer satisfaction make them a top choice for any tech project.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className=" pt-10 pb-10 md:py-14  bg-[#223555] text-white"
      id="reviews"
    >
      <h1 className="text-center px-2 md:px-0 pb-10 pt-14 text-5xl font-bold">
        What our clients say
      </h1>
      <div className="mx-auto px-1 md:px-0 md:max-w-7xl">
        <div className="md:w-[90%] mx-auto pb-20 ">
          <Slider {...settings}>
            {reviewContent.map((review, index) => (
              <div key={index}>
                <ReviewCard desc={review.desc} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientReviews;
