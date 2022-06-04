import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 15px;
  width: 250px;
  .progress-done {
    background: linear-gradient(to left, lightgreen, lightgreen);
    box-shadow: 0 3px 3px -5px green, 0 2px 5px green;
    border-radius: 20px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    height: 100%;
    width: 0;
    transition: 2s ease;
  }
`;
export default ProgressBarWrapper;
