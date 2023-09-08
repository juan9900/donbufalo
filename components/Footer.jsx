"use client";
import styled from "@emotion/styled";
import igLogo from "/public/icons/INSTAGRAM.svg";
import fbLogo from "/public/icons/FACEBOOK.svg";
import tkLogo from "/public/icons/TIKTOK.svg";
import ytLogo from "/public/icons/YOUTUBE.svg";
import wsLogo2 from "/public/icons/WS2.svg";
import wsLogo3 from "/public/icons/WS3.svg";
import Image from "next/image";

const CustomFooter = styled.div`
  padding: 2rem 1rem 1rem 1rem;
`;

const SocialLogo = styled(Image)`
  /* width: 3%; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Footer() {
  return (
    <CustomFooter className="flex flex-col bg-darkBackground">
      <div className="flex flex-row justify-center md:w-2/5 mx-auto ">
        <a
          className="flex-1 mx-5 flex justify-center "
          href="https://www.instagram.com/donbufalo/?hl=en"
          target="_blank"
        >
          <SocialLogo className="" src={wsLogo2} alt="Instagram logo" />
        </a>
        <a
          className="flex-1 mx-5 flex justify-center"
          href="https://www.instagram.com/donbufalo/?hl=en"
          target="_blank"
        >
          <SocialLogo src={igLogo} alt="Instagram logo" />
        </a>
        <a
          className="flex-1 mx-5 flex justify-center"
          href="https://www.facebook.com/don.bufalo/"
          target="_blank"
        >
          <SocialLogo src={fbLogo} alt="Facebook logo" />
        </a>
        <a
          className="flex-1 mx-5 flex justify-center"
          href="https://www.youtube.com/@donbufalo"
          target="_blank"
        >
          <SocialLogo src={ytLogo} alt="Youtube Don Búfalo logo" />
        </a>
        <a
          className="flex-1 mx-5 flex justify-center"
          href="https://www.tiktok.com/@donbufalos"
          target="_blank"
        >
          <SocialLogo src={tkLogo} alt="Tiktok Don Búfalo logo" />
        </a>
      </div>
      <p className="text-foreground text-center mt-5 3xl:text-2xl 3xl:mt-10">
        Desarrollado por{" "}
        <a
          target="_blank"
          className="underline underline-offset-2"
          href="https://mdnpublicidad.com"
        >
          MDN PUBLICIDAD
        </a>
      </p>
    </CustomFooter>
  );
}
