import React, { useState } from "react";
import { CardList } from "../cardList/CardList";
import ProgressBar from "../progress/ProgressBar";
import CardWrapper, {
  Head,
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
  const handleClick = () => {
    setShowChild(!showChild);
  };
  return (
    <Wrap>
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
        </TextWrapper>
        <ProgressBar done={completed} />
      </CardWrapper>
      {hasChild && showChild ? <CardList data={child} /> : <></>}
    </Wrap>
  );
}

export default Card;
