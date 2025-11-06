import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul className="m-0">
        {menu_data.map((menu_item, i) => (
          <li key={i}>
            <Link href={menu_item.link}>{menu_item.title}</Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <Link href={sub_menu.link}>{sub_menu.title}</Link>
                    <span className="badge">{sub_menu.badge}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
