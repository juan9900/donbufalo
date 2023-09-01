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
`;

export default function TestimonialCard({ text }) {
  const TestimonialCard = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
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

      border-top: 40px solid ${(props) => props.theme.colors.secondary};

      margin: 2rem;
      position: absolute;
      top: 83%;
    }
  `;

  const TestimonialText = styled.p`
    width: 90%;
    color: ${(props) => props.theme.colors.foreground};
    font-family: "Poppins-regular", sans-serif;
  `;

  const FloatingImg = styled(Image)`
    position: absolute;
    width: 50%;
    bottom: 60%;
    left: 50%;
    transform: translateX(-50%);
  `;
  return (
    <TestimonialCardContainer>
      <TestimonialCard className="flex justify-center">
        <FloatingImg src={testimonialImg} alt="testimonial" />
        <TestimonialText className="text-center">{text}</TestimonialText>
      </TestimonialCard>
    </TestimonialCardContainer>
  );
}
