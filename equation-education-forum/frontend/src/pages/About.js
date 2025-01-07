import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing images for each section
import missionImage from '../images/MissionStatement.png';
import visionImage from '../images/vision.jpg';
import coreVal from '../images/coreV.png';
import teamImage from '../images/woman-teaching-classroom.jpg';
import callToActionImage from '../images/Donate.jpeg';
import higherEduc from "../images/higherEdd.avif";
import higheredd from "../images/higher.jpg";
import Footer from '../components/Footer';

const About = () => {
    const [showHigherEducation, setShowHigherEducation] = useState(false);
    return (
        <>
            <div className="p-8">
                {/* Mission Statement Section */}
                <section id="mission" className="flex flex-col lg:flex-row items-center mb-16 gap-8">
                    <img
                        src={missionImage}
                        alt="Mission Statement"
                        className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-left"
                    />
                    <div className="text-left lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission Statement</h2>
                        <p className="text-gray-600">
                            Our mission is to provide equal educational opportunities for all children.
                            We are dedicated to bridging the gap in access to quality education by
                            creating inclusive programs that cater to diverse socio-economic groups.
                            Through collaboration with educators, policymakers, and communities,
                            we aim to create a supportive environment where every child can thrive.
                            Empowering future generations through knowledge and skills is our
                            unwavering commitment.
                        </p>
                    </div>
                </section>

                {/* Vision Statement Section */}
                <section id="vision" className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-8">
                    <img
                        src={visionImage}
                        alt="Vision Statement"
                        className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-right"
                    />
                    <div className="text-left lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision Statement</h2>
                        <p className="text-gray-600">
                            We envision a world where every child has the opportunity to achieve their dreams.
                            Our vision is to foster a more equitable society by ensuring that education
                            becomes the foundation for personal and community growth. By removing barriers
                            and promoting innovation in learning, we aim to empower children to create
                            transformative change in their lives. Together, we can build a future driven
                            by informed and confident individuals. Our efforts are focused on driving
                            positive outcomes through systemic change, working hand-in-hand with all stakeholders,
                            and embedding principles of sustainability in every project we undertake.
                        </p>
                    </div>
                </section>

                {/* Core Values Section */}
                <section id="core-values" className="flex flex-col lg:flex-row items-center mb-16 gap-8">
                    <img
                        src={coreVal}
                        alt="Core Values "
                        className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-left"
                    />
                    <div className="text-left lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Values</h2>
                        <p className="text-gray-600">
                            Our core values are deeply rooted in compassion, integrity, and excellence.
                            We believe in treating every child with respect and dignity while fostering
                            a culture of inclusivity and innovation. Our commitment to transparency
                            ensures that our actions align with our mission and goals. Together,
                            these values guide our efforts to create meaningful and lasting impact
                            in the field of education. By upholding these principles, we aim to inspire
                            trust, foster collaboration, and set a benchmark for ethical practices in
                            all our endeavors, ensuring every action contributes to building a better future.
                        </p>
                    </div>
                </section>

                {/* Target Population Section */}
                <section id="target-population" className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-8">
                    <img
                        src={higheredd}
                        alt="Target Population"
                        className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-right"
                    />
                    <div className="text-left lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Target Population</h2>
                        <p className="text-gray-600">
                            Our programs are designed to support children from underserved communities.
                            We focus on providing resources and opportunities to those who face significant
                            challenges in accessing education. By tailoring our initiatives to meet their
                            unique needs, we strive to create pathways for success and independence.
                            Our target population includes students from rural areas, economically disadvantaged
                            families, and marginalized groups. We aim to reach children in areas with
                            limited infrastructure, ensuring they receive the tools and support needed
                            to overcome obstacles and achieve their potential, one step at a time.
                        </p>
                    </div>
                </section>


                 {/* Higher Education */}

                 <section id="higher-education" className="flex flex-col lg:flex-row items-center mb-16 gap-8">
                <img
                    src={higherEduc}
                    alt="Education is happiness"
                    className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-left"
                />
                <div className="text-left lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Higher Education</h2>
                    <p className="text-gray-600">
                        Access to higher education opens doors to limitless possibilities. 
                        Our goal is to ensure that every student, regardless of their background, 
                        can pursue advanced studies and achieve professional excellence. 
                        By partnering with institutions and providing scholarships, 
                        mentorship, and career guidance, we aim to bridge the gap between aspiration 
                        and achievement, creating a society that values knowledge and innovation. 
                        Higher education empowers individuals to drive economic growth, nurture creativity,
                        and tackle complex societal challenges, ultimately shaping a progressive future 
                        for communities worldwide. By equipping students with the tools needed to excel
                        in academia and beyond, we lay the foundation for lifelong learning and success.
                        We also advocate for policy changes that prioritize access to affordable education,
                        creating a system where every deserving individual has the opportunity to thrive.
                        Our programs are designed to address not just academic needs, but also the
                        holistic development of students, focusing on mental well-being, leadership skills,
                        and the ability to innovate in a rapidly changing world. Through strategic collaborations
                        with global institutions, we aim to bring world-class resources to local communities,
                        ensuring no student is left behind in their journey towards higher education.
                    </p>
                    <Link to="/higher-education" className="group">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              <span className="relative">
               <u>Higher Education System in INDIA</u> 
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h2>
          </Link>

                </div>
            </section>

  

            {/* Leadership Team Section */}
            <section id="leadership-team" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Leader Cards */}
                    {[...Array(5)].map((_, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <img
                                src={teamImage}
                                alt={`Leader ${index + 1}`}
                                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                            />
                            <h3 className="text-lg font-semibold text-gray-700">Leader {index + 1}</h3>
                            <p className="text-gray-600 text-sm text-center">
                                A passionate individual committed to empowering communities through innovative approaches.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="call-to-action" className="flex flex-col lg:flex-row items-center mb-16 gap-8">
                <img
                    src={callToActionImage}
                    alt="Call to Action"
                    className="w-full lg:w-1/2 rounded-lg transform transition duration-700 ease-in-out animate-slide-in-left"
                />
                <div className="text-left lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">For Help / For More Information Please Connect</h2>
                    <p className="text-gray-600">
                        Join us in transforming lives through education. Whether by donating, volunteering,
                        or spreading awareness, your contribution can make a tangible difference. Together,
                        we can create a brighter future for countless children, enabling them to break
                        barriers and achieve their dreams. Your support fuels the mission of making education
                        accessible for all. Be a part of a movement that champions knowledge, opportunity,
                        and empowerment, ensuring that no child is left behind in the pursuit of a brighter tomorrow.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="tel:9642446999" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Call</a>
                        <a href="sms:+9642446999" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">SMS</a>
                        <a href="https://wa.me/9642446999" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">WhatsApp</a>
                    </div>
                </div>
            </section>

        </div >
            <Footer />
        </>
    );
};

export default About;
