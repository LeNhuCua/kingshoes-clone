import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { IoChevronBackOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
const Slides = () => {

  const indicators = () => (
    <div className="relative bottom-[3.125rem] cursor-pointer p-[0.4375rem] rounded-full text-center border ml-3 indicator"></div>
  );
  const properties = {
    prevArrow: (
      <button className="absolute w-[3.125rem] h-[3.125rem] bg-[rgba(0,0,0,0.3)] text-gray-400 hover:text-white rounded-full flex items-center justify-center border-0">
        <IoChevronBackOutline size={20} />
      </button>
    ),
    nextArrow: (
      <button className="absolute  w-[3.125rem] h-[3.125rem] bg-[rgba(0,0,0,0.3)] text-gray-400 hover:text-white rounded-full flex items-center justify-center border-0">
        <MdNavigateNext size={30} />
      </button>
    ),
  };

  const images = [
    "https://kingshoes.vn/data/upload/media/spa-giay-dan-sole-ve-sinh-crep-protect-tai-king-shoes-sneaker-real-hcm-gia-re-8-1576661620--phbspcia-1592386256--apbihspc-1622454065.jpg",
    "https://kingshoes.vn/data/upload/media/coverwebcrep-1554432453i-1622454041-1623428656.png",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="relative z-10 bg-red-300 max-h-[200px] md:max-h-[300px] xl:max-h-[700px]">
      <Slide
        transitionDuration={300}
        autoplay={true}
        indicators={indicators}
        {...properties}
      >
        <a href="###">
          <div
            className="flex items-center justify-center bg-cover bg-center bg-no-repeat h-[200px] md:h-[300px] xl:h-[700px]"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <span>Slide 1</span>
          </div>
        </a>

        <div
          className="flex items-center justify-center bg-cover bg-center bg-no-repeat h-[200px] md:h-[300px] xl:h-[700px]"
          style={{ backgroundImage: `url(${images[1]})` }}
        >
          <span>Slide 2</span>
        </div>

        <div
          className="flex items-center justify-center bg-cover bg-center bg-no-repeat h-[200px] md:h-[300px] xl:h-[700px]"
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          <span>Slide 3</span>
        </div>
      </Slide>
    </div>
  );
};

export default Slides;




