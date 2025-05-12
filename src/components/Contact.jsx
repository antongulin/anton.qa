import React from "react";

const Contact = () => {
  return (
    <div
      name="contacts"
      className="w-full h-screen bg-[#0a172f] flex justify-center item-center p-4 pt-[80px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/800a0fe2-80ce-4e07-bb2c-665ff7a82294"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-[#f2f3f5]">
          <p className="text-2xl font-bold inline border-b-4 border-white">
            Contacts
          </p>
          <p className="py-3">
            Get in touch using the form below or through{" "}
            <a
              className="text-[#66CCFF] hover:text-[#f2f3f5]"
              href="mailto:i@anton.qa"
              target="_blank"
              rel="noreferrer"
            >
              email
            </a>
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
          className="my-4 p-2 bg-[#ccd6f6] border-b-2 border-white"
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
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:border-[#8892b0] hover:text-[#0a172f] hover:bg-white">
          Let's Create Together
        </button>
      </form>
    </div>
  );
};

export default Contact;
