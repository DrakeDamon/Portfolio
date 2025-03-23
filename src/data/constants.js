export const Bio = {
  name: "Drake Damon",
  roles: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Python Developer",
    "Full Stack Developer"
  ],
  description:
    "I am a data science enthusiast with a strong foundation in full-stack development. I specialize in building predictive models and data-driven applications that solve real-world problems. With expertise in Python, machine learning frameworks, and data visualization, I transform complex data into actionable insights. I'm passionate about leveraging AI technologies to create impactful solutions across education, finance, and business domains.",
  github: "https://github.com/DrakeDamon",
  linkedin: "https://www.linkedin.com/in/drake-damon-516509185/",
};

export const skills = [
  {
    title: "Data Science & ML",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "TensorFlow",
        image: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      },
      {
        name: "scikit-learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "Pandas",
        image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Jupyter",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
      },
    ],
  },
  // Keep other skill categories but ensure Data Science is first
]
export const experiences = [
   {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",    role: "DevOps & Fullstack Engineering Intern",
    company: "Tracksy",
    date: "May 2023 - Present",
    desc: "Contributed on the project via Fullstack development",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  },
{
  id: 5,
  img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
  role: "Android and IOS Developer ",
  company: "Rebel",
  date: "May 2023 - Present",
  desc: "As an IOS and Andriod developer, I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology.",
  skills: [
    "Leadership",
    "Mobile Application Development",
    "Kotlin",
    "XML",
    "Figma",
  ],
  doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
},
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributed to different open-source projects and learn from industry experts",
  },

];

export const education = [
  {
    id: 0,
    // img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",
    school: "Friends University",
    date: "Jan 2019 - Dec 2021",
    grade: "3.1 GPA",
    desc: "",
    degree: "Bachelor of Science",
  },
  {
    id: 1,
    // img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",
    school: "FlatIron",
    date: "April 2024 - Dec 2024",
    grade: "",
    desc: "Full Stack Developer Program",
    degree: "Certificate",
  },
  {
    id: 2,
    // img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    school: "Udemy",
    date: "Aug 2023 -  Sept 2023",
    // grade: "3.1 GPA",
    desc: "I completed a complete beginner javascript course from Wes Bos",
    degree: "Certificate Of Completion",
  },
  {
    id: 3,
    // img: UdemyLogo,    
    school: "Udemy",
    date: "Sept 2023 - Nov 2023",
    desc: "I completed the full HTML and CSS course",
    degree: "Completion Of Completion",
  },
];

export const projects = [
  {
    id: 1,
    title: "Student Performance Predictor",
    date: "Jan 2025 - Present",
    description:
      "Developed a machine learning application that predicts student outcomes based on historical data with 78% accuracy. Built a complete pipeline from data preprocessing to model deployment, with an intuitive dashboard for educators to identify at-risk students and implement timely interventions.",
    image: "https://via.placeholder.com/800x450?text=Student+Performance+Dashboard",
    tags: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Flask",
      "React",
    ],
    category: "Data Science",
    github: "https://github.com/DrakeDamon/student-app",
    webapp: "https://student-predictor-demo.netlify.app/",
  },
  {
    id: 2,
    title: "MNIST Digit Classifier",
    date: "Feb 2025",
    description:
      "Built and trained a convolutional neural network that achieves 92% accuracy on handwritten digit classification. Implemented systematic hyperparameter optimization experiments that improved the baseline model by 15%. Created detailed visualizations to explain model performance and prediction patterns.",
    image: "https://via.placeholder.com/800x450?text=MNIST+Classifier",
    tags: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Image Processing",
    ],
    category: "Machine Learning",
    github: "https://github.com/DrakeDamon/mnist-classifier",
    webapp: "https://mnist-demo.netlify.app/",
  },
  {
    id: 3,
    title: "Financial Analytics Platform",
    date: "Nov 2024 - Dec 2024",
    description:
      "Developed a data-driven financial analytics application with advanced visualization capabilities. Engineered interactive charts using D3.js to identify spending patterns and budget optimization opportunities. Implemented statistical analysis functions to provide personalized financial insights.",
    image: "https://via.placeholder.com/800x450?text=Financial+Analytics",
    tags: [
      "JavaScript",
      "D3.js",
      "Data Visualization",
      "Statistical Analysis",
    ],
    category: "Data Visualization",
    github: "https://github.com/DrakeDamon/finance-analytics",
    webapp: "https://finance-analytics-demo.netlify.app/",
  },
]

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
];