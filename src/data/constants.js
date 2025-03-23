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
    id: 1,
    img: "https://via.placeholder.com/150", // Replace with company logo
    role: "Teacher",
    company: "Hillsborough County Public Schools",
    date: "August 2023 - Present",
    desc: "Implemented data-driven teaching strategies that improved overall class performance by 15%. Analyzed student performance data to identify trends and optimize learning interventions.",
    skills: [
      "Data Analysis",
      "Educational Metrics",
      "Performance Tracking",
      "Curriculum Development"
    ],
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150", // Replace with company logo
    role: "Programming Tutor",
    company: "Self-Employed",
    date: "June 2022 - Present",
    desc: "Provided one-on-one tutoring in Python, JavaScript, and data analysis to 10+ clients. Developed customized learning materials focused on machine learning fundamentals.",
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning Fundamentals",
      "Technical Mentoring"
    ],
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
    school: "Flatiron School",
    date: "March 2025",
    grade: "",
    desc: "Completed intensive full-stack software development program with focus on Python and data applications. Developed proficiency in building data-driven web applications and implementing machine learning models.",
    degree: "Full Stack Software Development Program",
  },
  {
    id: 1,
    school: "Friends University",
    date: "Dec 2021",
    grade: "3.1 GPA",
    desc: "Coursework included Statistics, Research Methods, and Data Analysis. Developed strong analytical thinking and problem-solving skills essential for data science applications.",
    degree: "Bachelor of Science",
  },
  {
    id: 2,
    school: "Stanford Online",
    date: "Expected Apr 2025",
    desc: "Currently completing comprehensive machine learning specialization covering supervised learning, unsupervised learning, and best practices in ML implementation.",
    degree: "Machine Learning Specialization (Coursera)",
  },
  {
    id: 3,
    school: "Udemy",
    date: "March 2025",
    desc: "Mastered core Python libraries for data science including Pandas, NumPy, Matplotlib, Seaborn, and scikit-learn. Completed multiple data analysis projects with real-world datasets.",
    degree: "Python for Data Science and Machine Learning Bootcamp",
  },
];

export const projects = [
  {
    id: 1,
    title: "Student Performance Predictor",
    date: "March 2025 - Present",
    description: "Developed a predictive analytics application that identifies at-risk students based on historical performance data. The model achieved 78% accuracy in predicting academic outcomes, enabling timely educational interventions.",
    image: "path/to/project-image.jpg",
    tags: ["Python", "scikit-learn", "Pandas", "Data Analysis"],
    category: "Data Science",
    github: "https://github.com/DrakeDamon/student-performance-predictor",
    webapp: "https://your-demo-url.com",
    // Add data science specific details
    datasetInfo: {
      source: "Public educational dataset (modified)",
      size: "5,000+ student records",
      features: "20+ features including academic, behavioral, and demographic data",
      preprocessing: "Handled missing values, normalized numerical features"
    },
    modelArchitecture: [
      "Data preprocessing pipeline with feature engineering",
      "Gradient Boosting classifier with optimized hyperparameters",
      "Cross-validation with stratified k-fold",
      "Prediction interpretation layer"
    ],
    performanceMetrics: {
      accuracy: "78%",
      precision: "81%",
      recall: "75%", 
      f1Score: "77.9%"
    },
    technicalChallenges: [
      "Handling imbalanced class distribution",
      "Feature selection for optimal performance",
      "Creating interpretable outputs for educators"
    ]
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