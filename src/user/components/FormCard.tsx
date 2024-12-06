import React from "react";
interface FormCardProps {
  title: string;
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg min-h-[calc(100vh-6rem)]">
        <h1 className="text-[#12496E] text-2xl md:text-3xl font-bold mb-6 md:mb-12">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
//

export default FormCard;
