"use client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import FlagDropdown from "@/components/FlagDropdown";
import countries from "@/data/countries";
import { useFlagStore } from "@/stores/flagStore";
import Link from "next/link";
import { Toaster, toast } from "sonner";

const CustomContainer = styled.div`
  background: url("/img/TEXTURA.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;
`;

const CustomHeader = styled.h1`
  font-family: "Anzeigen";

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    font-size: 2.8rem;
    word-wrap: break-word;
    line-height: 2.5rem;
  }
`;

const CustomSubHeader = styled.h2`
  font-family: "Poppins-Regular";
`;

const CustomInput = styled.input`
  /* border: 3px solid #592c33; */
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.3rem 0.3rem;
  outline: none;
  transition: all 0.1s;
  position: relative;
  &:focus {
    /* outline: 5px solid #ffffff83; */
  }
`;

const CustomLabel = styled.label`
  font-family: "Poppins-Regular";
  font-size: 1.2rem;
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
    <CustomContainer className="pt-20 ">
      <Toaster richColors={true} />
      <Link
        className="text-xl rounded-lg px-5 py-2 ml-20 mt-20  bg-gray-200 ease-in-out duration-100 transition-all hover:bg-gray-300 text-black md:ml-20 ml-3 mr-auto md:mr-0 w-fit"
        href={"/#plan-container"}
      >
        {"Volver a inicio"}
      </Link>
      <CustomHeader className=" text-center text-secondary text-7xl font-bold">
        PLAN SANITARIO
      </CustomHeader>
      <CustomSubHeader className=" text-center text-black">
        Una vez completado el formulario el plan sanitario será enviado a su
        dirección de correo electrónico.
      </CustomSubHeader>

      <div className=" w-5/6 lg:w-2/6 mx-auto pb-20">
        <form action="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col my-4">
            <CustomLabel className="text-black" htmlFor="form-name">
              Nombre
            </CustomLabel>
            <div className="border-4 border-secondary rounded-lg">
              <CustomInput
                className="bg-transparent text-black "
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
            <CustomLabel className="text-black" htmlFor="form-name">
              Apellido
            </CustomLabel>
            <div className="border-4 border-secondary rounded-lg">
              <CustomInput
                className="bg-transparent text-black "
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
            <CustomLabel className="text-black" htmlFor="form-name">
              Correo Electrónico
            </CustomLabel>
            <div className="border-4 border-secondary rounded-lg">
              <CustomInput
                className="bg-transparent text-black  "
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
            <CustomLabel className="text-black" htmlFor="form-name">
              Teléfono
            </CustomLabel>
            <div className="flex flex-row w-full mx-auto border-4 border-secondary rounded-lg">
              <FlagDropdown countries={countries} color={"black"} />

              <CustomInput
                className="bg-transparent text-black w-full ml-2"
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
          <div className="w-full flex flex-row justify-end">
            <button
              className="bg-secondary text-white font-bold py-2 px-4 rounded "
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
