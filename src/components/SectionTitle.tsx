import type { FC, ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, children }) => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">{title}</h2>
      {subtitle && <p className="text-text-light max-w-xl mx-auto px-4">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionTitle;
