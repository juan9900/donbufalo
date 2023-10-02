import { DarkHeader, TexturedContainer } from "@/styles";
import styled from "@emotion/styled";
import TestimonialCard from "/components/TestimonialCard";
import testimonial1 from "/public/img/testimonial-1.png";
import testimonial2 from "/public/img/testimonial-2.png";
import testimonial3 from "/public/img/testimonial-3.png";

export default function TestimonialsContainer() {
  const TestimonialContainer = styled(TexturedContainer)`
    .cards-container {
      margin-top: 5rem;
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
      className="md:pt-10 pt-20 md:pb-40 bg-pink-600"
    >
      <div className="flex flex-col items-center">
        <TestimonialHeader className="text-primary 2xl:mb-16 2xl:pt-10">
          TESTIMONIOS
        </TestimonialHeader>
        <div className="w-5/5 flex  flex-col items-between md:flex-row md:justify-between cards-container">
          <div className="flex-1 ">
            <TestimonialCard
              src={testimonial1}
              text={`"Estoy muy contento con el servicio de Don Búfalo fueron muy profesionales y atentos desde el primer contacto. Los animales que adquirí están en excelente estado de salud y son de alta calidad. ¡Recomiendo a Don Búfalo sin dudarlo!"`}
            />
          </div>

          <div className="flex-1 ">
            <TestimonialCard
              src={testimonial2}
              text={`"Estoy muy agradecido por su profesionalismo, el servicio de Don Búfalo al comprar animales fue excepcional. Fueron muy amables, respondieron todas mis preguntas y me proporcionaron toda la información que necesitaba para tomar una decisión informada."`}
            />
          </div>
          <div className="flex-1 ">
            <TestimonialCard
              src={testimonial3}
              text={`"Quiero agradecer a Don Búfalo por el excelente servicio que me brindaron al comprar animales, esta ha sido una compra satisfactoria. Me asesoraron de manera personalizada y me ayudaron a encontrar los animales que mejor se adaptaban a mis necesidades."`}
            />
          </div>
        </div>
      </div>
    </TestimonialContainer>
  );
}
