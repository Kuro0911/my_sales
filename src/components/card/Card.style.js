import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 5%;
  background-color: white;
  height: 120px;
  width: 160px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  visibility: ${(props) => (props.render ? "visible" : "hidden")};
  opacity: ${(props) => (props.render ? "1" : "0")};
  transition: all 0.6s ease;
`;
export const Slug = styled.div`
  height: 15px;
`;
export const TopWrap = styled.div`
  display: flex;
  margin-top: 2%;
  justify-content: space-around;
`;
export const Head = styled.div`
  text-align: start;
  font-family: monospace;
  font-size: 12px;
  margin-left: 4%;
`;
export const Percent = styled.div`
  text-align: start;
  font-family: monospace;
  font-size: 12px;
  margin-left: 4%;
  text {
    font-size: 8px;
    font-style: italic;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4%;
  margin-bottom: 4%;
  text {
    font-size: 12px;
    text-align: left;
  }
`;
export const LableWrapper = styled.div`
  font-size: 12px;
  margin-left: auto;
  color: ${(props) => (props.lable === "off track" ? "black" : "white")};
  margin-right: 5%;
  background-color: ${(props) =>
    props.lable === "At risk"
      ? "red"
      : props.lable === "off track"
      ? "yellow"
      : props.lable === "on track"
      ? "green"
      : "black"};
`;

export default CardWrapper;
