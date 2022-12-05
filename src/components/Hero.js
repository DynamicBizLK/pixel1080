import Image from "next/image";
import Navbar from "./Navbar";
import bgImg from "../../public/bg.jpg";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <div>
        <Image src={bgImg} className="h-screen object-cover" />
        <div className="absolute bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 " />
      </div>
      <Navbar />

      <div className="container max-w-5xl h-5/6 flex items-center justify-center absolute left-0 right-0 top-1/2 -translate-y-1/3">
        <div className="text-center">
          <h1 className="text-8xl md:text-7xl sm:text-6xl font-bold">
            Welcome to
            <br />
            PIXEL1080
          </h1>
          {/* <p className="text-orange-400 leading-none">By DynamicBiz</p> */}

          <p className="max-w-intro mx-auto text-lg sm:text-base sm:mt-4">
            We are specialized in digital art, photography, and graphic design, motivated by the goal to give cherished customers fantastic outcomes.
          </p>
          <button className="mt-4 sm:mt-6 py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-lg sm:text-base font-medium rounded-md">View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
