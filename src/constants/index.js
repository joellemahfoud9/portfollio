import photo01 from "/projects/Admin-Dashboard/Overviewpage.jpg";
import photo02 from "/projects/Admin-Dashboard/productpage.jpg";
import photo03 from "/projects/Admin-Dashboard/userpage.jpg";
import photo04 from "/projects/Admin-Dashboard/orderpage.jpg";
import photo05 from "/projects/Admin-Dashboard/Createproductpage.jpg";
import photo06 from "/projects/Admin-Dashboard/createuserpage.jpg";
import photo07 from "/projects/Admin-Dashboard/settingspage.jpg";

import photo11 from "/projects/Portfollio/Hero.jpg";
import photo12 from "/projects/Portfollio/nav.jpg";
import photo13 from "/projects/Portfollio/studycase.jpg";
import photo14 from "/projects/Portfollio/projects.jpg";
import photo15 from "/projects/Portfollio/contant.jpg";

import photo16 from "/projects/ecommere/Banner1.jpg";
import photo17 from "/projects/ecommere/banner2.jpg";
import photo18 from "/projects/ecommere/banner3.jpg";
import photo19 from "/projects/ecommere/newarrivals.jpg";
import photo20 from "/projects/ecommere/newarrivals2.jpg";
import photo21 from "/projects/ecommere/specailoffer.jpg";
import photo22 from "/projects/ecommere/footer.jpg";
import photo23 from "/projects/ecommere/footer2.jpg";
import photo24 from "/projects/ecommere/about.jpg";
import photo25 from "/projects/ecommere/content1.jpg";
import photo26 from "/projects/ecommere/contant2.jpg";

export const HERO_CONTENT = `I’m fourth year Information Technology student at Damascus University. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel, MySQL. With 1 years of hands-on experience  .`;

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+963-984199366 ",
  email: "joellemahfoud99@gmail.com",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Admin_Dashboard",
    githubLink: "https://github.com/joellemahfoud9/Admin-Dahboard",
    description: " Admin-Dashbord website .",
    photos: [photo01, photo02, photo03, photo04, photo05, photo06, photo07],
    photoDescriptions: [
      "This is the first page, Overview Page.",
      "This page show all the products.",
      "This page show all the users.",
      "This page show all the orders.",
      "In this page you can create a new product.",
      "In this page you can add a new user.",
      "This a settings page to show your information.",
    ],
  },
  {
    id: 2,
    name: "Portfollio ",
    githubLink: "https://github.com/joellemahfoud9/portfolio",
    description: "Portfollio Website .",
    photos: [photo11, photo12, photo13, photo14, photo15],
    photoDescriptions: [
      "This is the first section in the portfollio.",
      "This is the navbar",
      "This is studycase section .",
      "This is  projects section you can show all my projects.",
      "This is contant section ",
    ],
  },
  {
    id: 3,
    name: "E-commerce Website ",
    githubLink: "",
    description: "In Process.",
    photos: [photo16, photo17, photo18, photo19, photo20,photo21,photo22,photo23,photo24,photo25,photo26],
    photoDescriptions: [
      "This is the banner they can move into 3 photos .",
      "Banner 2 .",
      "Banner 3 .",
      "The New Arrivals section .  ",
      "The drop down menu ",
      "This is Special Offer section .",
      "This is  Footer.",
      "Footer .",
      "This is About section .",
      "This is contant section.",
      "The contant section",
    ],
  },
];

// src/constants/caseStudies.js

export const CASE_STUDIES = [
  {
    id: 1,
    title: "Front-End Development Best Practices",
    overview:
      "A solid understanding of front-end technologies is crucial for delivering seamless user experiences. I have a comprehensive grasp of HTML, CSS, and JavaScript, along with popular frameworks like React.",
    keyConcepts: [
      {
        title: "Responsive Design",
        description:
          "Knowledge of CSS frameworks (like Tailwind CSS) and techniques (like Flexbox and Grid) to create responsive layouts that work on various devices.",
      },
      {
        title: "Performance Optimization",
        description:
          "Best practices such as lazy loading, code splitting, and minimizing reflows to enhance web application performance.",
      },
    ],
  },
  {
    id: 2,
    title: "Professional Development Practices",
    overview:
      "Continuous learning and adopting best practices in development is crucial for career growth. I prioritize several professional practices to enhance my skills and effectiveness as a web developer.",
    keyConcepts: [
      {
        title: "Version Control with Git",
        description:
          "Proficient in using Git for version control, ensuring code quality and enabling collaborative development.",
      },
    ],
  },
  // Add more case studies as needed
];
