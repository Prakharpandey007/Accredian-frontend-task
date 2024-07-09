import React from 'react';

function FAQHeader() {
  return (
    <div className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* FAQ Title */}
        <h1 className='text-4xl font-bold text-center text-blue-600 mb-12'>
          Frequently Asked Questions
        </h1>
        
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='flex flex-col md:flex-row'>
            {/* Left Side Buttons */}
            <div className='md:w-1/3 bg-blue-50 p-6'>
              <div className='flex flex-col space-y-4'>
                <button className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-medium'>
                  Eligibility
                </button>
                <button className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-medium'>
                  How to Use
                </button>
                <button className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-medium'>
                  Terms and Conditions
                </button>
              </div>
            </div>
            
            {/* Right Side Text */}
            <div className='md:w-2/3 p-8'>
              <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
                Do I need to have prior product management and project management experience to join the program?
              </h2>
              <p className='text-gray-700 text-lg leading-relaxed'>
                No, the program is inclusive of all levels of experience. All topics will be covered from the basics, making it accessible to everyone. Whether you're a beginner or have some experience, our program is designed to accommodate various skill levels and help you grow in your product and project management journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQHeader;