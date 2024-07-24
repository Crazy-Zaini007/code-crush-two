import SecondHeroImage from "../../assets/SecondHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png";
const HeroThree = () => {
  return (
    <div className="h-full w-full">
      <div className="flex md:flex-row flex-col">
        <div className="absolute top-20 -z-50  invisible md:visible">
          <img src={backgroundGlobe} alt="" className="w-[17rem] opacity-70" />
        </div>
        <div className="w-full md:w-1/2 pt-28 px-4  md:pt-52 md:ml-20 z-10">
          <h1 className="md:text-5xl text-2xl font-bold uppercase ">
            Innovative Software Development
          </h1>
          <p className="mt-6 text-lg">
            Delivering and scalable software solutions for your unique needs.
          </p>
        </div>
        <div className="w-full md:w-1/2   flex items-center justify-center md:mt-32 px-2 md:px-0 mt-4 ">
          <img
            src={SecondHeroImage}
            alt="hero image"
            className="w-56 md:w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
