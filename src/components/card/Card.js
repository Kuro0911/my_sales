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
          <div>Total Sales - {total} Crore</div>
          <div>Target Sales - {target} Crore</div>
        </TextWrapper>
        <ProgressBar done={completed} />
      </CardWrapper>
      {hasChild && showChild ? <CardList data={child} /> : <></>}
    </Wrap>
  );
}

export default Card;
