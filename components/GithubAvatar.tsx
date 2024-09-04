import React, { useState, useEffect } from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { TextEffect } from "./TextEffect";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedWrapper } from "./AnimatedWrapper";

export function GithubAvatar() {
  const [profileData, setProfileData] = useState<{
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
  } | null>(null);
  const [stats, setStats] = useState({
    contributions: 0,
    publicRepos: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubUsername = "khen08";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        const query = `
          query {
            user(login: "${githubUsername}") {
              avatarUrl
              name
              login
              bio
              repositories(first: 100, privacy: PUBLIC) {
                totalCount
              }
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;

        const graphqlResponse = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!graphqlResponse.ok) {
          throw new Error(
            `Error fetching GitHub data: ${graphqlResponse.statusText}`
          );
        }

        const graphqlData = await graphqlResponse.json();
        const userData = graphqlData.data.user;

        setProfileData({
          avatar_url: userData.avatarUrl,
          name: userData.name,
          login: userData.login,
          bio: userData.bio,
        });

        setStats({
          contributions:
            userData.contributionsCollection.contributionCalendar
              .totalContributions,
          publicRepos: userData.repositories.totalCount,
        });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUsername]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-6">
      <AnimatedWrapper animationType="fadeInUp">
        <img
          src={profileData?.avatar_url || ""}
          alt={profileData?.name || "GitHub User"}
          className="h-48 w-full rounded-lg object-cover mb-4"
        />
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="text-zinc-500 dark:text-zinc-400 mb-1">
          <span className="font-bold">{profileData?.login}</span> |{" "}
          <a
            href={`https://github.com/${profileData?.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://github.com/{profileData?.login}
          </a>
        </p>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="mt-4 text-zinc-500">
          <span className="font-bold">Bio: </span>
          <TextEffect per="word">{profileData?.bio}</TextEffect>
        </p>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="my-2 text-zinc-500 dark:text-zinc-500">
          <span className="font-bold">Contributions: </span>
          <AnimatedNumber
            value={stats.contributions}
            className="inline-flex items-center font-mono text-xl font-light text-zinc-800 dark:text-zinc-50"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
          />
        </p>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="my-2 text-zinc-500">
          <span className="font-bold">Public Repositories: </span>
          <AnimatedNumber
            value={stats.publicRepos}
            className="inline-flex items-center font-mono text-xl font-light text-zinc-800 dark:text-zinc-50"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
          />
        </p>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="text-zinc-500 flex">
          <IconBrandLinkedin />:{" "}
          <a
            href={`https://www.linkedin.com/in/louiskhen-y/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline pl-1"
          >
            https://www.linkedin.com/in/louiskhen-y/
          </a>
        </p>
      </AnimatedWrapper>
    </div>
  );
}
