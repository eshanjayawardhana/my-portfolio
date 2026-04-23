export type SectionLink = {
  id: "home" | "about" | "projects" | "education" | "contact";
  label: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProjectEntry = {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  focus: string;
  links?: { label: string; url: string }[];
};

export const portfolio = {
  basics: {
    name: "Eshan Jayawardana",
    initials: "EJ",
    role: "Motivated IT undergraduate passionate about software engineering, web applications, and problem-solving",
    email: "eshanjayawardanaa@gmail.com",
    phone: "+94 76 4982 183",
    location: "Yatiyantota, Sri Lanka",
    linkedin: "https://linkedin.com/in/eshan-jayawardhana/",
    github: "https://github.com/eshanjayawardhana",
    cvUrl: "/my-cv.pdf",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact Us" },
  ] satisfies SectionLink[],
  hero: {
    eyebrow: "Open to work",
    headline:
      "Motivated IT undergraduate passionate about software engineering, web applications, and problem-solving",
    summary:
      "Bachelor of Information Technology undergraduate at the University of Colombo School of Computing (UCSC), focused on software engineering, full stack development, and building reliable web applications.",
    quickFacts: [
      { value: "BIT", label: "University of Colombo School of Computing" },
      { value: "3.3", label: "Current GPA" },
      { value: "2", label: "Featured projects" },
      { value: "3", label: "Languages spoken" },
    ],
    highlights: [
      "Frontend-focused with React and Angular foundations",
      "Comfortable across Java, Spring Boot, Node.js, and SQL databases",
      "Interested in secure, usable, and recruiter-ready web products",
    ],
  },
  about: {
    title:
      "Building web applications with a balance of engineering logic and interface clarity.",
    paragraphs: [
      "My main interest is software engineering through web applications. I enjoy the process of turning a problem into a system that is understandable, maintainable, and useful to real users.",
      "I am especially drawn to frontend work because it combines code, design decisions, and user experience in one place.",
      " I care about responsive layouts, clear interactions, and keeping the final interface polished without making it heavy.",
      "Outside of coding, I am a passionate photographer. This creative background gives me a unique perspective on visual hierarchy, color theory, and composition, which I directly apply to building polished and intuitive user interfaces.",
    ],
  },
  skills: [
    {
      title: "Frontend",
      items: ["React", "Angular", "HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "Node.js"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
    },
    {
      title: "Core",
      items: ["OOP Concepts", "Troubleshooting", "Basic IT Security"],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: "Shutter Crew Web Application",
      subtitle: "Photography service platform",
      tech: ["React", "Node.js", "PostgreSQL", "Nodemailer"],
      features: [
        "Authentication",
        "Booking system",
        "Email notifications",
        "Role-based access",
      ],
      focus:
        "Focused on building a clean user interface with secure APIs and role-based workflow support.",
      links: [
        {
          label: "Shutter Crew (Frontend)",
          url: "https://github.com/eshanjayawardhana/shutter-crew-client",
        },
        {
          label: "Shutter Crew (Backend)",
          url: "https://github.com/eshanjayawardhana/ShutterCrew-server",
        },
        { label: "Live", 
        url: "https://shuttercrew.vercel.app/" 
        },
      ],
    },
    {
      title: "University GPA Calculator",
      subtitle: "React-based GPA calculator for BIT students",
      tech: ["React", "CSS", "Tailwind CSS"],
      features: [
        "Responsive layout",
        "Accurate grade calculations",
        "Thorough testing",
        "Clean and minimal UI",
      ],
      focus:
        "Built to give BIT students a simple and reliable way to estimate GPA with a faster, more usable experience.",
      links: [
        {
          label: "GPA Calculator",
          url: "https://github.com/eshanjayawardhana/BIT-GPA-Cal-Web",
        },
        { label: "Live", 
        url: "https://bit-gpa-calculator.netlify.app/" 
        },
      ],
    },
    {
      title: "Bright Class LMS ( In-progress )",
      subtitle: "Enterprise-grade Learning Management System with Secure Auth",
      tech: [
        "Angular 17",
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "Role-Based Access Control (Admin, Lecturer, Student)",
        "Secure JWT Authentication with Refresh Token Rotation",
        "Course Enrollment and Automated Payment Verification",
        "Dynamic Dashboards for Content and Student Management",
        "Responsive and Interactive User Interface",
      ],
      focus:
        "A full-stack professional solution designed to digitize academic workflows, ensuring high security and seamless course delivery for higher education.",
      links: [
        {
          label: "LMS (Frontend)",
          url: "https://github.com/eshanjayawardhana/Bright_Class_LMS_frontend",
        },
        {
          label: "LMS (Backend)",
          url: "https://github.com/eshanjayawardhana/Bright_Class_LMS_backend",
        },
      ],
    },
  ] satisfies ProjectEntry[],
  projectSection: {
    title:
      "Projects that reflect my interest in practical web applications and frontend problem-solving.",
    description: "",
  },
  education: {
    degree: "Bachelor of Information Technology",
    school: "University of Colombo School of Computing (UCSC)",
    gpa: "3.3",
    duration: "2023 – Present",
    supportingNotes: [
      "Focused on software engineering principles, practical web development, and problem-solving.",
      "Developing projects that strengthen both frontend implementation and full-stack thinking.",
    ],
  },
  additional: {
    softSkills: [
      "Teamwork",
      "Problem-solving",
      "Empathy",
      "Communication",
      "Leadership",
    ],
    languages: [
      "Sinhala (Native)",
      "English (Professional)",
      "Tamil (Intermediate)",
    ],
    certifications: [
      "Cyber Security & Networking",
      "Python for Beginners (University of Moratuwa)",
      "CameraLK academy (basic certificate course)",
      "SLTC Research University (wildlife photography)",
    ],
    skills: [
      "Frontend Development",
      "Backend & DB",
      "Photography - Visual Composition|Adobe Photoshop|Image Editing",
      "Engineering Tools - Git/GitHub|Postman|Docker (Basic)|IntelliJ IDEA",
    ],
  },
  contact: {
    statement:
      "I am open to internships, graduate opportunities, and conversations around web development, software engineering, and collaborative technical work.",
  },
};
