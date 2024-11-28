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

import photo16 from "/projects/Ecommere/rigesterPage.jpg";
import photo17 from "/projects/Ecommere/loginPage.jpg";
import photo18 from "/projects/Ecommere/banner1.jpg";
import photo19 from "/projects/Ecommere/banner2.jpg";
import photo20 from "/projects/Ecommere/banner3.jpg";
import photo21 from "/projects/Ecommere/newarrivals.jpg";
import photo22 from "/projects/Ecommere/newarrivals2.jpg";
import photo23 from "/projects/Ecommere/specialoffer.jpg";
import photo24 from "/projects/Ecommere/footer.jpg";
import photo25 from "/projects/Ecommere/footer2.jpg";
import photo26 from "/projects/Ecommere/shopPage.jpg";
import photo27 from "/projects/Ecommere/productDetails.jpg";
import photo28 from "/projects/Ecommere/productDetails2.jpg";
import photo29 from "/projects/Ecommere/about.jpg";
import photo30 from "/projects/Ecommere/contant.jpg";
import photo31 from "/projects/Ecommere/contant2.jpg";

export const HERO_CONTENT = `I’m fourth year Information Technology student at Damascus University. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel, MySQL. With 1 years of hands-on experience  .`;

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+963-984199366 ",
  email: "joellemahfoud99@gmail.com",
};

export const PROJECTS = [
  {
    id: 1,
    name: "E-commerce Website ",
    githubLink: "",
    description: "In Process.",
    photos: [photo16,photo17, photo18, photo19, photo20,photo21,photo22,photo23,photo24,photo25,photo26,photo27,photo28,photo29,photo30,photo31],
  },
  
  {
    id: 2,
    name: "Admin_Dashboard",
    githubLink: "https://github.com/joellemahfoud9/Admin_Dashboard",
    description: " Admin-Dashbord website .",
    photos: [photo01, photo02, photo03, photo04, photo05, photo06, photo07],
  },
  
  // {
  //   id: 3,
  //   name: "Portfolio ",
  //   githubLink: "https://github.com/joellemahfoud9/portfollio",
  //   description: "Portfollio Website .",
  //   photos: [photo11, photo12, photo13, photo14, photo15],
  // },
];



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
