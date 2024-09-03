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

export function MyProjects() {
  const githubLink = "https://github.com/khen08";
  const projects = [
    {
      title: "Nekopedia Mobile",
      description: "A mobile app for managing Neko-related content.",
      repository: "nekopedia-mobile",
      header: (
        <img
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
        <img
          src="/images/nekopedia-web.png"
          alt="Nekopedia Web"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconBrowser className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ticket App",
      description: "An app for managing event tickets.",
      repository: "ticketapp",
      header: (
        <img
          src="/images/ticket-app.png"
          alt="Ticket App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Car Rental and LTO Form",
      description: "A system for car rentals and LTO forms.",
      repository: "car-rental-and-lto-form",
      header: (
        <img
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
        <img
          src="/images/doctrack-app.png"
          alt="DocTrack App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconFileText className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Inked Shell",
      description: "A creative platform for digital artists.",
      repository: "inkedshell",
      header: (
        <img
          src="/images/inked-shell.png"
          alt="Inked Shell"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconBrush className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "NDC Ticket App",
      description: "A ticketing system for managing events.",
      repository: "ndcticketapp",
      header: (
        <img
          src="/images/ndc-ticket-app.png"
          alt="NDC Ticket App"
          className="flex flex-1 object-cover w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ),
      icon: <IconTicketOff className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      <SnapSection>
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
                i === 3 || i === 6 ? "md:col-span-2 bg-zinc-200" : "bg-zinc-200"
              }
            />
          ))}
        </BentoGrid>
      </SnapSection>
    </div>
  );
}
