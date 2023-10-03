import styled from "@emotion/styled";
import Image from "next/image";

const TestimonialCardContainer = styled.div`
  position: relative;
  height: 100%;
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
    margin: 5rem 0 7rem 0;
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

  @media screen and (min-width: 1920px) {
    padding-bottom: 3rem;
  }
`;

const TestimonialText = styled.p`
  width: 90%;
  font-family: "Poppins-regular", sans-serif;
`;

const FloatingImg = styled(Image)`
  position: absolute;
  width: 35%;
  bottom: 70% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;

  /* @media screen and (max-width: 1281px) {
    width: 45%;
    bottom: 65% !important;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    bottom: 80% !important;
  }

  @media screen and (min-width: 1281px) {
    width: 35%;
    bottom: 75% !important;
  } */
  @media (min-width: 320px) {
    /* smartphones, iPhone, portrait 480x320 phones */
    bottom: 80% !important;
  }
  @media (min-width: 481px) {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  }
  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    bottom: 85% !important;
    width: 45%;
  }
  @media (min-width: 961px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
    width: 35%;
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
    bottom: 75% !important;
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    bottom: 75% !important;
  }

  @media (min-width: 1920px) {
    bottom: 80% !important;
  }
`;

export default function TestimonialCard({ text, src }) {
  return (
    <TestimonialCardContainer className="3xl:mt-5">
      <CustomCard className="bg-secondary flex justify-center h-full">
        <FloatingImg src={src} alt="testimonial" />
        <TestimonialText className=" text-md 3xl:text-xl text-center text-foreground">
          {text}
        </TestimonialText>
      </CustomCard>
    </TestimonialCardContainer>
  );
}
