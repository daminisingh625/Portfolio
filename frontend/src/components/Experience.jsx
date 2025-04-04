
export default function Experience() {
  const experiences = [
  ]

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

