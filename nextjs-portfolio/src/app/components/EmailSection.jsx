import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] text-lg mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          facilis repellendus debitis autem aspernatur ex dolore rerum cum
          molestiae, optio quo velit, minima eveniet. Consectetur saepe
          inventore neque unde delectus.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Rcoleto-coder">
            <Image
              src="/img/github-icon.svg"
              alt="Github icon"
              width={44}
              height={44}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rafael-coleto-a0288313b/">
            <Image
              src="/img/linkedin-icon.svg"
              alt="Linkedin icon"
              width={44}
              height={44}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <label
            htmlFor="email"
            className="text-white block text-base mb-2 font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="emailID"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full mb-6 p-2.5"
            placeholder="email@example.com"
          />
          <label
            htmlFor="subject"
            className="text-white block text-base mb-2 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subjectID"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full mb-6 p-2.5"
            placeholder="What brings you here?"
          />
          <label
            htmlFor="message"
            className="text-white block text-base mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            type="text"
            name="message"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full mb-6 p-2.5"
            placeholder="Let's talk about..."
          />
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
