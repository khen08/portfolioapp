import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBook2,
  IconBrowser,
  IconTicket,
  IconCar,
  IconFileText,
  IconBrush,
  IconTicketOff,
} from "@tabler/icons-react";
import { SnapSection } from "./SnapSection";
import { AnimatedWrapper } from "./AnimatedWrapper";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MyProjects() {
  const githubLink = "https://github.com/khen08";
  const projects = [
    {
      title: "Nekopedia Mobile",
      description: "A mobile app for cat wikipedia.",
      repository: "nekopedia-mobile",
      header: (
        <Image
          src="/images/nekopedia-mobile.png"
          alt="Nekopedia Mobile"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconBook2 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Nekopedia Web",
      description: "A web platform for Neko enthusiasts.",
      repository: "nekopedia-web",
      header: (
        <Image
          src="/images/nekopedia-web.png"
          alt="Nekopedia Web"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconBrowser className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ticket App",
      description: "An app for managing support tickets.",
      repository: "ticketapp",
      header: (
        <Image
          src="/images/ticket-app.png"
          alt="Ticket App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Car Rental and LTO Form",
      description: "A system for car rentals and driver's license application.",
      repository: "car-rental-and-lto-form",
      header: (
        <Image
          src="/images/car-rental.png"
          alt="Car Rental and LTO Form"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconCar className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "DocTrack App",
      description: "A document tracking system.",
      repository: "doctrackapp",
      header: (
        <Image
          src="/images/doctrack-app.png"
          alt="DocTrack App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconFileText className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Inked Shell",
      description: "An e-commerce website for custom iPhone cases.",
      repository: "inkedshell",
      header: (
        <Image
          src="/images/inked-shell.png"
          alt="Inked Shell"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconBrush className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "NDC Ticket App",
      description: "A ticketing system for NDC IT Department.",
      repository: "ndcticketapp",
      header: (
        <Image
          src="/images/ndc-ticket-app.png"
          alt="NDC Ticket App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconTicketOff className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative bg-gray-50">
      <DotPattern
        className={cn(
          "absolute inset-0 z-0",
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
      <SnapSection>
        <div className="relative z-10">
          <AnimatedWrapper animationType="slideIn">
            <BentoGrid className="max-w-5xl mx-auto">
              {projects.map((project, i) => (
                <BentoGridItem
                  key={i}
                  title={project.title}
                  description={`${project.description}\n${githubLink}/${project.repository}`}
                  repositoryLink={`${githubLink}/${project.repository}`}
                  icon={project.icon}
                  header={project.header}
                  className={
                    i === 3 || i === 6
                      ? "md:col-span-2 bg-zinc-200"
                      : "bg-zinc-200"
                  }
                />
              ))}
            </BentoGrid>
          </AnimatedWrapper>
        </div>
      </SnapSection>
    </div>
  );
}
