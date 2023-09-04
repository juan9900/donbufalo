import styled from "@emotion/styled";
import Image from "next/image";
import testimonialImg from "/public/img/testimonial.png";

const TestimonialCardContainer = styled.div`
  position: relative;
  &:after {
    content: "";

    position: absolute;
    top: 120%;
    left: 50%;

    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: #484848a4;
    opacity: 0.5;
    -webkit-filter: blur(10px);
    -webkit-transform: scale(1, 0.15) translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    &:after {
      display: none;
      opacity: 0;
    }
  }
`;

const CustomCard = styled.div`
  flex: 1;
  margin: 0 3rem;
  border-radius: 3rem;
  padding: 5rem 2rem 1rem 2rem;
  position: relative;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;

    border-top: 40px solid #592c33;

    margin: 2rem;
    position: absolute;
    top: 83%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 7rem 0;
    &:before {
      display: none;
    }
  }

  @media screen and (max-width: 1281px) {
    margin: 0 1rem;
  }
`;

const TestimonialText = styled.p`
  width: 90%;
  font-family: "Poppins-regular", sans-serif;
`;

const FloatingImg = styled(Image)`
  position: absolute;
  width: 50%;
  bottom: 60% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;

  @media screen and (max-width: 768px) {
    width: 40%;
    bottom: 70%;
  }

  @media screen and (max-width: 1281px) {
    width: 45%;
    bottom: 65% !important;
  }
`;

export default function TestimonialCard({ text }) {
  return (
    <TestimonialCardContainer>
      <CustomCard className="bg-secondary flex justify-center">
        <FloatingImg src={testimonialImg} alt="testimonial" />
        <TestimonialText className="text-center text-foreground">
          {text}
        </TestimonialText>
      </CustomCard>
    </TestimonialCardContainer>
  );
}
