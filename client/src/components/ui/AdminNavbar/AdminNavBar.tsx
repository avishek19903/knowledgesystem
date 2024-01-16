import React from "react";
import { useState } from "react";
import { Group, Code } from "@mantine/core";
import { IconUserScan, IconUserDollar, IconLogout, IconMailForward } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./NavbarSimple.module.css";
import { NavLink } from "react-router-dom";

const data = [
  { link: "/dashboard/admin/staffs", label: "Staffs", icon: IconUserScan },
  { link: "/dashboard/admin/clients", label: "Clients", icon: IconUserDollar },
  { link: "/dashboard/admin/createemail", label: "Create Email", icon: IconMailForward },
];

export default function NavbarSimple() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}