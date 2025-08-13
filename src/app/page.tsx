import TopHeader from "@/components/sections/top-header";
import Header from "@/components/sections/header";
import Experience from "@/components/sections/experience";
import Productivity from "@/components/sections/productivity";
import ProductRange from "@/components/sections/product-range";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CustomDesign from "@/components/sections/custom-design";
import Footer from "@/components/sections/footer";
import FloatingEnquireButton from "@/components/floating-enquire-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <Header />
        <Experience />
        <Productivity />
        <ProductRange />
        <WhyChooseUs />
        <CustomDesign />
        <Footer />
      </main>
      <FloatingEnquireButton />
    </div>
  );
}
