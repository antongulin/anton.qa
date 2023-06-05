import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a172f] flex justify-center item-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/800a0fe2-80ce-4e07-bb2c-665ff7a82294"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-[#f2f3f5]">
          <p className="text-3xl font-bold inline border-b-4 border-white">
            Contact
          </p>
          <p className="py-3">
            Get in touch using the form below or through{" "}
            <a href="mailto:myemail@gmail.com">email</a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] border-b-2 border-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:border-[#8892b0] hover:text-[#0a172f] hover:bg-white">
          Let's Create Together
        </button>
      </form>
    </div>
  );
};

export default Contact;
