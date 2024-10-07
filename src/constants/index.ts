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

export const featuredList = [
  {
    title: "Training",
    img: "/svg/training.svg",
    description:
      "Level up your skills with hands-on training, because at Coders Monkeys, we believe the best way to learn is by doing!",
  },
  {
    title: "Relation",
    img: "/svg/collaboration.svg",
    description:
      "Build real connections with fellow coders, because at Coders Monkeys, coding is better when you’ve got a squad by your side.",
  },
  {
    title: "Inspiration",
    img: "/svg/inspiration.svg",
    description:
      "Fuel your creativity by exploring what others are building. At Coders Monkeys, inspiration is just a project away",
  },
  {
    title: "Collaboration",
    img: "/svg/relation.svg",
    description:
      "Team up with other coders to build bigger and better projects. At Coders Monkeys, coding is a team sport!",
  },
];
