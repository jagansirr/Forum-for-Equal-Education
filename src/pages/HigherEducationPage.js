import React from 'react';
import { motion } from 'framer-motion';

import BA from "../images/BAcou.jpg";
import Bsc from "../images/bsc-bachelor-of-science.png";
import Btech from "../images/B.tech.png";
import Bcom from "../images/BCO.jpg";
import MA from "../images/MAcour.jpeg";
import Mtech from "../images/m-tech.png";
import MBBS from "../images/MBBS.jpg";
import Phd from "../images/phd.jpg";
import Pilot from "../images/pilot.webp";
import NDA from "../images/NDA.webp";
import FashionDesign from "../images/FAshion Design.jpg";

const HeaderSection = () => (
  <header className="bg-orange-600 text-white py-3">
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold">Higher Education System in India</h1>
    </div>
  </header>
);

const Section = ({ title, content, image, reverse, imageStyle }) => (
  <motion.section
    className={`container mx-auto py-10 px-4 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}
    initial={{ opacity: 0, x: reverse ? 100 : -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="md:w-1/2">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="text-gray-700">{content}</div>
    </div>
    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 md:mr-6 flex items-center justify-center" style={{ height: '100%' }}>
      <img src={image} alt={`${title} Image`} className="w-full rounded shadow-md" style={imageStyle} />
    </div>
  </motion.section>
);

const AreasOfStudySection = () => (
  <div>
    <Section
      title= <big>"B.A. (Bachelor of Arts)"</big>
      content={
        <>
          <p>Why Choose This Course: Focuses on humanities and social sciences, perfect for creative and analytical thinkers.</p>
          <p>Eligibility: Completion of 10+2 in any stream.</p>
          <p>Popular Branches: History, Sociology, Psychology, Political Science, and Economics.</p>
          <p>Career Paths: Civil services, academia, content writing, and public relations.</p>
          <p>Additional Info: Opportunities in media, publishing, and NGOs.</p>
        </>
      }
      image={BA}
    />
    <Section
      title=<big>"B.Sc. (Bachelor of Science)"</big>
      content={
        <>
          <p>Why Choose This Course: Ideal for those interested in scientific research and practical applications.</p>
          <p>Eligibility: Completion of 10+2 with a science background.</p>
          <p>Popular Branches: Physics, Chemistry, Biology, Mathematics, and Biotechnology.</p>
          <p>Career Paths: Research, teaching, IT, and environmental sciences.</p>
          <p>Additional Info: Extensive lab work and project-based learning included.</p>
        </>
      }
      image={Bsc}
      reverse
    />
    <Section
      title=<big>"B.Tech (Bachelor of Technology)"</big>
      content={
        <>
          <p>Why Choose This Course: Focuses on technical and engineering skills.</p>
          <p>Eligibility: Completion of 10+2 with Physics, Chemistry, and Mathematics.</p>
          <p>Popular Branches: Computer Science, Mechanical, Civil, and Electrical Engineering.</p>
          <p>Career Paths: Engineering roles, IT, startups, and data science.</p>
          <p>Additional Info: Encourages innovation through internships and industrial training.</p>
        </>
      }
      image={Btech}
    />
    <Section
      title=<big>"Commerce"</big>
      content={
        <>
          <p>Why Choose This Course: Provides a foundation for careers in business, finance, and accounting.</p>
          <p>Eligibility: Completion of 10+2 with a commerce background.</p>
          <p>Focus: Business, finance, and economics.</p>
          <p>Career Paths: Chartered Accountancy, corporate roles, and financial analysis.</p>
          <p>Additional Info: Strong demand for financial planners and consultants.</p>
        </>
      }
      image={Bcom}
      reverse
      imageStyle={{ height: '90%' }}
    />
    <Section
      title=<big>"M.A. (Master of Arts)"</big>
      content={
        <>
          <p>Why Choose This Course: Deepens knowledge in humanities for academic or administrative careers.</p>
          <p>Eligibility: Bachelor's degree in a relevant field.</p>
          <p>Specializations: English, Sociology, Psychology, and History.</p>
          <p>Career Paths: Academia, public administration, and policy research.</p>
          <p>Additional Info: Ideal for policy analysis and writing roles.</p>
        </>
      }
      image={MA}
    />
    <Section
      title=<big>"M.Tech (Master of Technology)"</big>
      content={
        <>
          <p>Why Choose This Course: Advances technical expertise for specialized roles.</p>
          <p>Eligibility: Bachelor's degree in a relevant engineering field.</p>
          <p>Specializations: Computer Science, Electronics, Mechanical, and Civil Engineering.</p>
          <p>Career Paths: Research, development, and senior engineering roles.</p>
          <p>Additional Info: Prepares for high-tech leadership and entrepreneurial ventures.</p>
        </>
      }
      image={Mtech}
      reverse
    />
    <Section
      title=<big>"M.B.B.S. (Bachelor of Medicine and Bachelor of Surgery)"</big>
      content={
        <>
          <p>Why Choose This Course: The gateway to becoming a doctor.</p>
          <p>Eligibility: 10+2 with Biology, Physics, and Chemistry, plus qualifying exams like NEET.</p>
          <p>Focus: Clinical practice and healthcare education.</p>
          <p>Career Paths: Doctor, surgeon, and healthcare administrator.</p>
          <p>Additional Info: Strong emphasis on practical skills and patient care.</p>
        </>
      }
      image={MBBS}
    />
    <Section
      title=<big>"Ph.D. (Doctorate)"</big>
      content={
        <>
          <p>Why Choose This Course: Suitable for those passionate about academic research and innovation.</p>
          <p>Eligibility: Postgraduate degree in a relevant field.</p>
          <p>Focus: Advanced research and specialization.</p>
          <p>Career Paths: Professorship, research, and consultancy.</p>
          <p>Additional Info: Opportunities in think tanks and international research collaborations.</p>
        </>
      }
      image={Phd}
      reverse
    />
    <Section
      title=<big>"Pilot Training"</big>
      content={
        <>
          <p>Why Choose This Course: For those fascinated by aviation and dynamic careers.</p>
          <p>Eligibility: 10+2 with Physics and Mathematics, and medical fitness tests.</p>
          <p>Focus: Aviation theory and practical flying skills.</p>
          <p>Career Paths: Commercial pilot, air force pilot, and flight instructor.</p>
          <p>Additional Info: Includes advanced simulator training and international licensing options.</p>
        </>
      }
      image={Pilot}
    />
    <Section
      title=<big>"NDA (National Defence Academy)"</big>
      content={
        <>
          <p>Why Choose This Course: For a career in the armed forces with rigorous training.</p>
          <p>Eligibility: 10+2 with specific age and fitness criteria.</p>
          <p>Focus: Military and academic education.</p>
          <p>Career Paths: Army, navy, or air force roles.</p>
          <p>Additional Info: Offers comprehensive training in leadership and defense tactics.</p>
        </>
      }
      image={NDA}
      reverse
    />
    <Section
      title=<big>"Fashion Design"</big>
      content={
        <>
          <p>Why Choose This Course: Ideal for creative minds passionate about fashion and innovation.</p>
          <p>Eligibility: 10+2 in any stream and clearing design aptitude tests.</p>
          <p>Focus: Creativity, garment construction, and design.</p>
          <p>Career Paths: Fashion designer, stylist, and merchandiser.</p>
          <p>Additional Info: High potential in luxury and sustainable fashion markets.</p>
        </>
      }
      image={FashionDesign}
    />
  </div>
);

const FooterSection = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Higher Education in India.by: <b>RAjAt kUmAr mAhAtA . </b>All rights reserved.</p>
    </div>
  </footer>
);

const HigherEducationPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeaderSection />
      <AreasOfStudySection />
      <FooterSection />
    </div>
  );
};

export default HigherEducationPage;
