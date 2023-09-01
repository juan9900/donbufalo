import { DarkHeader, TexturedContainer } from "@/styles";
import styled from "@emotion/styled";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsContainer() {
  const TestimonialContainer = styled(TexturedContainer)`
    padding-bottom: 10rem;

    .cards-container {
      margin-top: 9rem;
    }
  `;
  const TestimonialHeader = styled(DarkHeader)``;

  return (
    <TestimonialContainer className="pt-10">
      <div className="flex flex-col items-center">
        <TestimonialHeader>TESTIMONIOS</TestimonialHeader>
        <div className="w-4/5 flex flex-row justify-between cards-container">
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
