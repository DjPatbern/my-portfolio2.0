import slide1 from "@/public/images/slide1.jpg";
import slide2 from "@/public/images/slide2.jpg";
import slide3 from "@/public/images/slide3.jpg";
import slide4 from "@/public/images/slide4.jpg";
import slide5 from "@/public/images/slide5.jpg";
import slide6 from "@/public/images/slide6.jpg";
import trendstack from "@/public/images/trendstack.png";
import altschool from "@/public/images/altschool.png";
import rocketdevs from "@/public/images/rocketDevs.jpeg";
import byuIdaho from "@/public/images/byuidaho.png";
import byupathway from "@/public/images/byupathway.png";
import byucert from "@/public/images/byuset.jpg";
import altcert from "@/public/images/altset.jpg";
import hackercert from "@/public/images/hackerset.jpg";
import mvend from "@/public/images/mvend.jpg";
import facebook from "@/public/icons/facebook.jpeg";
import x from "@/public/icons/x.webp";
import linkedIn from "@/public/icons/linkedin.webp";
import address from "@/public/icons/address.png";
import mail from "@/public/icons/mail.png";
import github from "@/public/icons/github.webp";
import whatsapp from "@/public/icons/whatsapp.webp";
import tel from "@/public/icons/tel.webp";
import bootstrap from "@/public/icons/bootstrap.png";
import css from "@/public/icons/css.png";
import express from "@/public/icons/express.webp";
import firebase from "@/public/icons/firebase.png";
import git from "@/public/icons/git.png";
import html from "@/public/icons/html.webp";
import js from "@/public/icons/js.webp";
import mongos from "@/public/icons/MongoDB.png";
import netlify from "@/public/icons/netlify.png";
import next from "@/public/icons/next.jpeg";
import node from "@/public/icons/node.png";
import postman from "@/public/icons/postman.png";
import python from "@/public/icons/python.webp";
import react from "@/public/icons/react.webp";
import sass from "@/public/icons/sass.webp";
import swagger from "@/public/icons/swager.jpeg";
import tailwind from "@/public/icons/tailwind.png";
import ts from "@/public/icons/ts.svg";
import vercel from "@/public/icons/vercel.svg";
import vue from "@/public/icons/vue.jpg";

export const projects = [
  {
    url: "https://staging.gettrendstack.com/",
    img: slide1,
    title: "Trendstack",
    stacks: "NextJs ▪ TailwindCss ▪ TypeScript ▪ ReactQuery",
    year: "2023 - Present",
    description:
      "This is an application that connect companies to brand influencers on TikTok, it pays influencers to advertise products and services of funded campaigns from companies",
  },
  {
    url: "https://theparkdb.vercel.app/",
    img: slide2,
    title: "The Park DB",
    stacks: "NextJs ▪ TailwindCss ▪ TypeScript ▪ ReactQuery",
    year: "2024",
    code: "https://github.com/DjPatbern/tpdb",
    description:
      "This is an application that houses the database of amusment parks around the world, it shows the users the name, location, price, founded year and map direction of these parks",
  },
  {
    url: "https://clone-a92f6.web.app/",
    img: slide3,
    title: "YouTube Clone",
    stacks: "ReactJS ▪ SCSS ▪ JavaScript ▪ Redux ▪ Youtube API",
    year: "2023",
    code: "https://github.com/DjPatbern/youtube-clone",
    description:
      "This application is a perfcet replication of Youtube, Users can login with their google account and access real life YouTube with this clone YouTube app of mine",
  },
  {
    url: "https://blog-app-6ea90.web.app/?",
    img: slide4,
    title: "Techie Meet",
    stacks: "ReactJS ▪ CSS ▪ JavaScript ▪ Firebase",
    year: "2022",
    code: "https://github.com/DjPatbern/Techie-Meet-App",
    description:
      "This is a social media application for Techies across the globe, users can login with email and password, make posts including images, read, like and comment on other techie's post etc",
  },
  {
    url: "http://cay-point-app-adea.vercel.app/",
    img: slide5,
    title: "Cay Point",
    stacks: "NextJs ▪ TailwindCss ▪ TypeScript ▪ ReactQuery ▪ Firebase",
    year: "2023",
    code: "https://github.com/DjPatbern/cay-point-app",
    description:
      "This is a web application that help users locate hospitals, clinics and gym houses across Nigeria. Accepts google account authentication, search for hospitality firms according to their names, state, city,type and can have access to contact informations of each hospitality firm.",
  },
  {
    url: "https://crowdfundco.vercel.app/",
    img: slide6,
    title: "Vines Computers",
    stacks: "NextJs ▪ TailwindCss ▪ TypeScript ▪ ReactQuery",
    year: "2024",
    code: "https://github.com/DjPatbern/crowdfundco",
    description:
      "This is the website of Vines Computers, a computer sales firm in Nigeria. This website contains the contact details and every other vital details potential costumers need from Vine Computers",
  },
];

export const jobs = [
  {
    name: "Trendstack",
    role: "Frontend Developer",
    type: "Full Time",
    year: "2023 - Present",
    img: trendstack,
    site: "https://gettrendstack.com/",
    location: "Nigeria(Remote)",
  },
  {
    name: "RocketDevs",
    role: "Frontend Engineer",
    type: "Freelancer",
    year: "2024 - Present",
    img: rocketdevs,
    site: "https://rocketdevs.com/",
    location: "Egypt(Remote)",
  },
  {
    name: "Altschool Africa",
    role: "Student Mentor",
    type: "Volunteer",
    year: "2023",
    img: altschool,
    site: "https://altschoolafrica.com/",
    location: "Nigeria(Remote)",
  },
  {
    name: "Mvend",
    role: "Frontend Developer",
    type: "Intern",
    year: "2023",
    img: mvend,
    site: "https://www.mvend.co.rw/",
    location: "Rwanda(Remote)",
  },
];
export const links = [
  {
    name: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    name: "PROJECTS",
    href: "/projects",
  },
  {
    name: "JOBS",
    href: "/jobs",
  },
  {
    name: "EDUCATION",
    href: "/education",
  },
];

export const stacks = [
  "Hey Champ!!!",
  1000,
  "My name is Victor Patrick",
  1000,
  "And I am a Frontend Engineer",
  1000,
  "Welcome to my Portfolio site",
  1000,
];

export const socialIcons = [
  {
    img: facebook,
    url: "https://web.facebook.com/victor.bernard.370",
  },
  {
    img: github,
    url: "https://github.com/DjPatbern/",
  },
  {
    img: x,
    url: "https://twitter.com/DLinkup",
  },
  {
    img: linkedIn,
    url: "https://www.linkedin.com/in/victor-patrick-740458229/",
  },
  {
    img: whatsapp,
    url: "https://wa.link/mdvk6o",
  },
  {
    img: mail,
    url: "mailto:victorbernardpatrick@example.com",
  },
];

export const contactIcon = [
  {
    img: mail,
    text: "victorbernardpatrick@gmail.com",
  },
  {
    img: tel,
    text: "+234-904-2564-049",
  },
  {
    img: address,
    text: "Lagos, Nigeria",
  },
];

export const skills = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: js,
    name: "JavaScript",
  },
  {
    img: ts,
    name: "TypeScript",
  },
  {
    img: react,
    name: "ReactJS",
  },
  {
    img: next,
    name: "NextJs",
  },
  {
    img: tailwind,
    name: "Tailwind CSS",
  },
  {
    img: bootstrap,
    name: "Bootstrap",
  },
  {
    img: sass,
    name: "Sass/SCSS",
  },
  {
    img: node,
    name: "NodeJs",
  },
  {
    img: express,
    name: "ExpressJS",
  },
  {
    img: mongos,
    name: "MongoDB",
  },
  {
    img: firebase,
    name: "Firebase",
  },
  {
    img: vue,
    name: "VueJS",
  },
  {
    img: python,
    name: "Python",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: github,
    name: "GitHub",
  },
  {
    img: vercel,
    name: "Vercel",
  },
  {
    img: netlify,
    name: "Netlify",
  },
  {
    img: postman,
    name: "Postman",
  },
  {
    img: swagger,
    name: "Swagger",
  },
];

export const certificates = [
  {
    img: altcert,
    issueDate: "June 2023",
    name: "Certified Frontend Engineer",
    issueSchool: "Altschool Africa",
    credentialId: "REF-GLab4LL0gyNLPdadjx",
  },
  {
    img: byucert,
    issueDate: "Mar 2024",
    name: "Certified Python Programmer",
    issueSchool: "BYU-Pathway",
  },
  {
    img: hackercert,
    issueDate: "December 2022",
    name: "Certified ReactJS Developer",
    issueSchool: "HackerRank",
    credentialId: "5F37DD51CD22",
  },
];


export const education = [
  {
    img: byuIdaho,
    date: "April 2024 - April 2027",
    school: "BYU-Idaho",
    location: "U.S.A",
    type: "Bachelor's Degree",
    major: "Software Development"
  },
  {
    img: altschool,
    date: "April 2022 - June 2023",
    school: "Altschool Africa",
    location: "Nigeria",
    type: "Diploma",
    major: "Software Engineering(Front-End)"
  },
  {
    img: byupathway,
    date: "September 2023 - March 2024",
    school: "BYU-Pathway",
    location: "U.S.A",
    type: "Certificate",
    major: "Programming With Python"
  },
];