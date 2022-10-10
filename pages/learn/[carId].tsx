import React from "react";
import { useRouter } from "next/router";

const Learn = () => {
  const router = useRouter();
  const { carId } = router.query;

  return <h1>Learn {carId}</h1>;
};

export default Learn;
