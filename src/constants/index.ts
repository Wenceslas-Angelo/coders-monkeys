import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";

export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Course",
    path: "/course",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const socialNetworks = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/angelo-wenceslas",
    icon: RxLinkedinLogo,
  },
  {
    name: "Github",
    path: "https://github.com/Wenceslas-Angelo",
    icon: RxGithubLogo,
  },
  {
    name: "Gmail",
    path: "wenceslasangelo@gmail.com",
    icon: SiGmail,
  },
];
