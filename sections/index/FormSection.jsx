"use-client";

import { DarkHeader } from "@/styles";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const CustomFormContainer = styled.div`
  padding-bottom: 5rem;
`;

const FormHeader = styled(DarkHeader)`
  color: #fff;
`;
const CustomContainer = styled.div``;

const CustomLabel = styled.label`
  font-family: "Anzeigen", sans-serif;
  font-size: 1.5rem;
  flex: 1.5;
`;

const CustomInput = styled.input`
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0.15rem 0.3rem;
  outline: none;
  transition: all 0.1s;
  position: relative;

  &:focus {
    outline: 5px solid #ffffff83;
  }
`;

const CustomTextArea = styled.textarea`
  background: transparent;
  border: 2px solid #ffffffa3;
  border-radius: 3px;
  resize: none;
  height: 150px;
  flex: 5;
  outline: none;
  &:focus {
    outline: 5px solid #ffffff83;
  }
`;

const CustomDiv = styled.div`
  position: relative;
  &:after {
    content: "";

    position: absolute;
    bottom: 0%;
    left: 0%;

    width: 100%;
    height: 2px;
    background: #ffffffa3;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: #cdcdcd;
`;
const FormTextContainer = styled.div`
  height: 150px;
  position: relative;
  overflow: hidden;
`;

const CustomSubmit = styled(CustomInput)`
  border-radius: 10rem;
  padding: 0.5rem 2rem;
  margin-left: auto;
  width: fit-content;
  margin-right: 2rem;
  margin-top: 2rem;
`;

// TODO: SACAR TODOS LOS OBJETOS DE EMOTIONJS FUERA DEL EXPORT

export default function FormContainer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log(watch("nombre"));
  return (
    <CustomFormContainer className="bg-secondary" id="contacto-container">
      <FormHeader className="text-center pt-20">
        ¿DESEAS QUE NOS PONGAMOS <br /> EN CONTACTO CONTIGO?
      </FormHeader>
      <CustomContainer>
        <form
          className="mt-10 flex flex-col w-full px-10 md:w-2/3 md:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex md:flex-row flex-col ">
            <CustomDiv className="flex flex-1 flex-col md:w-1/2 w-full md:mx-5 my-6 relative ">
              <CustomLabel className="text-foreground" for="form-name">
                Nombre
              </CustomLabel>
              <CustomInput
                className="bg-transparent"
                id="form-name"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Este campo es requerido*",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "El nombre solo debe contener letras",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos dos caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <ErrorMessage>{errors.nombre.message}</ErrorMessage>
              )}
            </CustomDiv>

            <CustomDiv className="flex flex-1 flex-col md:w-1/2 w-full md:mx-5 my-6">
              <CustomLabel for="form-apellido">Apellido</CustomLabel>
              <CustomInput
                className="bg-transparent"
                id="form-apellido"
                {...register("apellido", {
                  required: {
                    value: true,
                    message: "Este campo es requerido*",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "El apellido solo debe contener letras",
                  },
                  minLength: {
                    value: 2,
                    message: "El apellido debe tener al menos dos caracteres",
                  },
                })}
              />
              {errors.apellido && (
                <ErrorMessage>{errors.apellido.message}</ErrorMessage>
              )}
            </CustomDiv>
          </div>

          <div className="flex md:flex-row flex-col">
            <CustomDiv className="flex flex-col md:w-1/2 w-full md:mx-5 md:my-10 my-6">
              <CustomLabel for="form-correo">Correo Electrónico</CustomLabel>
              <CustomInput
                className="bg-transparent"
                id="form-correo"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Este campo es requerido*",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingresa un correo electrónico válido",
                  },
                })}
              />
              {errors.correo && (
                <ErrorMessage>{errors.correo.message}</ErrorMessage>
              )}
            </CustomDiv>

            <CustomDiv className="flex flex-col md:w-1/2 w-full md:mx-5 md:my-10 my-6">
              <CustomLabel for="form-telefono">Teléfono</CustomLabel>
              <CustomInput
                className="bg-transparent"
                id="form-telefono"
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "Este campo es requerido*",
                  },
                  pattern: {
                    value: /^(0414|0416|0424|0426|0412|\+1)?[0-9]{11}$/,
                    message:
                      "Ingresa un teléfono válido (0XXX1234567 o 1XXXXXXXXXX)",
                  },
                })}
              />
              {errors.telefono && (
                <ErrorMessage>{errors.telefono.message}</ErrorMessage>
              )}
            </CustomDiv>
          </div>

          <FormTextContainer className="flex flex-col md:mx-5 mt-6">
            <CustomLabel for="form-mensaje">Mensaje</CustomLabel>
            <CustomTextArea
              id="form-mensaje"
              {...register("mensaje", {
                required: { value: true, message: "Este campo es requerido*" },
              })}
            ></CustomTextArea>
            {errors.mensaje && (
              <ErrorMessage>{errors.mensaje.message}</ErrorMessage>
            )}
          </FormTextContainer>

          <CustomSubmit
            className="self-end bg-foreground hover:bg-foregroundDarker text-darkText hover:cursor-pointer"
            onSubmit={onSubmit}
            type="submit"
            value={"ENVIAR"}
          />
        </form>
      </CustomContainer>
    </CustomFormContainer>
  );
}
