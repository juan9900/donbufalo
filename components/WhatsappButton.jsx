import wsLogo from "/public/icons/WS.svg";
import Image from "next/image";
import styled from "@emotion/styled";
import * as pixel from "/app/lib/fpixel";

const ButtonText = styled.div`
  font-family: "Poppins-Regular";
  font-size: 1.2rem;
  text-align: center;
  padding: 0.5rem 0rem;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 70%;
  z-index: -1;
  transform: translateY(-50%);
  background: #f4f4f4;
  box-shadow: 0px 0px 10px #00000035;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const handleClick = () => {
  pixel.event(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, "btn-whatsapp-duda");
};

export default function WhatsappButton() {
  return (
    <div
      onClick={handleClick}
      className="fixed  bottom-20 lg:bottom-5 right-3 z-50 "
    >
      <a
        href="https://donbufalo.com/whatsapp-web"
        target="_blank"
        className="bg-green-500 rounded-full h-[4rem] w-[4rem] flex items-center justify-center relative"
      >
        <Image
          className="h-[3rem] w-[3rem] py-1 px-1"
          src={wsLogo}
          alt="Whatsapp logo"
        />
        <ButtonText className="text-black w-[15rem] mt-0">
          <p>¿Tienes una duda?</p>
        </ButtonText>
      </a>
    </div>
  );
}
