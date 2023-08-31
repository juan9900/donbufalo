"use client";
import styled from "@emotion/styled";

import planImg from "../public/img/IMAGEN-3.png";
import HeaderContainer from "@/components/HeaderContainer";
import UsContainer from "@/components/UsContainer";
import PlanContainer from "@/components/PlanContainer";
import CatalogContainer from "@/components/CatalogContainer";
import BookContainer from "@/components/BookContainer";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <UsContainer />
      <PlanContainer />
      <CatalogContainer />
      <BookContainer />
    </>
  );
}
