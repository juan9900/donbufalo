"use client";
import styled from "@emotion/styled";

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
