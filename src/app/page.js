import MainItems from "@/components/Main";
import Status from "@/components/status";
import WhyUs from "@/components/Why-chooseUs";
import Coaches from "@/components/Coaches";
import OurTrainers from "@/components/Trainers";
import PricingPlan from "@/components/PricingPlan";
import ReviewsSection from "@/components/Reviews";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <MainItems/>
      <Status/>
      <WhyUs/>
      <Coaches/>
      <OurTrainers/>
      <PricingPlan/>
      <ReviewsSection/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
