import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Our Impact",
      description:
        "Empowering individuals and businesses to achieve financial success through innovative solutions and tools.",
      icon: <IconTerminal2 className="text-neutral-100" />,
    },
    {
      title: "Empowering Communities",
      description:
        "Over 10,000 individuals from underserved communities have gained access to financial education through FinLitAid.",
      icon: <IconEaseInOut className="text-neutral-100" />,
    },
    {
      title: "Driving Financial Independence",
      description:
        "Thousands of users have successfully created budgets, started SIPs, and avoided financial pitfalls.",
      icon: <IconCurrencyDollar className="text-neutral-100" />,
    },
    {
      title: "Fostering Inclusion",
      description: "Bridging the gap for multilingual users who previously lacked access to financial guidance.",
      icon: <IconCloud className="text-neutral-100" />,
    },
    {
      title: "Why Choose FinLitAid?",
      description: "Experience a personalized journey toward financial literacy and growth, with features designed just for you.",
      icon: <IconHelp className="text-neutral-100" />,
    },
    {
      title: "Inclusive by Design",
      description:
        "Built for everyone, especially those who need it the most.",
      icon: <IconRouteAltLeft className="text-neutral-100" />,
    },
    {
      title: "Easy to Use",
      description:
        "Simplified tools and resources that work for beginners and experts alike.",
      icon: <IconAdjustmentsBolt className="text-neutral-100" />,
    },
    {
      title: "Expert Guidance",
      description: "Insights crafted by financial experts and delivered with AI precision.",
      icon: <IconHeart className="text-neutral-100" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto bg-black">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;