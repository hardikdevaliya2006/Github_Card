import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GithubApiContext } from "../Context/GithubApiContext";
import GithubCard from "./GithubCard";
import RedirectURL from "./RedirectURL";
import Footer from "./Footer";

const Card = () => {
  const { user } = useParams();
  const { fetchUserData, fetchUserContributions, userDataLoading, error } =
    useContext(GithubApiContext);

  useEffect(() => {
    fetchUserData(user);
    fetchUserContributions(user);
  }, [user]);

  if (userDataLoading) return <p className="bg-black text-white">Loading...</p>;

  if (error) {
    return (
      <div className="bg-black text-white">
        <p className="font-mono">{error}</p>
      </div>
    );
  }

  return (
    <>
      <main className="centerContainer justify-center">
        <div className="mainContant gap-4 h-[97vh] w-full flex items-center flex-col justify-center">
          <GithubCard></GithubCard>
          <RedirectURL></RedirectURL>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Card;
