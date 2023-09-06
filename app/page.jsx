"use client";
import HeaderSection from "@/sections/index/HeaderSection";
import UsSection from "@/sections/index/UsSection";
import PlanSection from "@/sections/index/PlanSection";
import CatalogSection from "@/sections/index/CatalogSection";
import BookSection from "@/sections/index/BookSection";
import TestimonialsSection from "@/sections/index/TestimonialsSection";
import FormSection from "@/sections/index/FormSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <WhatsappButton />
      <HeaderSection />
      <UsSection />
      <PlanSection />
      <CatalogSection />
      <BookSection />
      <TestimonialsSection />
      <FormSection />
      <Footer />
    </>
  );
}
