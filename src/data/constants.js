export const Bio = {
  name: "David Damon",
  roles: [
    "Data Engineer — Azure Lakehouse",
    "Databricks / Delta",
    "dbt & CI/CD",
    "Python Developer"
  ],
  description: "Azure-focused, AI-accelerated data engineer building production lakehouses: ADF ingest → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) → dbt marts, operationalized with GitHub Actions and Azure Monitor.",
  github: "https://github.com/DrakeDamon",
  linkedin: "https://www.linkedin.com/in/drakedamon",
  resume: "https://docs.google.com/document/d/10oR7IdaMmaUZ5iPxpjQShrvFvWfTP5W94NCDfGiIMME/edit?usp=sharing", // Update with actual resume link
  email: "dddamon06@gmail.com",
  phone: "(316) 609-8566",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      }
    ]
  },
  {
    title: "Azure Data Platform",
    skills: [
      { name: "Azure Data Factory", image: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "ADLS Gen2", image: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "Databricks / Delta", image: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
      { name: "dbt", image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4" },
      { name: "Azure Monitor", image: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" }
    ]
  },
  {
    title: "Data Engineering & Tools",
    skills: [
      { name: "Apache Spark / PySpark", image: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
      { name: "Pandas", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
      { name: "Great Expectations", image: "https://avatars.githubusercontent.com/u/48045316?s=200&v=4" },
      { name: "GitHub Actions", image: "https://www.vectorlogo.zone/logos/github/github-tile.svg" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" }
    ]
  },
  {
    title: "Machine Learning & Web",
    skills: [
      
      {
        name: "scikit-learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "XGBoost",
        image: "https://avatars.githubusercontent.com/u/21003710?s=200&v=4",
      },
      {
        name: "Flask",
        image: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      },
      {
        name: "React",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "FastAPI",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
      }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    img: "https://via.placeholder.com/150?text=Azure+DE",
    role: "Data Engineer — Azure Lakehouse (Independent Projects)",
    company: "Personal Projects",
    date: "2024 - Present",
    desc: "Built ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) → dbt marts pipelines with GitHub Actions CI/CD and Azure Monitor alerts.",
    skills: [
      "Azure",
      "ADF",
      "ADLS Gen2",
      "Databricks/Delta",
      "dbt",
      "GitHub Actions",
      "Azure Monitor"
    ],
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150?text=HCPS",
    role: "Biology Teacher",
    company: "Freedom High School, Hillsborough County Public Schools",
    date: "August 2023 - Present",
    desc: "Analyze student performance data for 150+ biology students implementing data-driven instructional strategies and assessment analytics. Developed Python-based automated grading systems and progress tracking tools reducing administrative workload by 30%. Integrate statistical analysis methods resulting in 15% improvement in student outcomes.",
    skills: [
      "Data Analysis",
      "Python Automation",
      "Statistical Analysis",
      "Performance Tracking",
      "Educational Analytics"
    ],
  }
];

export const education = [
  {
    id: 0,
    school: "Flatiron School",
    date: "April 2025",
    grade: "",
    desc: "Intensive full-stack software development program with focus on Python and data applications. Developed proficiency in building data-driven web applications and implementing machine learning models.",
    degree: "Full Stack Web Development Certificate - Python with Flask and JavaScript",
  },
  {
    id: 1,
    school: "Friends University",
    date: "2021",
    grade: "",
    desc: "Comprehensive education in scientific methodology and analytical thinking. Developed strong problem-solving skills essential for data science applications.",
    degree: "Bachelor of Science",
  }
];

export const projects = [
  {
    id: 1,
    title: "Earthquakes Lakehouse (Azure)",
    date: "2024",
    description: "ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) with dbt Gold marts (eq_daily_metrics, eq_top100) and Azure Monitor alerts.",
    image: "https://via.placeholder.com/800x450?text=Earthquakes+Lakehouse",
    tags: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions", "Azure Monitor"],
    category: "Data Engineering",
    github: "https://github.com/DrakeDamon/azure-mini-quake",
    webapp: "#",
    member: [
      { name: "David Damon", img: "https://via.placeholder.com/50", linkedin: "https://www.linkedin.com/in/drakedamon", github: "https://github.com/DrakeDamon" }
    ]
  },
  {
    id: 2,
    title: "Taxi Lakehouse (Azure)",
    date: "2024",
    description: "ADF Copy to ADLS, Databricks Bronze/Silver, and dbt Gold fact fct_taxi_daily with failure email alerts and CI integration.",
    image: "https://via.placeholder.com/800x450?text=Taxi+Lakehouse",
    tags: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions"],
    category: "Data Engineering",
    github: "https://github.com/DrakeDamon/azure-mini-taxi",
    webapp: "#",
    member: [
      { name: "David Damon", img: "https://via.placeholder.com/50", linkedin: "https://www.linkedin.com/in/drakedamon", github: "https://github.com/DrakeDamon" }
    ]
  },
  {
    id: 3,
    title: "Recruit Reveal — Low-Latency Model Serving",
    date: "2024",
    description: "XGBoost multi-class models tracked in MLflow; served via SQL UDFs on Databricks SQL Warehouse; Next.js UI.",
    image: "https://via.placeholder.com/800x450?text=Recruit+Reveal",
    tags: ["Databricks", "SQL Warehouse", "MLflow", "XGBoost", "Next.js"],
    category: "ML Engineering",
    github: "https://github.com/DrakeDamon",
    webapp: "#",
    member: [
      { name: "David Damon", img: "https://via.placeholder.com/50", linkedin: "https://www.linkedin.com/in/drakedamon", github: "https://github.com/DrakeDamon" }
    ]
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "",
    icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    credentialUrl: "#"
  },
  {
    id: 2,
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "",
    icon: "https://www.databricks.com/sites/default/files/2022-06/Associate-badge-eng.svg",
    credentialUrl: "#"
  }
];

export const TimeLineData = [
  { year: 2021, text: "Graduated with Bachelor of Science" },
  { year: 2023, text: "Began teaching and data analysis journey" },
  { year: 2024, text: "Built Azure & GCP lakehouse projects" },
  { year: 2025, text: "Completing Flatiron School Program" },
];

export const Certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "aws-cert-icon"
  },
  {
    id: 2,
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    icon: "databricks-cert-icon"
  }
];
