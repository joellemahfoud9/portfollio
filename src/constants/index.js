export const HERO_CONTENT = `I’m fourth year Information Technology student at Damascus University. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel, MySQL. With 1 years of hands-on experience  .`;

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+963-984199366 ",
  email: "joellemahfoud99@gmail.com",
};

  export const PROJECTS = [
  {
    id:1,
    name: 'Admin_Dashboard',
    githubLink: 'https://github.com/joellemahfoud9/Admin-Dahboard',
    description: ' Admin-Dashbord website .',
    photos: [
      './src/assets/projects/Admin-Dashboard/Overviewpage.jpg"' ,
      './src/assets/projects/Admin-Dashboard/productpage.jpg',
      './src/assets/projects/Admin-Dashboard/userpage.jpg',
      './src/assets/projects/Admin-Dashboard/orderpage.jpg',
      './src/assets/projects/Admin-Dashboard/Createproductpage.jpg',
      './src/assets/projects/Admin-Dashboard/createuserpage.jpg',
      './src/assets/projects/Admin-Dashboard/settingspage.jpg',
    ],
    photoDescriptions: [
      'This is the first page, Overview Page.',
      'This page show all the products.',
      'This page show all the users.',
      'This page show all the orders.',
      'In this page you can create a new product.',
      'In this page you can add a new user.',
      'This a settings page to show your information.',
    ],
  },
  {
       id:2,
      name: 'Portfollio ',
      githubLink: 'https://github.com/joellemahfoud9/portfolio',
      description: 'Portfollio Website .',
      photos: [
      './src/assets/projects/Portfollio/Hero.jpg',
      './src/assets/projects/Portfollio/nav.jpg',
      './src/assets/projects/Portfollio/studycase.jpg',
      './src/assets/projects/Portfollio/projects.jpg',
      './src/assets/projects/Portfollio/contant.jpg',
      ],
      photoDescriptions: [
        'This is the first section in the portfollio.',
        'This is the navbar',
        'This is studycase section .',
        'This is  projects section you can show all my projects.',
        'This is contant section '
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
