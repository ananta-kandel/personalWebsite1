// import React from 'react'

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-gray-900 py-12 px-6">
//     <h2 className="text-center text-xl font-medium mb-2 text-gray-400">Skills</h2>
//     <h3 className="text-center text-4xl font-extrabold text-red-500 mb-10">Technical Skills</h3>
  
  
//     <div className="flex flex-col gap-4">
//       {/* Frontend Skills */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//         <h4 className="text-2xl font-bold text-gray-200 mb-2">Frontend Development</h4>
//         <p className="text-gray-400">Building responsive and interactive web interfaces with HTML, CSS, JavaScript, React, and more.</p>
//       </div>
  
//       {/* image section  */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12">  
//     <div className="flex flex-col items-center">
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       HTML
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//       src="data:image/png;base64,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"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       JAVASCRIPT
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//       src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       REACT JS
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//       src="data:image/png;base64,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"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       CSS
//     </p>
//   </div>
//   </div>
  
//       {/* Backend Skills */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//         <h4 className="text-2xl font-bold text-gray-200 mb-2">Backend Development</h4>
//         <p className="text-gray-400">Creating robust backend systems with .NET Framework, .NET core.</p>
//       </div>
//   {/* //image sections  */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12">  
//     <div className="flex flex-col items-center">
//     <img
//       src="data:image/jpeg;base64,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"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       .NET Framework
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3uFEyeveell3N2QYYeBc_cXjMHprzY26bg&s'
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       .NET Core
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//       src="data:image/png;base64,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"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       Express
//     </p>
//   </div>
  
//   </div>
//       {/* Database Skills */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
//         <h4 className="text-2xl font-bold text-gray-200 mb-2">Database Management</h4>
//         <p className="text-gray-400">Managing databases with MySQL, MongoDB, and PostgreSQL for efficient data storage and retrieval.</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12">  
//     <div className="flex flex-col items-center">
//     <img
//       src="https://miro.medium.com/v2/resize:fit:900/0*hM4PQP9yoePYv-RB.png"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       mysql
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//     src="https://serverless-solutions.com/wp-content/uploads/2025/01/SQL-Server.png"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       SQL SERVER
//     </p>
//   </div>
//   </div>
  
//       {/* DevOps Skills */}
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
       
//         <h4 className="text-2xl font-bold text-gray-200 mb-2">DevOps</h4>
//         <p className="text-gray-400">Implementing CI/CD pipelines, containerization with Docker, and cloud services like AWS for automation and scalability.</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12">  
//     <div className="flex flex-col items-center">
//     <img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2nfcFa3kDOh5xk_rqOe-hpemYeXTRohYjg&s"
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       AWS
//     </p>
//   </div>
//   <div className="flex flex-col items-center">
//     <img
//     src='https://pbs.twimg.com/profile_images/1816856437567406080/ByISu1ft_400x400.jpg'
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//       DOCKER
//     </p>

//   </div>
//   <div className="flex flex-col items-center">
//     <img
//     src='https://miro.medium.com/v2/resize:fit:400/1*txwKGJOoQ2W0ka_9htbu0Q.png'
//       alt="DevOps"
//       className="w-42 h-42 object-cover rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//     />
//     <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
//        GitHub Actions
//     </p>
    
//   </div>
  
//   </div>
  
//     </div>
//   </section>
//   )
// }

// export default Skills

import React from "react";

const Skills = () => {
  const devopsSkills = [
    { name: "Docker", src: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
    { name: "Kubernetes", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "CI/CD", src: "https://cdn-icons-png.flaticon.com/512/183/183341.png" },
    { name: "Terraform", src: "https://www.terraform.io/assets/images/og-image-1b0f01fb.png" },
    { name: "Ansible", src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ansible_logo.png" },
    { name: "Linux", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
    { name: "Monitoring", src: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png" },
    { name: "WHM", src: "https://images.ctfassets.net/4cgq2gsyg6xg/6J0nAfj3r7nN3LIdXG2ZP6/37c0c6c90f593ef58e7c3783d68f17b0/whm-white.png" },
    { name: "cPanel", src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cpanel_logo.svg" },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-12 px-6">
      <h2 className="text-center text-xl font-medium mb-2 text-gray-400">
        Skills
      </h2>
      <h3 className="text-center text-4xl font-extrabold text-red-500 mb-10">
        DevOps Engineer Skills
      </h3>
<h1>h</h1>
      {/* DevOps Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {devopsSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-24 h-24 object-contain rounded-full transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
            />
            <p className="mt-4 text-lg font-semibold text-gray-200 tracking-wide uppercase">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
