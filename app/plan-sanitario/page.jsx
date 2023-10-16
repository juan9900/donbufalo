"use client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import FlagDropdown from "@/components/FlagDropdown";
import countries from "@/data/countries";
import { useFlagStore } from "@/stores/flagStore";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import * as pixel from "/app/lib/fpixel";

const CustomContainer = styled.div`
  background: url("/img/FONDO-PLAN.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;
`;

const CustomHeader = styled.h1`
  font-family: "Anzeigen";
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    font-size: 2.8rem;
    word-wrap: break-word;
    line-height: 2.5rem;
  }
`;

const CustomSubHeader = styled.h2`
  font-family: "Poppins-Regular";
  color: #fff;
`;

const CustomInput = styled.input`
  /* border: 3px solid #592c33; */
  width: 100%;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  outline: none;
  transition: all 0.1s;
  position: relative;
  &:focus {
    /* outline: 5px solid #ffffff83; */
  }
`;

const CustomLabel = styled.label`
  font-family: "Anzeigen";
  font-size: 1.7rem;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PlanPage() {
  const flag = useFlagStore((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userIp = await fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        return data.ip;
      });
    console.log(userIp);
    const formData = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      telefono: `${flag.code}${data.telefono}`,
      ip: userIp,
    };

    // Send the data via post
    fetch("https://hook.eu1.make.com/77wlf9t8x7ayp4ho54vvbrp1aqxfcqfe", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.ok) {
          toast.error("Error al enviar el mensaje", {
            description: "Si el problema persiste, comuníquese por WhatsApp",
          });
          return;
        }

        toast.success("Mensaje enviado con éxito");

        // Trigger a custom event for the pixel 1
        pixel.event(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, "btn-sanitario");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error al enviar el mensaje", {
          description: "Si el problema persiste, comuníquese por WhatsApp",
        });
      });
  };

  //create a form using react-hook-form with the following fields: name, lastname, email, phone
  return (
    <CustomContainer className="pt-20 xl:mt-11 ">
      <Toaster richColors={true} />

      <CustomHeader className=" text-center text-secondary text-7xl font-bold">
        PLAN SANITARIO
      </CustomHeader>
      <CustomSubHeader className=" text-center px-3 md:px-0">
        Una vez completado el formulario el plan sanitario será enviado a su
        dirección de correo electrónico.
      </CustomSubHeader>

      <div className=" w-5/6 lg:w-3/6 mx-auto pb-20">
        <form action="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col my-4">
            <div className="border-b-1 border-foreground flex flex-row mt-10">
              <CustomLabel className=" flex" htmlFor="form-name">
                Nombre:
              </CustomLabel>
              <CustomInput
                className="bg-transparent  "
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
            </div>

            {errors.nombre && (
              <p className="text-danger">{errors.nombre.message}</p>
            )}
          </div>
          <div className=" flex flex-col my-4">
            <div className="border-b-1 border-foreground flex flex-row mt-10">
              <CustomLabel className="" htmlFor="form-name">
                Apellido:
              </CustomLabel>
              <CustomInput
                className="bg-transparent  "
                id="form-name"
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
                    message: "El nombre debe tener al menos dos caracteres",
                  },
                })}
              />
            </div>
            {errors.apellido && (
              <p className="text-danger">{errors.apellido.message}</p>
            )}
          </div>

          <div className=" flex flex-col my-4">
            <div className="border-b-1 border-foreground flex flex-row mt-10">
              <CustomLabel className=" w-fit" htmlFor="form-name">
                Correo Electrónico:
              </CustomLabel>
              <CustomInput
                className="bg-transparent  flex-1  "
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
            </div>
            {errors.correo && (
              <p className="text-danger">{errors.correo.message}</p>
            )}
          </div>
          <div className=" flex flex-col my-4 justify-center ">
            <div className="flex flex-row mt-10 w-full mx-auto border-b-1 border-foreground flex flex-row mt-10">
              <CustomLabel className="mr-5" htmlFor="form-name">
                Teléfono:
              </CustomLabel>
              <FlagDropdown countries={countries} className="pr-5" />

              <CustomInput
                className="bg-transparent  w-full ml-2"
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
              <p className="text-danger">{errors.telefono.message}</p>
            )}
          </div>
          {/* Add a submit button that works with react hook form */}
          <div className="w-full flex flex-row mt-10 justify-end">
            <button
              className="bg-foreground text-secondary font-bold py-2 px-4 rounded "
              type="submit"
            >
              Obtener plan
            </button>
          </div>
        </form>
      </div>
    </CustomContainer>
  );
}
