import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const TeamMemberCard = ({ links, status, image, name, role }) => {
  return (
    <div className="border shadow-xl pb-4 rounded-xl hover:scale-105 transition-all cursor-pointer">
      <div className="w-full ">
        <img
          src={image}
          alt="portrait"
          className="h-[15rem] w-[15rem] rounded-full mx-auto "
        />
      </div>
      <div className="mt-4 text-gray-700 px-4">
        <div className="flex justify-between mb-1">
          <h1 className="text-xl font-bold">{name}</h1>
          <a
            href={links}
            target="_blank"
            className="text-gray-600 hover:text-gray-400"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p>
          <i>
            <span className="">{status}</span> & {role}
          </i>
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
