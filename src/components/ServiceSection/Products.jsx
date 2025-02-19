import ArtificialIntelligence from "../../assets/ServicesSection/R&D/ArtificialIntelligence.webp";
import MachineLearning from "../../assets/ServicesSection/R&D/MachineLearning.webp";
import BlockchainTechnology from "../../assets/ServicesSection/R&D/BlockchainTechnology.webp";
import NaturalLanguageProcessing from "../../assets/ServicesSection/R&D/NaturalLanguageProcessing.webp";
import { NavLink } from "react-router-dom";
import { rAndDProjects } from "../../Content/ServiceContent";

const Products = () => {
  const updatedProducts = rAndDProjects.slice(0, 4).map((project, index) => {
    const images = [ArtificialIntelligence, MachineLearning, NaturalLanguageProcessing, BlockchainTechnology];
    return { ...project, image: images[index] };
  });
  return (
    <div className='w-full text-white gap-2 md:gap-5 grid grid-cols-1 md:grid-cols-2'>
      {updatedProducts.map((product, index) => (
        <div key={index} className='relative border border-gray-100 min-h-24'>
          <img src={product.image} alt={product.name} 
          className="w-full h-full object-cover"
          style={{ minHeight: "400px" }}
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center py-8 px-4 md:px-10 '>
            <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2'>{product.title}</h2>
            <p className='text-left md:pr-20 text-lg text-gray-300'>{product.description}</p>
            {/* <NavLink
            to={"/view-service/:1"}
             className="bg-white text-gray-700 mt-4 md:mt-10 w-28 md:w-32 md:text-lg text-sm px-4 py-1 rounded-full">Learn More</NavLink> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products