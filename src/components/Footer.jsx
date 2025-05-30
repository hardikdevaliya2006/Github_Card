import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="footer flex items-center justify-between text-black m-auto opacity-60 max-w-[99vw]">
      <div className="code">
        <Link
          className="flex items-center justify-center gap-1"
          to={`https://github.com/hardikdevaliya2006/Github_Card`}
        >
          <p>Source Code</p>
          <LuSquareArrowOutUpRight />
        </Link>
      </div>
      <div className="socialMedia flex items-center justify-center gap-1">
        <Link
          className="cursor-pointer flex items-center justify-center gap-1"
          to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
        >
          <p>Follow on : </p>
          <FaLinkedin className="text-[1.2rem]" />
        </Link>
        <Link
          className="cursor-pointer"
          to={`https://github.com/hardikdevaliya2006`}
        >
          <FaGithub className="text-[1.2rem]" />
        </Link>
        <Link
          className="cursor-pointer"
          to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
        >
          <FaInstagram className="text-[1.2rem]" />
        </Link>
        <Link
          className="cursor-pointer"
          to={`https://www.linkedin.com/in/hardik-devaliya-49a1722a3/`}
        >
          <FaFacebook className="text-[1.2rem]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
