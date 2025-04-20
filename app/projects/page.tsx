import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    image: '/project1.jpg',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: '/project2.jpg',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/project3.jpg',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with real-time data and interactive maps.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    image: '/project4.jpg',
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Interested in working together?
          </Link>
        </div>
      </div>
    </div>
  );
} 