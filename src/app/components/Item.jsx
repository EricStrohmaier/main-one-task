const { default: Link } = require("next/link");
import { MenuItem } from "react-pro-sidebar";

export const Item = ({ title, to, icon, selected, setSelected }) => {
  const isActive = selected === title;

  return (
    <MenuItem
      active={isActive}
      className={isActive ? "text-gray-700  " : "text-gray-400"}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link href={to}>
        <p>{title}</p>
      </Link>
    </MenuItem>
  );
};
