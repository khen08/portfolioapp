import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[13rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl max-h-screen px-5 mx-auto lg:auto-rows-[18rem] ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  repositoryLink,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  repositoryLink?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <a
      href={repositoryLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col lg:space-y-4`,
        className
      )}
    >
      {header}
      <div className="flex items-center lg:block group-hover/bento:translate-x-2 transition duration-200">
        <div className="hidden lg:block">{icon}</div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="hidden xl:block font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 whitespace-pre-wrap">
          {description}
        </div>
      </div>
    </a>
  );
};
