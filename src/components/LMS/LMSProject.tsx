const projects = [
  {
    id: 1,
    title: "Learning Management System",
    description:
      "A full LMS platform similar to Udemy with courses, quizzes, blogs, community forum and user authentication.",
    live: "https://example.com",
    images: [
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s1.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s2.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s5.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s4.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s6.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s2.png",
      "https://raw.githubusercontent.com/sairol/lms/refs/heads/main/Final/s7.png",
    ],
  },
]

export const techStack = [
  {
    category: "AI",
    color: "bg-pink-200 text-pink-900",
    items: ["OpenAI API", "Vector Search", "Recommendation Engine"]
  },
  {
    category: "Frontend",
    color: "bg-green-200 text-green-900",
    items: ["React", "Next.js 15", "TypeScript", "TailwindCSS"]
  },
  {
    category: "Backend",
    color: "bg-orange-200 text-orange-900",
    items: ["Golang", "Gin", "REST APIs", "JWT Auth", "RBAC"]
  },
  {
    category: "Database",
    color: "bg-blue-200 text-blue-900",
    items: ["PostgreSQL", "SQL", "Go Migrate"]
  },
  {
    category: "DevOps",
    color: "bg-purple-200 text-purple-900",
    items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx"]
  }
]

const LMSProject = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10 md:py-12 lg:py-16">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
        Learning Management System
      </h1>

      {projects.map((project) => (
        <div key={project.id} className="space-y-6 md:space-y-8">

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
            {techStack.map((stack) =>
              stack.items.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium ${stack.color}`}
                >
                  {tech}
                </span>
              ))
            )}
          </div>

          {/* Live Link */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:opacity-80 transition text-sm md:text-base"
          >
            View Live Project →
          </a>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10">

            {project.images.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden shadow hover:shadow-lg transition
                ${index === 0 || index === 5 || index === 6 ? "md:col-span-2" : ""}`}
              >
                <img
                  src={img}
                  className="w-full object-contain hover:scale-[1.02] transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>
      ))}
    </section>
  )
}

export default LMSProject