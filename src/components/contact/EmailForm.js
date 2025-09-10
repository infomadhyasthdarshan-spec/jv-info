import React from 'react';

const EmailFomer = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium  ">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium  ">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block mb-1 font-medium  ">City</label>
          <input
            type="text"
            name="city"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Comment/Question */}
        <div>
          <label className="block mb-1 font-medium  ">Comment / Question</label>
          <textarea
            name="comment"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#59524E] text-white px-6 py-2 rounded-md hover:bg-[#47413E] transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailFomer;
