import aboutUs from "../assets/aboutUs.webp";
import habibImage from "../assets/aboutUs/ceoImage.svg";
import LineEffect from "../components/Buttons/LineEffect";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/aboutUs/companyLogo.svg"
import mission from "../assets/aboutUs/missionLogo.svg"
import objective from "../assets/aboutUs/objectiveLogo.svg"
import whycodecrush from "../assets/aboutUs/whycodecrush.svg"
const AboutUs = () => {
  return (
    <div className="py-1 bg-gray-100">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${aboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">
            About Us
          </h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        CEO Message
      </h1>
      <LineEffect />
      <div className="mb-14 mt-10 px-4 md:px-0">
        <div className="w-[90%] md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto ">
          <div className="w-full flex md:flex-row flex-col gap-x-10  text-justify">
            <div className="w-full md:w-[30%] ">
              <img
                src={habibImage}
                alt="CEO-Image"
                className="w-72 "
              />
            </div>
            <div className="w-full mt-5 md:mt-0 md:w-[70%]">
              <h4 className="text-xl font-semibold mb-2">
                CEO Code Crush Technologies
              </h4>
              <p className="text-black mt-2 text-lg">
                Firstly, I am proud to be the founder CEO of Code Crush
                Technologies, the ever-evolving software industry in Pakistan. I
                am also proud of our resilience, expertise and professional
                team. Our focus on cutting-edge technologies, customer-centric
                solutions, novel business ideas, qualitative products and
                sustainable practices will grow up our company. Our uniqueness
                is to commercialize young ideas and innovative e-commerce
                projects along with academics and intelligent domains.
                Innovation is at the heart of everything we focus on. We are not
                just developing software but shaping the future of industries,
                technologies and business sections according to the up-to-date
                market with the help of research and development industrial and
                academic board members. The future is bright, and I am excited
                to see where our collective efforts will take us. Thank you for
                your continued support, hard work, dedication, and passion for
                excellence.
              </p>
              <div className="flex gap-2 mt-4 md:mt-8 items-center">
                <h4 className="text-xl">
                  Dr. Habib Shah (PhD IT, Gold Medalist)
                </h4>
                <a
                  href={"https://www.linkedin.com/in/drhabibshah/"}
                  target="_blank"
                  className="text-gray-600 hover:text-gray-400"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex my-4 md:my-10 md:mt-20 flex-col-reverse md:flex-row gap-x-8 ">
            <div className="w-full md:w-[50%]">
              <p className="text-lg text-justify  text-black mb-2">
                With our dynamic and professional development team and their
                high quality services, the excellent soft solution can be
                provided based on the cutting-edge computing tools and methods
                for maintaining and improving your local and international
                business.The code crush team will also assist you to validate
                your idea and provide the business-oriented solutions that align
                with your company needs, reflect the core values of your brand
                and attract the customers. The codecrush are very professional,
                cooperative and have expertise in different domains such as
                digital marketing, website development, Artificial Intelligence
                based projects, smart apps and other services which are required
                to your company&apos;s needs.
              </p>
            </div>
            <div className="w-full md:-mt-10 flex  justify-center my-4 md:my-0 md:w-[50%]">
              <img src={whycodecrush} alt="whycodecrush"  className="w-72"/>
            </div>
          </div>
          <div className="flex my-8 md:my-10  flex-col md:flex-row gap-x-12">
            <div className=" w-full md:w-[30%] text-5xl text-black  font-semibold">
              <img src={logo} alt="logo" className="w-72" />
            </div>

            <div className="flex w-full mt-4 md:mt-0 md:w-[70%] items-center justify-center ">
              <p className="text-black text-lg text-justify">
                Code Crush Technologies provides innovative software solutions
                through sophisticated, Reliable and Secure technological tools
                for individuals, businesses, and communities, aiming to drive
                efficiency, profit, and growth through an expert team and
                commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
          <div className="flex my-8 md:my-10 gap-y-8 md:gap-y-0 flex-col md:flex-row gap-x-12">
            <div className="w-full md:w-[70%] flex items-center justify-center">
              <p className="text-black text-lg mt-4 text-justify">
                Our mission is to develop innovative Ideas and maintain their
                highest quality standards and best practices in the current
                Digital Marketplace.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center ">
              <img
                src={mission}
                alt="ceo-image"
                className="w-full md:w-72 max-h-72 "
              />
            </div>
          </div>
          <div className="flex my-8 md:my-10  flex-col md:flex-row gap-x-12">
            <div className="w-full md:w-[30%]">
            <img
                src={objective}
                alt="ceo-image"
                className="w-full md:w-72 max-h-72 "
              />
            </div>
            <div className="w-full md:w-[70%] mt-4 md:mt-8   flex justify-center ">
              <ul className="list-disc text-justify  text-lg">
                <li className="text-black ">
                  To provide fast solutions to our customers using emerging
                  technologies tools.
                </li>
                <li className="text-black">
                  To continuously improve the developed models based on customer
                  satisfactions.
                </li>
                <li className="text-black ">
                  To train the interested students in the field of IT and their
                  Solutions.
                </li>
                <li className="text-black ">
                  To share innovative ideas, solutions, and business models with
                  interested investors.
                </li>
                <li className="text-black ">
                  To establish strong communication and collaboration with local
                  and business industries.
                </li>
                <li className="text-black">
                  To support the government and private organizations in the
                  digital transformation process.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
