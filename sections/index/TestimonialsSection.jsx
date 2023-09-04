import { DarkHeader, TexturedContainer } from "@/styles";
import styled from "@emotion/styled";
import TestimonialCard from "/components/TestimonialCard";

export default function TestimonialsContainer() {
  const TestimonialContainer = styled(TexturedContainer)`
    .cards-container {
      margin-top: 9rem;
    }
  `;
  const TestimonialHeader = styled(DarkHeader)`
    @media screen and (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: -2rem;
    }
  `;

  return (
    <TestimonialContainer
      id="testimonials-container"
      className="md:pt-10 pt-20 md:pb-40"
    >
      <div className="flex flex-col items-center">
        <TestimonialHeader className="text-primary md:mb-16 md:pt-10">
          TESTIMONIOS
        </TestimonialHeader>
        <div className="w-4/5 flex  flex-col items-between md:flex-row md:justify-between cards-container">
          <TestimonialCard
            text={
              "El Bufalo es un libro escrioto por el PRofesor Nestor Montiel que ofrece una visión exhaustiva y detallada sobre los búfalos"
            }
          />
          <TestimonialCard
            text={
              "El Bufalo es un libro escrioto por el PRofesor Nestor Montiel que ofrece una visión exhaustiva y detallada sobre los búfalos"
            }
          />
          <TestimonialCard
            text={
              "El Bufalo es un libro escrioto por el PRofesor Nestor Montiel que ofrece una visión exhaustiva y detallada sobre los búfalos"
            }
          />
        </div>
      </div>
    </TestimonialContainer>
  );
}
