import { useContext } from "react";
import { GithubApiContext } from "../Context/GithubApiContext";
import { InputDataContext } from "../Context/InputDataContext";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsPeopleFill, BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router";

const GithubCard = () => {
  const { userData, contributionsCount } = useContext(GithubApiContext);
  const { themeColor, selectedEmoji } = useContext(InputDataContext);

  return (
    <article
      id="githubCard"
      className="w-full sm:max-w-md max-w-sm md:max-w-lg sm:mx-auto"
    >
      <div
        className="relative h-20 sm:h-24 rounded-t-2xl"
        style={{ backgroundColor: themeColor }}
      >
        <div className="absolute left-6 sm:translate-y-[42%] translate-y-[40%] md:translate-y-[36%] flex items-end justify-center gap-4 z-10">
          <img
            src={userData.avatar_url}
            alt="profile"
            className="md:w-22 sm:h-20 sm:w-20 h-18 shadow-sm md:h-22 w-18 object-cover rounded-xl border-2"
            style={{ borderColor: themeColor }}
          />
          <div className="text-font-secondary md:p-3 p-2 shadow-sm rounded-xl bg-white font-semibold md:text-lg">
            <p>@{userData.login}</p>
          </div>
          <div className="emoji md:p-2 flex items-center justify-center p-1.5 rounded-full text-xl bg-white font-semibold md:text-2xl">
            <p>{selectedEmoji}</p>
          </div>
        </div>
      </div>

      <div className="bg-secondary border-2 px-5 pt-8 md:pt-10 pb-3 border-main-border flex flex-col items-start gap-3 justify-center rounded-b-2xl h-fit">
        <div className="nameRepo w-full bg-main md:p-3 p-2 rounded-xl shadow-sm flex items-center justify-start gap-2">
          <p className="md:text-lg font-semibold">{userData.name}</p>
          <p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#EDEDED" />
            </svg>
          </p>
          <div className="repo text-font-secondary flex items-center justify-center gap-1">
            <RiGitRepositoryFill className="font-semibold text-lg" />
            <p>{userData.public_repos} Repositories</p>
          </div>
        </div>
        <div className="follow flex items-center justify-center gap-2">
          <div className="icon">
            <BsPeopleFill className="opacity-65" />
          </div>
          <div className="followers">
            <p>
              <span className="font-semibold">{userData.followers}</span>{" "}
              <span className="opacity-75">Followers</span>
            </p>
          </div>
          <div className="sperator">
            <p>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#dadada" />
              </svg>
            </p>
          </div>
          <div className="following">
            <p>
              {" "}
              <span className="font-semibold">{userData.following}</span>{" "}
              <span className="opacity-75">Following</span>
            </p>
          </div>
        </div>
        <div className="redirect flex items-center justify-between w-full text-sm opacity-70">
          <div className="repo flex items-center justify-center gap-1">
            <BsFillFileEarmarkCodeFill />
            <p>
              <span className="font-semibold">
                {contributionsCount.totalContributions}
              </span>{" "}
              Contributions
            </p>
          </div>
          <Link
            to={userData.html_url}
            className="profile flex items-center justify-center gap-1"
          >
            <p>Profile</p>
            <LuSquareArrowOutUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default GithubCard;
