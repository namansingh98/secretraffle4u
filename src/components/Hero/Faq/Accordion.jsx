import React, { useState } from "react";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full flex items-center justify-center rounded-md">
      <div className="accordion-title w-9/12" onClick={() => setIsActive(!isActive)}>
        <div className="text-white heading flex flex-col border-2 border-[#CEB776] p-4 m-2 items-center rounded-md">
          <div className="flex items-center justify-between w-full">
          
            <span className="inline-flex"><GoDotFill size={25} color="#CEB776" />{title}</span>
            <div className="text-4xl icon">
              {isActive ? (
                <IoMdArrowDropup  className="w-8 h-8 " /> // CheckIcon for active state
              ) : (
                <IoMdArrowDropdown  className="w-8 h-8 " /> // XIcon for inactive state
              )}
            </div>
          </div>

          {isActive && (
            <div className="pl-6 accordion-content text-white w-full">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
