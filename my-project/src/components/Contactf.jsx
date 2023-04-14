import React from 'react'

export default function Contactf() {
  return (
    <div className="bg-[#0a192f] py-20">
    <div
      name="contact"
      data-aos="fade-rigth"
      className="w-full h-screen flex justify-center items-center "
    >
      <form
        method="POST"
        action="https://getform.io/f/de1e24f8-e4d4-4d13-860a-6397ea808554"
        className="flex flex-col max-w-[600px] w-2/3"
      >
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
             Submit the form below or shoot me an email -
            wajevaibhav2002@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-600 hover:border-cyan-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
    </div>
  )
}
