import { createContext, useEffect, useState } from "react";
import githubApi from "../api/githubApi";
import contributions from "../api/contributions";

export const GithubApiContext = createContext();

export const GithubApiProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [contributionsCount, setContributionsCount] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username) => {
    setUserDataLoading(true);
    setError("");
    try {
      const res = await githubApi.get(`/users/${username}`);
      setUserData(res.data);
    } catch (error) {
      console.error(error);
      setUserData({});
      setError(
        "bad request (may be username incorrect or API rate limit exceeded)"
      );
    } finally {
      setUserDataLoading(false);
    }
  };

  const fetchUserContributions = async (username) => {
    setUserDataLoading(true);
    try {
      const res = await contributions.get(`${username}.json`);
      setContributionsCount(res.data);
    } catch (error) {
      console.log(error);
      setUserData({});
    } finally {
      setUserDataLoading(false);
    }
  };

  return (
    <GithubApiContext.Provider
      value={{
        fetchUserData,
        fetchUserContributions,
        userData,
        userDataLoading,
        contributionsCount,
        error,
      }}
    >
      {children}
    </GithubApiContext.Provider>
  );
};
