/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tinesh Raj",
  title: "Hi all, I'm Tinesh Raj",
  subTitle: emoji(
    "A passionate full-stack developer 🚀 having experience in building Web and Mobile applications with Codeigniter, Reactjs, Nodejs, React Native, and some other cool libraries and frameworks. At the same time, I'm a crazy full-stack developer who wants to explore different tech stacks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11gOSt4_XIqGY86NuItvZh-ThAmIH7bPc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tinesh-08",
  linkedin: "https://www.linkedin.com/in/tinesh-raj-t-a-0164ba214/",
  gmail: "tineshraj1408@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Microsoft Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "R.M.K. Engineering College",
      logo: require("./assets/images/rmkec.jpg"),
      subHeader: "B.Tech IT",
      duration: "October 2020 - March 2024",
      descBullets: [
        "CGPA - 8.21"
      ]
    },
    {
      schoolName: "R.M.K. Matric Higher Secondary School",
      logo: require("./assets/images/rmk.png"),
      subHeader: "HSC & SSLC",
      duration: "June 2017 - March 2020",
      descBullets: ["HSC - 68.5%","SSLC - 80%"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Hensel Electric India Pvt. Ltd",
      companylogo: require("./assets/images/hensel.png"),
      date: "July 2023 – August 2023",
      desc: "Hensel Electric India Pvt. Ltd is a leading company specialising in the manufacture of innovative electrical installation and power distribution systems for facility equipment of buildings.",
      descBullets: [
        "Developed a novice-friendly ToDoList using codeigniter featuring a complete CRUD and user- based taskssystem."
      ]
    },
    {
      role: "Front-End Developer Intern",
      company: "Siva Traders",
      companylogo: require("./assets/images/siva.png"),
      date: "July 2022 – November 2022",
      desc: "SIVA TRADERS (All Plastic TN PCB Consent Holder)is an accredited company for scrap and iron dealing.",
      descBullets: [
        "Created a modern, responsive front-end for The Siva Traders. Focused on delivering a visually appealing and functional interface to enhance user interaction."
      ]
    },
    {
      role: "Front-End Developer Intern",
      company: "ENCTechs",
      companylogo: require("./assets/images/enctechs.png"),
      date: "April 2022 – May 2022",
      desc: "ENC Techs is a growing-up digital solutions providing firm with multiple concepts & innovations.",
      descBullets: [
        "Built front-end for their website"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Won first place in smart india hackathon 2022",
      subtitle:
        "Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives.",
      image: require("./assets/images/SIH.webp"),
      imageAlt: "SIH2022",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Won second prize in goose chase",
      subtitle:
        "A Coding Event In TROJANS 2022 - A National Level Technical Symposium.",
      image: require("./assets/images/trojans.jpg"),
      imageAlt: "Trojans2022",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },

    {
      title: "Secured 43rd rank across the globe and 1st rank in india at amazon kdd cup 2023",
      subtitle: "This competition aims to provide practical solutions that benefit customers worldwide by promoting diversity and innovation in data science.",
      image: require("./assets/images/kdd.jpg"),
      imageAlt: "Amazon Kdd 2023",
      footerLink: [
        {name: "Certificate", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: 
    "+91-8124303330",
  email_address: 
    "tineshraj1408@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable
};
