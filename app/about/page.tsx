export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">My Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate software developer with a strong focus on creating modern, efficient, and user-friendly web applications. My journey in technology began with a curiosity about how things work, which led me to explore programming and web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With years of experience in the industry, I've worked on various projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Responsive and modern UI design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  API development and integration
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Senior Software Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">Tech Company • 2020 - Present</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Leading development teams and implementing modern web solutions for enterprise clients.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">Digital Agency • 2018 - 2020</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Developed and maintained multiple client websites and web applications.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-300">University Name • 2014 - 2018</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Specialized in software engineering and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 