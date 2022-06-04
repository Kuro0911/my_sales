import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 5%;
  background-color: white;
  height: 100px;
  width: 150px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
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
  }
`;

export default CardWrapper;
