import React from "react";

const GetInTouch = () => {
  const contactMethods = [
    {
      method: "Email",
      description:
        "Reach out to me via email for any inquiries or collaborations.",
      link: "mailto:thesegunonakoya@gmail.com",
    },
    {
      method: "GitHub",
      description:
        "Check out my GitHub profile to see my latest projects and contributions.",
      link: "https://github.com/thesegunonakoya",
    },
    {
      method: "LinkedIn",
      description:
        "Connect with me on LinkedIn to expand our professional network.",
      link: "https://www.linkedin.com/in/thesegunonakoya/",
    },
    {
      method: "Instagram",
      description: "Follow me on Instagram for personal updates and photos.",
      link: "https://www.instagram.com/thesegunonakoya/",
    },
    {
      method: "WhatsApp",
      description: "Chat with me on WhatsApp for quick communication.",
      link: "https://wa.me/2349033990067",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
          Get In Touch 📬
        </h1>

        <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
          Feel free to reach out to me through any of the following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
          {contactMethods.map((contact, index) => (
            <div key={index} className="text-left">
              <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
                {contact.method}
              </h2>
              <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
                {contact.description}
              </p>
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[#eadabe] hover:underline"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
