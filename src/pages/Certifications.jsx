import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Software Developer Bootcamp",
      issuer: "GoMyCode",
      date: "2024",
      link: "#",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      link: "#",
    },
    {
      title: "Node.js, Express, MongoDB & More",
      issuer: "Udemy",
      date: "2024",
      link: "#",
    },
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University",
      date: "2024",
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/163d540c-5325-4346-a632-d8056a32f53f-oluwasegun-onakoya-71ed2f13-871f-4faa-b1e0-43e1e47ab3f4-certificate.pdf",
    },
    { title: "Prompt Engineering", issuer: "Udemy", date: "2024", link: "#" },
  ];

  return (
    <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16 mx-3 md:mx-0">
      <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
        Certifications 📜
      </h1>

      <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
        Here are some of the certifications I have earned over the years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
        {certifications.map((certification, index) => (
          <div key={index} className="text-left">
            <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
              {certification.title}
            </h2>
            <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
              Issued by: {certification.issuer}
            </p>
            <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
              Date: {certification.date}
            </p>
            <a
              href={certification.link}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[#eadabe] hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
