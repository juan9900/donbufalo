import styled from "@emotion/styled";

const CustomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  span {
    width: 7px;
    height: 33px;
    background: white;
    border-radius: 5px;
    margin: 6px;
    display: inline-block;
    animation: move 1.1s infinite ease-in-out;
  }
  span:nth-of-type(1) {
    transform: rotate(-45deg);
  }

  span:nth-of-type(2) {
    transform: rotate(45deg);
  }

  @keyframes move {
    0% {
      margin-top: 0;
    }
    50% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0;
    }
  }
`;
export default function ArrowDown() {
  return (
    <CustomContainer>
      <span></span>
      <span></span>
    </CustomContainer>
  );
}
