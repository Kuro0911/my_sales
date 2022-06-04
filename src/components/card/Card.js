import React from "react";
import ProgressBar from "../progress/ProgressBar";
import CardWrapper, { Head } from "./Card.style";
function Card() {
  return (
    <CardWrapper>
      <Head>Card</Head>
      <ProgressBar done={50} />
    </CardWrapper>
  );
}

export default Card;
