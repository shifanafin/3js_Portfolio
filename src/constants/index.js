import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gym,
    erp,
    threejs,
    exthgen,
    poonchola
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Static Web Developer",
      icon: backend,
    },
    {
      title: "FrontEnd Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Exthgen Technologies",
    icon:exthgen ,
      iconBg: "#383E56",
      date: "Februvary 2023 - Present",
      points: [
        "Joined as a frontEnd  developer.",
       " Worked on a Web Part Of Our Application called SpeakEnglish.",
       " Woking with Redux-toolkit for state management.",
        "Eslint and prettier for standard of the code.",
       " Build the project in Vite-tailwind for fast and good performance.",
      "Going to practice on Nextjs-typescript for server side rendering and code stability by specifying the types Worked on REST-Api.",
       " Collaborated with a cross-functional team of designers and developers to build and maintain responsive web applications.",
      ],
    },

    {
      title: "Full stack Developer",
      company_name: "Poonchola Technologies",
      icon:poonchola,
      iconBg: "#E6DEDD",
      date: "July 2022 - December 2022",
      points: [
        "Completed my internship as part of the final year project,focusing on MERN stack development.",
"It was an ERP Software for a software company where i named it Liwet.",
"Designed and implemented responsive UI components, improving the overall user experience in react.",
"Created Fake Api and worked with project.",
"Conducted comprehensive testing and troubleshooting to identify and rectify issues, ensuring optimal performance.",
"Used Mongodb for database.",
" create a web application using MongoDB, Express.js, React, and Node.js."
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Gym ",
      description:
        "A website for gym. it help them to advertise their gym and to known to everyone about the services that they are providing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://3481072a.dance-class.pages.dev/",
    },
    {
      name: "Erp",
      description:
        "It is a full stack web Application uses for a software company which combines all departments together and also have employee assesment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "yellow-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: erp,
      source_code_link: "https://github.com/shifanafin/Employee-Prediction",
    },

  ];
  
  export { services, technologies, experiences, projects };
  