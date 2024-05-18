"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Step 1: Add Image",
    description: "Upload an image to get started",
    url: "/upload",
  },
  {
    name: "Step 2: Customize Design",
    description: "Make your design unique with customizations",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your Design",
    url: "/preview",
  },
];

const Steps = () => {
  const pathName = usePathname();

  return (
    <ol className="rouded-md bg-white lg:flex lg:rounded-none lg:border-1 lg:border-r lg:border-gray-200">
      {STEPS.map((step, index) => {
        const isCurrentStep = pathName.endsWith(step.url);
        //is completed step
        return <li></li>;
      })}
    </ol>
  );
};

export default Steps;
