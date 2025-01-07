import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import WomanTeaching from "../images/woman-teaching-classroom.jpg";
import Madam from "../images/madam.jpg";
import Front from "../images/risinghand.jpg";
import What from "../images/babystudy.jpeg";
import BackgroundImage from "../images/rose.webp";
import { useState } from "react";
import API from "../utils/api";
import DonationCard from "../components/DonationCard";
import ContactUs from "./ContactUs";

function Home() {
  const [donations, setDonations] = useState([]);

  const sections = [
    {
      id: "section-1",
      title: "Our Mission",
      text: `"Education is the most powerful weapon which you can use to change the world." This quote by Nelson Mandela encapsulates our core belief that education has the power to transform lives and communities.

Our mission revolves around the following key pillars:
Accessibility, Quality ,Equality.

No child is left behind.FEE become hubs of holistic development.
Together, we can light the spark of learning in every child, paving the way for a world enriched with knowledge, compassion, and opportunities. Let us not wait for change; let us create it through education.`,
      image: WomanTeaching,
    },
    {
      id: "section-2",
      title: "Our Approach",
      text: `every child deserves not just literacy but an education that opens doors to infinite possibilities.
Through mentorship programs, digital classrooms, and scholarships, we aim to create a sustainable ecosystem where learning never stops. The future depends on what you do today.” With our education-centric approach, we aim to build a future where every child can realize their potential and contribute to a world that values equality, knowledge, and compassion. Together, we can create ripples of change that extend beyond classrooms, transforming lives and shaping a brighter tomorrow.`,
      image: Madam,
    },
    {
      id: "section-3",
      title: "Promoting Life Skills and Values",
      text: `In today’s dynamic and challenging world, education must go beyond academics to nurture essential life skills and values that empower individuals to lead fulfilling lives. promoting life skills and values, FEE can create an education system that not only uplifts individuals but also transforms entire communities."Education is not the filling of a pail, but the lighting of a fire." Communication Skills: Teach students how to express themselves clearly and confidently in different situations.
Emotional Intelligence: Help students recognize and manage their emotions while understanding others’ feelings.
Ethics and Integrity: Instill the importance of honesty and moral courage in everyday decisions.
Teamwork and Leadership: Provide opportunities for collaborative projects and leadership roles.
Adaptability: Equip students to navigate the rapidly changing world with resilience and creativity.educating a child is not just about literacy but about nurturing a brighter future for the world. This holistic approach ensures that students are not just literate but also equipped to contribute meaningfully to society.`,
      image: Front,
    },
    {
      id: "section-4",
      title: "Child Education",
      text: `Child education is the cornerstone of a progressive society. It is a fundamental right for every child irrespective of their background.
Education empowers children to think critically and contribute to society.
Social Equality && Community Development: Educated children grow into responsible adults who actively participate in community building."The roots of education are bitter, but the fruit is sweet." - Aristotle

Key Steps for FEE to Enhance Child Education:
Building Infrastructure: 
Scholarships: Provide financial aid to children from economically weaker sections.
Volunteer Support: Involve skilled volunteers to mentor children.
FEE with their commitment and initiatives, can pave the way for a society where every child has the chance to learn, grow, and succeed.

"An investment in knowledge pays the best interest." `,
      image: What,
    },
  ];

  const achievements = [
    "Children Have Highly Positive Attitudes to Learning",
    "They Display Successful Learning Behaviour",
    "They Attend Class and Feel Safe",
    "They Develop Social Emotional Skills",
  ];

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await API.get("/donations");
      setDonations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <section className="container mx-auto px-4 py-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center mb-12`}
            >
              <motion.div
                className="md:w-1/2 p-4 bg-white bg-opacity-90 rounded-lg"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
              >
                <h2 className="text-4xl font-semibold text-orange-700">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 text-lg">{section.text}</p>
              </motion.div>
              <div className="md:w-1/2 p-4">
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>
            </div>
          ))}

          {/* Achievements Section */}
          <section
            className="mt-16 p-8 rounded-lg shadow-md relative bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
                What We Are Trying to Achieve
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-200">
                {achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        {/* Donation Requests */}
        <section className="p-8">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6 text-center">
            Ongoing Donation Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <DonationCard key={donation.id} donation={donation} />
            ))}
          </div>
        </section>
        <ContactUs/>

        <Footer />
      </div>
    </>
  );
}

export default Home;
