import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import MockPackages from "@/components/sections/MockPackages";
import WhyChoose from "@/components/sections/WhyChoose";
import InstructorIntro from "@/components/sections/InstructorIntro";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <FeaturedCourses />
      <MockPackages />
      <WhyChoose />
      <InstructorIntro />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
