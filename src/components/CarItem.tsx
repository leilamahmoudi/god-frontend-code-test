import React from "react";
import { Card, CardContent, Text, Spacer, Link } from "vcc-ui";
import { Car } from "./CarsCarousel";

interface Props {
  item: Car;
}

export const CarItem: React.FC<Props> = ({ item }) => {
  return (
    <Card id="car__item">
      <CardContent id="car__content">
        <Text
          variant="bates"
          subStyle="emphasis"
          extend={{
            color: "#707070",
          }}
        >
          {item.bodyType}
        </Text>
        <div className="car__item-text-wrapper">
          <Text variant="bates" subStyle="emphasis">
            {item.modelName}
          </Text>
          <Spacer />
          <Text
            variant="bates"
            extend={{
              color: "#707070",
            }}
          >
            {item.modelType}
          </Text>
        </div>
        <img
          src={item.imageUrl}
          className="car__item-imageUrl"
          alt="car-image"
        />
        <div className="car__item-link-wrapper">
          <Link
            href={`/learn/${item.id}`}
            arrow="right"
            className="car__item-link"
          >
            LEARN{" "}
          </Link>
          <Link
            href={`/shop/${item.id}`}
            arrow="right"
            className="car__item-link"
          >
            SHOP{" "}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
