import React, { useEffect, useState } from "react";
import {
  IconBriefcase2,
  IconCake,
  IconCalendar,
  IconId,
  IconMapPin,
  IconCode,
  IconMusic,
  IconBook,
  IconHistory,
  IconDeviceGamepad2,
  IconCar,
  IconCat,
  IconHeart,
  IconDownload,
} from "@tabler/icons-react";
import { TextEffect } from "./TextEffect";
import { AnimatedWrapper } from "./AnimatedWrapper";
import TypingAnimation from "@/components/magicui/typing-animation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ShimmerButton from "./magicui/shimmer-button";

export function PersonalDetails() {
  const profileData = {
    name: "Khen",
    description:
      "I am always eager to dive into new tech fields and learn along the way, I bring both enthusiasm and a creative mindset to every project. Let's build something amazing together!",
  };

  const details = {
    occupation: "Full-time Furparent!",
    location: "Your Location",
    birthday: "August 2, 2002",
  };

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge(details.birthday);

  const interests = [
    { icon: <IconCode className="mr-1" />, label: "Coding/Programming" },
    { icon: <IconMusic className="mr-1" />, label: "Music" },
    { icon: <IconHistory className="mr-1" />, label: "History" },
    { icon: <IconBook className="mr-1" />, label: "Books" },
    { icon: <IconDeviceGamepad2 className="mr-1" />, label: "Gaming" },
    { icon: <IconCar className="mr-1" />, label: "Driving" },
    { icon: <IconCat className="mr-1" />, label: "Cats" },
  ];

  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterestIndex((prevIndex) =>
        prevIndex === interests.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [interests.length]);

  return (
    <div className="p-6">
      <AnimatedWrapper animationType="fadeInUp">
        <div className="mb-8 text-zinc-500 text-justify">
          <TextEffect per="word">{profileData.description}</TextEffect>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex text-zinc-500 dark:text-zinc-400 mb-1">
          <IconId className="mr-1" />
          <span className="font-bold mr-2">Nickname: </span> {profileData.name}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex my-3 text-zinc-500 dark:text-zinc-500">
          <IconCake className="mr-1" />
          <span className="font-bold mr-2">Birthday:</span> {details.birthday}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex my-3 text-zinc-500 dark:text-zinc-500">
          <IconCalendar className="mr-1" />
          <span className="font-bold mr-2">Age:</span> {age} years old
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex my-3 text-zinc-500 dark:text-zinc-500">
          <IconBriefcase2 className="mr-1" />
          <span className="font-bold mr-2">Occupation:</span>
          {details.occupation}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex my-3 text-zinc-500 dark:text-zinc-500">
          <IconMapPin className="mr-1" />
          <span className="font-bold mr-2">Location: </span>
          {details.location}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <div className="flex my-3 text-zinc-500 dark:text-zinc-500">
          <IconHeart className="mr-1" />
          <span className="font-bold mr-2">Interest: </span>
          <div className="flex items-center">
            {interests[currentInterestIndex].icon}
            <TypingAnimation
              className="text-base font-normal text-zinc-500 dark:text-zinc-500"
              text={interests[currentInterestIndex].label}
            />
          </div>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper animationType="fadeInUp">
        <p className="text-zinc-500 flex">
          <IconDownload />
          <a
            href="/path-to-your-resume.pdf"
            download="Khen_Resume.pdf"
            className="text-zinc-500 font-bold hover:underline pl-1"
          >
            My Resume
          </a>
        </p>
      </AnimatedWrapper>

      {/* Contact Me Button with Dialog */}
      <AnimatedWrapper animationType="fadeInUp">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex min-h-[16rem] items-start mt-4">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                  Contact Me!
                </span>
              </ShimmerButton>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              Fill out the form below to send me an email.
            </DialogDescription>
            <form action="https://formspree.io/f/manwkoja" method="POST">
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Send
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </AnimatedWrapper>
    </div>
  );
}
