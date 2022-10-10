import React, { useState } from "react";
import { SelectInput, View } from "vcc-ui";
import { CarsCarousel } from "./CarsCarousel";
import cars from "../../public/api/cars.json";

export const CarsContainer: React.FC = () => {
  const [bodyType, setBodyType] = useState("");

  return (
    <View className="cars__container">
      <SelectInput
        label={"Filter by body type"}
        value={bodyType}
        onChange={(e) => {
          setBodyType(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="suv">SUV</option>
        <option value="estate">Estate</option>
        <option value="sedan">Sedan</option>
      </SelectInput>
      <CarsCarousel
        cars={cars.filter((car) => {
          if (!bodyType || bodyType === "all") return true;
          return car.bodyType === bodyType;
        })}
      />
    </View>
  );
};
