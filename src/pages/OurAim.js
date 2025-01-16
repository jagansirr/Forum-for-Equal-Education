// import React, { useState } from "react";

import {Link}from "react-router-dom";
import Footer from "../components/Footer";


const OurAim = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const section = [
    {
      title: "Education of Child Labour",
      content: `Child labour remains a significant global issue, depriving millions of children of their fundamental right to education and a safe childhood. Education serves as a powerful antidote to this problem, providing children with the tools to escape cycles of exploitation and poverty. When children are given access to quality education, they are not only removed from hazardous and exploitative work environments but also equipped with knowledge and skills that empower them for the future. Education enhances their confidence, social awareness, and ability to contribute meaningfully to their communities.`,
      img: "/image/eduoChild.png",
    },
    {
      title: "Importance of Education",
      content: `Education is one of the key components for an individuals success. It has the ability to shape ones life in the right direction. Education is a process of imparting or acquiring knowledge, and developing the powers of reasoning and judgement. It prepares growing children intellectually for a life with more mature understanding and sensitivity to issues surrounding them. It inculcates knowledge, belief, skill, values and moral habits. It improves the way of living and raises the social and economic status of individuals. Education makes life better and more peaceful. It transforms the personality of individuals and makes them feel confident. Well said by Nelson Mandela, Education is the most powerful weapon to change the world. To elaborate, it is the foundation of the society which brings economic wealth, social prosperity and political stability. It gives power to people to put their views and showcase their real potential.`,
      img: "/image/ie.jpeg",
    },
    {
      title: "Education Statistics",
      content: `Education statistics provide a lens to measure progress, identify challenges, and implement impactful solutions in learning systems. Globally, significant strides have been made in improving literacy rates and access to education. However, disparities persist, with millions of children and youth still out of school, particularly in low-income countries. By leveraging data, policymakers and organizations can track progress and drive meaningful change in education systems.`,
      img: "/image/ms.png",
    },
    {
      title: "Promoting Equality",
      content: `Equality in education is the foundation for building a fair and just society. By ensuring equal access to learning opportunities, education helps bridge the gaps caused by gender, socioeconomic, or ethnic disparities. Education empowers marginalized communities, giving them a voice and a platform to advocate for their rights.`,
      img: "/image/sy.jpg",
    },
    {
      title: "Improving Health",
      content: `Health and education are closely intertwined, each reinforcing the other. Good health lays the foundation for effective learning, while education promotes awareness about practices that improve physical and mental well-being. A well-educated population is more likely to make informed decisions about nutrition, hygiene, and healthcare, reducing the prevalence of preventable diseases.`,
      img: "/image/ch.jpeg",
    },
    {
      title: "Driving Innovation",
      content: `Innovation flourishes when education encourages creativity, curiosity, and critical thinking. Schools, universities, and training centers serve as hubs of innovation, where learners are inspired to question, experiment, and develop solutions to pressing challenges.`,
      img: "/image/sy.jpg",
    },

    {
      title: "Women Empowerment",
      content: `Women empowerment is a cornerstone of societal progress, driving equality, economic growth, and innovation. Education is the most powerful tool for empowering women, enabling them to make informed decisions, secure better jobs, and contribute to their families and communities. Empowered women break barriers, challenging traditional gender roles and stereotypes. They inspire change by becoming leaders, innovators, and advocates for equality. Women's empowerment also benefits future generations, as educated mothers are more likely to ensure their children receive an education, fostering a cycle of prosperity. Beyond education, empowerment initiatives that provide financial independence, healthcare access, and leadership opportunities further amplify women’s voices in shaping the future. Societies that prioritize women’s empowerment unlock their potential, creating inclusive, equitable, and sustainable growth for all.`,
      img: "/image/women-empowerment1.jpg",
    },
    {
      title: "Importance of Child Health",
      content: `All children have the right to timely access to appropriate health services.  Vaccinating children, as well as awareness campaigns, can lead to a significant reduction in health risks.Children require extra attention in order to enjoy the best possible health. On the other hand, a teenager, due to his or her habits and behavior, are exposed to other kinds of risks (sexual health, mental health, alcohol and drug use etc.)Generally, a child who benefits from appropriate health care will enjoy a better state of health during the stages of childhood and can become a healthy adult.`,
      img: "/image/childHealt.avif",
     
    },
  ];
  


  return (
    <div className="min-h-screen bg-gray-50">
      
     
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {section.map((section, index) => (
          <section
            id={`section-${index}`}
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-stretch mb-16`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-lg shadow-lg w-full h-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex items-center px-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
                {index === 7&& ( // Section 7: Link to Second Page
                  <Link
                    to="/CancerAwareness"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                  CancerAwareness page 
                  <span className="ml-2">❤️ ⬇️</span>
                  </Link>
                )}

              </div>
            </div>
          </section>
        ))}
      </main>


      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default OurAim;
