import FirstHeroImage from "../../assets/FirstHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png"
const HeroTwo = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <div className="absolute top-20 -z-50">
          <img src={backgroundGlobe} alt="" className="w-[20rem] opacity-70" />
        </div>
        <div className="w-1/2 pt-52 ml-20 z-10">
          <h1 className="text-5xl font-bold uppercase  ">
            Empowering Your Business with Innovative Software Solutions
          </h1>
          <p className="mt-6 text-lg">
            Leverage CodeCrushTech&rsquo;s Expertise to Drive Digital
            Transformation
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center mt-32 ">
          <img src={FirstHeroImage} alt="hero image" className="w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
