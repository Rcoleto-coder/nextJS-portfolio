import React from "react";

const ProjectTag = ({onClick, tagName, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-teal-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(tagName)}>
      {tagName}
    </button>
  );
};

export default ProjectTag;
