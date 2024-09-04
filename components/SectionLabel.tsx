"use client";
import React from "react";
import { GithubAvatar } from "./GithubAvatar";
import { PersonalDetails } from "./PersonalDetails";

interface Sections {
  title: string;
  content: React.ReactNode;
}

export const SectionLabel = ({ data }: { data: Sections[] }) => {
  return (
    <div className="dark:bg-neutral-950 font-sans">
      <div className="relative space-y-8 lg:space-y-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col flex-grow  lg:flex-row lg:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="flex flex-col">
                <div className="hidden lg:flex h-10 w-10 absolute left-3 lg:left-3 rounded-full bg-white dark:bg-black items-center justify-center">
                  <div className="hidden lg:block h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-4xl font-bold text-neutral-500 dark:text-neutral-500 mb-8">
                  {item.title}
                </h3>
                {index === 0 && <PersonalDetails />}
                {index === 2 && <GithubAvatar />}
              </div>
            </div>
            <div className="relative w-full mt-4 lg:mt-0">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
