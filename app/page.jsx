"use client";
import HeaderContainer from "@/components/HeaderContainer";
import UsContainer from "@/components/UsContainer";
import PlanContainer from "@/components/PlanContainer";
import CatalogContainer from "@/components/CatalogContainer";
import BookContainer from "@/components/BookContainer";
import TestimonialsContainer from "@/components/TestimonialsContainer";
import FormContainer from "@/components/FormContainer";

export default function Home() {
  return (
    <>
      {/* <button onClick={makeApiCall}>Make api call</button> */}
      <HeaderContainer />
      <UsContainer />
      <PlanContainer />
      <CatalogContainer />
      <BookContainer />
      <TestimonialsContainer />
      <FormContainer />
    </>
  );
}
