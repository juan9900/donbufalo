"use-client";
import { useState, useMemo } from "react";
import { DarkHeader } from "@/styles";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import FlagDropdown from "@/components/FlagDropdown";
import { useFlagStore } from "@/stores/flagStore";
import countries from "@/data/countries";
import { event } from "@/app/lib/fpixel";

const CustomFormContainer = styled.div`
  padding-bottom: 5rem;

  button.group {
    border-radius: 0;
    border-top-left-radius: 0.5rem;
  }
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
  width: fit-content;
  margin-top: 2rem;
`;

// TODO: SACAR TODOS LOS OBJETOS DE EMOTIONJS FUERA DEL EXPORT

export default function FormContainer() {
  const [formSent, setFormSent] = useState(false);
  const [phonePlaceholder, setPhonePlaceholder] = useState(
    countries[0].placeholder
  );

  const flag = useFlagStore((state) => state);

  // const [selectedKeys, setSelectedKeys] = useState(new Set(["VE"]));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //Prepare the data to be sent via post

    const formData = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      telefono: `${flag.code}${data.telefono}`,
    };
    // Send the data via post
    fetch("https://hook.eu1.make.com/4up0au4cthglccbn8dfmb55uusait36o", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          toast.error("Error al enviar el mensaje", {
            description: "Si el problema persiste, comuníquese por WhatsApp",
          });
          return;
        }
        event("Contact");
        toast.success("Mensaje enviado con éxito");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error al enviar el mensaje", {
          description: "Si el problema persiste, comuníquese por WhatsApp",
        });
      });
  };

  return (
    <CustomFormContainer className="bg-secondary" id="contacto-container">
      <FormHeader className="text-center pt-20">
        ¿DESEAS QUE NOS PONGAMOS <br /> EN CONTACTO CONTIGO?
      </FormHeader>
      <CustomContainer>
        <Toaster richColors={true} />
        <form
          className="mt-10 flex flex-col w-full px-10 md:w-2/3 md:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex md:flex-row flex-col ">
            <CustomDiv className="flex flex-1 flex-col md:w-1/2 w-full md:mx-5 my-6 relative ">
              <CustomLabel className="text-foreground" htmlFor="form-name">
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
              <CustomLabel className="text-foreground" htmlFor="form-apellido">
                Apellido
              </CustomLabel>
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
              <CustomLabel className="text-foreground" htmlFor="form-correo">
                Correo Electrónico
              </CustomLabel>
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
              <CustomLabel className="text-foreground" htmlFor="form-telefono">
                Teléfono
              </CustomLabel>
              <div className="flex flex-row">
                <FlagDropdown countries={countries} />

                <CustomInput
                  className="bg-transparent w-full"
                  id="form-telefono"
                  placeholder={flag.placeholder}
                  {...register("telefono", {
                    required: {
                      value: true,
                      message: "Este campo es requerido*",
                    },

                    pattern: {
                      value: flag.regex,
                      message: `Ingresa un teléfono válido. Ej: ${flag.placeholder} `,
                    },
                  })}
                />
              </div>

              {errors.telefono && (
                <ErrorMessage>{errors.telefono.message}</ErrorMessage>
              )}
            </CustomDiv>
          </div>

          <CustomSubmit
            className="md:ml-auto md:mr-5 mx-auto md:self-end bg-foreground hover:bg-foregroundDarker text-darkText hover:cursor-pointer"
            type="submit"
            value={"ENVIAR"}
          />
        </form>
      </CustomContainer>
    </CustomFormContainer>
  );
}
