"use client";
import styled from "@emotion/styled";
import igLogo from "/public/icons/INSTAGRAM.svg";
import fbLogo from "/public/icons/FACEBOOK.svg";
import tkLogo from "/public/icons/TIKTOK.svg";
import ytLogo from "/public/icons/YOUTUBE.svg";
import Image from "next/image";

const CustomFooter = styled.div`
  padding: 2rem 1rem;
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
      <div className="flex flex-row justify-center w-5/5 ">
        <a
          className="mx-5"
          href="https://www.instagram.com/donbufalo/?hl=en"
          target="_blank"
        >
          <SocialLogo src={igLogo} alt="Instagram logo" />
        </a>
        <a
          className="mx-5"
          href="https://www.facebook.com/don.bufalo/"
          target="_blank"
        >
          <SocialLogo src={fbLogo} alt="Facebook logo" />
        </a>
        <a
          className="mx-5"
          href="https://www.youtube.com/@donbufalo"
          target="_blank"
        >
          <SocialLogo src={ytLogo} alt="Youtube Don Búfalo logo" />
        </a>
        <a
          className="mx-5"
          href="https://www.tiktok.com/@donbufalos"
          target="_blank"
        >
          <SocialLogo src={tkLogo} alt="Tiktok Don Búfalo logo" />
        </a>
      </div>
    </CustomFooter>
  );
}
