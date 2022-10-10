import React from "react";
import Slider from "react-slick";
import { CarItem } from "./CarItem";
interface Props {
  cars: Car[];
}

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export const CarsCarousel: React.FC<Props> = ({ cars }) => {
  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {cars.map((item) => {
        return <CarItem item={item} key={item.id} />;
      })}
    </Slider>
  );
};
