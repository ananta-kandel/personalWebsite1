import React from 'react'
import project2 from "../assets/nginx.png"
import project3 from "../assets/CICD.png"
import project4 from "../assets/teraform.png"
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
    <h4 className="text-2xl font-bold text-gray-200 mb-2">CICD-on-Cpanel-account-using-scp</h4>
<p className="text-gray-400 mb-4">
  A CI/CD pipeline that automates deployment to a shared cPanel hosting environment using SCP. 
  The pipeline pulls changes from GitHub, transfers build artifacts to the server via secure copy, 
  and streamlines deployment without needing manual file uploads or FTP. 
  This project showcases automation in constrained hosting environments where traditional DevOps tooling is limited.
</p>

    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/CICD-on-Cpanel-account-using-scp" // Replace with actual GitHub link
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
        cPanel
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        Github Action
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
    <h4 className="text-2xl font-bold text-gray-200 mb-2">Load-Balancing-with-Nginx-and-Docker-Containers-in-VM</h4>
<p className="text-gray-400 mb-4">
  A load-balanced environment running multiple Docker containers behind Nginx acting as a reverse proxy. 
  The setup demonstrates distributing incoming traffic across multiple application instances to improve reliability and performance. 
  This project shows how containerization and load balancing can be used together in a virtual machine environment for better scalability.
</p>

    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/Load-Balancing-with-Nginx-and-Docker-Containers-in-VM-" // Replace with actual GitHub link
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
        VPS
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
         NGINX
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
    <h4 className="text-2xl font-bold text-gray-200 mb-2">CICDOTNETAPPLICATION</h4>
<p className="text-gray-400 mb-4">
  A .NET application configured with a CI/CD pipeline using GitHub Actions. The project demonstrates automated build, test, and deployment workflows — showcasing how DevOps practices can be applied to .NET applications.
</p>
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/CICDOTNETAPPLICATION" // Replace with actual GitHub link
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
        DOCKER
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        Github Action
    </button>
    </div>
   
  </div>
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
    <img
     src = {project4}
      alt="Project 1"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="text-2xl font-bold text-gray-200 mb-2">AWS-EC2-Instance-Deployment-with-Terraform</h4>
<p className="text-gray-400 mb-4">
  A Terraform-based project to provision and manage AWS EC2 instances. This setup demonstrates Infrastructure as Code (IaC) practices, enabling automated, repeatable, and version-controlled cloud deployments.
</p>

    
    {/* Hover popup with GitHub link */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <a
        href="https://github.com/ananta-kandel/AWS-EC2-Instance-Deployment-with-Terraform" 
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
        NODE,EXPRESS
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        MONGODB
    </button>
    <button className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
        REACT
    </button>
    </div>
    </div>
     </div>
  </section>
  )
}

export default Project