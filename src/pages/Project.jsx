import React from 'react'
import project2 from "../assets/project.png"
import project3 from "../assets/EmployeeApi.png"
const Project = () => {
  return (
    <section id="projects" className="mb-16 bg-gray-900 py-12 px-6">
    <h2 className="text-center text-xl font-medium mb-2 text-gray-400">My Work</h2>
    <h3 className="text-center text-4xl font-extrabold text-red-500 mb-10">Project Showcase</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   
   {/* //first project */}
   <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
    <img
      src="https://nordvpn.com/wp-content/uploads/blog-social-securing-cryptocurrency-a-way-out-of-the-hackers-target.svg"
      alt="Project 1"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="text-2xl font-bold text-gray-200 mb-2">User Authentication And Authorization using .NET Core</h4>
    <p className="text-gray-400 mb-4">
      In this application user can register and login to the system. While login, the user generates a JWT token, which is used for authentication and identity roles are inserted into the JWT token as a claim. Those claims are used for authorization using roles.
    </p>
    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/jwtuserAuthenticationAndAuthorizationDotNet" // Replace with actual GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl font-bold"
      >
        View on GitHub
      </a>
    </div>
  
    {/* Button for showing tech stack */}
    <div>
    <button className="m-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        .NET CORE
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        SQL SERVER
    </button>
    </div>
  </div>
  {/* //second project  */}
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
    <img
     src = {project2}
      alt="Project 1"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="text-2xl font-bold text-gray-200 mb-2">Task Management System</h4>
    <p className="text-gray-400 mb-4">
      In this application user are allowed to create categories and create task according to categories. Admin can see all users tasks and categories. User can delete their tasks , update their tasks.They can update categories name as well.
    </p>
    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/TaskManagementSystem" // Replace with actual GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl font-bold"
      >
        View on GitHub
      </a>
    </div>
  
    {/* Button for showing tech stack */}
    <div>
    <button className="m-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        .NET CORE
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        SQL SERVER
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        REACT
    </button>
    </div>
   
  </div>

 {/* //third project */}

 <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
    <img
      src={project3}
      alt="Project 1"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="text-2xl font-bold text-gray-200 mb-2">Employee API</h4>
    <p className="text-gray-400 mb-4">
      From this project learned Basic CRUD operations using .NET CORE.
    </p>
    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/EmployeeApi" // Replace with actual GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl font-bold"
      >
        View on GitHub
      </a>
    </div>
  
    {/* Button for showing tech stack */}
    <div>
    <button className="m-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        .NET CORE
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        SQL SERVER
    </button>
    </div>
   
  </div>

     </div>
  </section>
  )
}

export default Project