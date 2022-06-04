import React, { useState, useEffect } from "react";
import { CardList } from "../cardList/CardList";
import ProgressBar from "../progress/ProgressBar";
import CardWrapper, {
  Head,
  LableWrapper,
  Percent,
  Slug,
  TextWrapper,
  TopWrap,
  Wrap,
} from "./Card.style";
function Card({ head, total, target, child }) {
  const completed = Math.floor((total / target) * 100);
  const hasChild = child ? true : false;
  const [showChild, setShowChild] = useState(false);
  const [render, setRender] = useState(false);
  const lable =
    completed <= 33 ? "At risk" : completed <= 66 ? "off track" : "on track";
  const handleClick = () => {
    setShowChild(!showChild);
  };
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 250);
  }, []);

  return (
    <Wrap render={render}>
      <CardWrapper onClick={handleClick}>
        <TopWrap>
          <Head>{head}</Head>
          <Percent>
            {completed}% <text>completed</text>
          </Percent>
        </TopWrap>
        <Slug />
        <TextWrapper>
          <text>Total Sales - {total} Crore</text>
          <text>Target Sales - {target} Crore</text>
          <LableWrapper lable={lable}>{lable}</LableWrapper>
        </TextWrapper>
        <ProgressBar done={completed} />
      </CardWrapper>
      {hasChild && showChild ? <CardList data={child} /> : <></>}
    </Wrap>
  );
}

export default Card;
