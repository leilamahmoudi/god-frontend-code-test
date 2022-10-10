import React from "react";
import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  const { carId } = router.query;

  return <h1>Shop {carId}</h1>;
};

export default Shop;
