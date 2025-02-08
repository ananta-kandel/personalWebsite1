import { useState } from 'react';

const CertificateCard = ({ title, description, certificateImage, certificateLink }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative">
      <img
        src={certificateImage}
        alt="Certificate"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h4 className="text-2xl font-bold text-gray-200 mb-2">{title}</h4>
      <p className="text-gray-400 mb-4">{description}</p>
      
      {/* View Larger Button */}
      <button
        onClick={toggleModal}
        className="mt-4 py-2 px-4 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
      >
        View Certificate
      </button>

      {/* Modal to Show Larger Certificate Image */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-0 right-0 p-2 bg-red-600 text-white rounded-full"
            >
              X
            </button>
            <img
              src={certificateImage}
              alt="Certificate"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Download Button (Optional) */}
      <a
        href={certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 py-2 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition duration-200"
      >
        Download Certificate
      </a>
    </div>
  );
};

export default CertificateCard;

