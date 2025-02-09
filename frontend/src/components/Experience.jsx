
export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Tech Innovators",
      duration: "June 2023 - Dec 2023",
      description: "Worked on building scalable web applications using MERN stack.",
    },
    {
      title: "Software Developer",
      company: "Code Solutions",
      duration: "Jan 2024 - Present",
      description: "Developing backend services and REST APIs using Node.js and Express.",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      duration: "2022 - Present",
      description: "Contributed to various open-source projects, improving documentation and fixing bugs.",
    },
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">My Journey</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

