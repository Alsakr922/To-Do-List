import React from "react";

// type ButtonProps = {
//   type: 'button' | 'submit';
//   title: string;
//   icon?: string;
//   theme: string;
//   full?: boolean;
//   id?: string;
//   onclick?: any;
//   classes?: string;
// }

const Button = ({ type, title, icon, theme, full ,id ,onclick ,classes }) => {
  return (
    <button id={id} onClick={onclick} 
    className={`flexCenter gap-3 rounded-full border ${classes} ${theme} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button