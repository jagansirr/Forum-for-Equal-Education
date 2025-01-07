
import { useRef } from 'react';
import breastCancerImage from '../images/breast-cancer.jpg';
import lungCancerImage from '../images/lung-cancer.jpg';
import prostateCancerImage from '../images/prostate-cancer.jpg';
import skinCancerImage from '../images/skin-cancer.jpg';
import colorectalCancerImage from '../images/colorectal-cancer.jpg';
import leukemiaImage from '../images/leukemia.jpg';
import lymphomaImage from '../images/lymphoma.jpeg';
import pancreaticCancerImage from '../images/pancreatic-cancer.jpg';
import ovarianCancerImage from '../images/ovarian-cancer.jpg';
import bladderCancerImage from '../images/bladder-cancer.jpeg';
import thyroidCancerImage from '../images/thyroid-cancer.jpg';
import esophagealCancerImage from '../images/esophageal-cancer.jpg';
import teamImage from '../images/woman-teaching-classroom.jpg'; 
import helpImage from '../images/helpY.jpeg';



const CancerAwareness = () => {
  const leadershipTeamRef = useRef(null);

  const scrollToLeadershipTeam = () => {
    if (leadershipTeamRef.current) {
      leadershipTeamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Cancer Awareness - Join the Fight Against Cancer</h1>
        </div>
      </header>

      {/* About Cancer Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Cancer</h2>
        <p className="text-lg leading-relaxed">
          Cancer is a disease that affects millions of lives every year. Raising awareness and providing support to
          those in need can make a significant impact. Learn more about the causes, symptoms, and prevention methods.
        </p>
      </section>

      {/* Types of Cancer Section */}
      <section className="bg-gray-200 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Types of Cancer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-4">
              <img src={breastCancerImage} alt="Breast Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Breast Cancer:</strong> Breast cancer is one of the most common cancers affecting women, though men can also develop it. Symptoms include lumps in the breast, changes in size or shape, skin dimpling, or nipple discharge. Early detection through mammograms or self-examinations significantly improves survival rates. Treatment options range from surgery (lumpectomy or mastectomy) and radiation therapy to chemotherapy, hormone therapy, and targeted biological therapies. Maintaining a healthy lifestyle, reducing alcohol intake, and regular screenings are effective preventive measures.
              </p>
            </div>
            <div className="mb-4">
              <img src={lungCancerImage} alt="Lung Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Lung Cancer:</strong> Lung cancer is primarily caused by smoking but can also result from exposure to secondhand smoke, radon, asbestos, or air pollution. Symptoms include persistent cough, chest pain, hoarseness, and unexplained weight loss. Treatments vary by type and stage and may include surgery to remove tumors, radiation, chemotherapy, or targeted therapies like immunotherapy. Avoiding tobacco use and minimizing exposure to harmful substances are key preventive measures.
              </p>
            </div>
            <div className="mb-4">
              <img src={prostateCancerImage} alt="Prostate Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Prostate Cancer:</strong> Commonly affecting older men, prostate cancer often grows slowly and may not require immediate treatment in its early stages. Symptoms include difficulty urinating, blood in urine or semen, and pelvic pain. Diagnosis involves PSA testing, biopsies, and imaging studies. Treatment options include active surveillance, surgery, radiation, and hormonal therapies. A diet rich in fruits, vegetables, and healthy fats is believed to reduce risks.
              </p>
            </div>
            <div className="mb-4">
              <img src={skinCancerImage} alt="Skin Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Skin Cancer:</strong> Skin cancer includes basal cell carcinoma, squamous cell carcinoma, and melanoma, the deadliest form. It is caused primarily by UV radiation from the sun or tanning beds. Symptoms include unusual growths, changes in moles, or sores that do not heal. Treatments involve surgical removal, cryotherapy, topical medications, or immunotherapy for advanced cases. Prevention includes wearing sunscreen, avoiding tanning beds, and regular skin examinations.
              </p>
            </div>
            <div className="mb-4">
              <img src={colorectalCancerImage} alt="Colorectal Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Colorectal Cancer:</strong> This cancer affects the colon or rectum and often develops from precancerous polyps. Symptoms include changes in bowel habits, blood in stools, abdominal pain, and weight loss. Risk factors include a low-fiber diet, obesity, and family history. Screening methods like colonoscopies can detect early stages. Treatments include surgery to remove affected areas, followed by chemotherapy or radiation. A diet rich in whole grains, fruits, and vegetables can help prevent colorectal cancer.
              </p>
            </div>
            <div className="mb-4">
              <img src={leukemiaImage} alt="Leukemia" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Leukemia:</strong> A cancer of the blood and bone marrow, leukemia leads to the uncontrolled growth of abnormal white blood cells. Symptoms include fatigue, frequent infections, fever, and unexplained bruising or bleeding. It is categorized into acute or chronic types. Treatments include chemotherapy, radiation, targeted drugs, and bone marrow transplants. Research advancements have significantly improved outcomes for many patients.
              </p>
            </div>
            <div className="mb-4">
              <img src={lymphomaImage} alt="Lymphoma" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Lymphoma:</strong> Lymphoma originates in the lymphatic system and is divided into Hodgkin and Non-Hodgkin types. Symptoms include swollen lymph nodes, fever, night sweats, and weight loss. Diagnosis involves imaging tests, biopsies, and blood tests. Treatments include chemotherapy, radiation, and targeted therapies like immunotherapy. Early detection and treatment provide a higher chance of remission.
              </p>
            </div>
            <div className="mb-4">
              <img src={pancreaticCancerImage} alt="Pancreatic Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Pancreatic Cancer:</strong> Known for its aggressive nature, pancreatic cancer often shows symptoms like abdominal pain, jaundice, and weight loss at advanced stages. Risk factors include smoking, obesity, and chronic pancreatitis. Treatment options include surgery (Whipple procedure), chemotherapy, and targeted therapy. Early detection is crucial but challenging due to the lack of specific symptoms in early stages.
              </p>
            </div>
            <div className="mb-4">
              <img src={ovarianCancerImage} alt="Ovarian Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Ovarian Cancer:</strong> Often called the "silent killer," ovarian cancer presents subtle symptoms like bloating, pelvic pain, and changes in appetite. Advanced stages may lead to abdominal swelling and pain. Treatment involves surgery to remove affected tissues and chemotherapy. Regular gynecological check-ups and genetic testing for high-risk individuals are essential for early detection.
              </p>
            </div>
            <div className="mb-4">
              <img src={bladderCancerImage} alt="Bladder Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Bladder Cancer:</strong> Symptoms include blood in the urine, frequent urination, and discomfort during urination. Smoking and exposure to industrial chemicals are significant risk factors. Diagnosis involves cystoscopy, urine cytology, and imaging tests. Treatments include surgical removal, chemotherapy, radiation, and immunotherapy. Quitting smoking and regular health check-ups can reduce risks.
              </p>
            </div>
            <div className="mb-4">
              <img src={thyroidCancerImage} alt="Thyroid Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Thyroid Cancer:</strong> This cancer affects the thyroid gland, with symptoms like lumps in the neck, hoarseness, and difficulty swallowing. Types include papillary, follicular, medullary, and anaplastic thyroid cancer. Treatments involve surgery, radioactive iodine therapy, and hormone replacement. Early detection ensures high survival rates, especially for less aggressive forms.
              </p>
            </div>
            <div className="mb-4">
              <img src={esophagealCancerImage} alt="Esophageal Cancer" className="w-full h-auto rounded shadow-lg" />
              <p className="text-lg leading-relaxed mt-4">
                <strong>Esophageal Cancer:</strong> Affecting the esophagus, symptoms include difficulty swallowing, chest pain, and unintended weight loss. Risk factors include smoking, heavy alcohol consumption, and chronic acid reflux. Treatments include surgery, chemotherapy, and radiation. Early intervention is key to managing this type effectively.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How to Cope During Cancer Treatment */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">How to Cope During Cancer Treatment</h2>
        <p className="text-lg leading-relaxed mb-4">
          Dealing with cancer treatment can be physically and emotionally challenging. Here are some strategies to help:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Stay Informed:</strong> Learn about your treatment options and ask questions to understand what to expect.</li>
          <li><strong>Maintain a Balanced Diet:</strong> Proper nutrition can boost energy levels and aid recovery.</li>
          <li><strong>Stay Active:</strong> Light exercises like walking can improve mood and physical strength.</li>
          <li><strong>Seek Support:</strong> Join support groups or talk to counselors to manage emotional stress.</li>
          <li><strong>Rest and Recover:</strong> Prioritize rest to allow your body to heal and manage fatigue.</li>
          <li><strong>Avoid Risks:</strong> Avoid smoking, alcohol, and exposure to infections during treatment.</li>
        </ul>
      </section>

      {/* Recovery After Cancer Treatment */}
      <section className="bg-gray-200 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Recovery After Cancer Treatment</h2>
          <p className="text-lg leading-relaxed mb-4">
            Recovery from cancer is a gradual process and varies depending on the type and stage of cancer, as well as the treatment received. Here are some important aspects:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Follow-Up Care:</strong> Attend regular check-ups to monitor for recurrence or complications.</li>
            <li><strong>Rehabilitation:</strong> Physical therapy may be required to regain strength and mobility.</li>
            <li><strong>Emotional Support:</strong> Counseling or joining survivor groups can help deal with post-treatment anxiety.</li>
            <li><strong>Lifestyle Changes:</strong> Adopt a healthy lifestyle, including a balanced diet and regular exercise.</li>
            <li><strong>Monitor Health:</strong> Be vigilant about new symptoms and report them to your doctor immediately.</li>
            <li><strong>Financial Planning:</strong> Use resources like insurance and assistance programs to manage medical expenses.</li>
          </ul>
        </div>
      </section>

      {/* Cancer Treatment Costs */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Understanding Cancer Treatment Costs</h2>
        <p className="text-lg leading-relaxed mb-4">
          The cost of cancer treatment can vary widely depending on factors like the type of cancer, treatment methods, and location. Here are some considerations:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Cost Range:</strong> Treatment expenses can range from a few thousand dollars for basic care to hundreds of thousands for advanced therapies.</li>
          <li><strong>Insurance:</strong> Most health insurance plans cover a portion of cancer treatment costs. Review your policy for specific coverage details.</li>
          <li><strong>Financial Assistance:</strong> Many organizations offer financial aid or support for cancer patients. Explore grants, subsidies, and charity programs.</li>
          <li><strong>Planning Ahead:</strong> Discuss payment options with your healthcare provider, including installment plans or medical loans if necessary.</li>
        </ul>
      </section>

      {/* How You Can Help Section */}
      <section
        className="bg-gray-300 py-10 px-4"
        style={{
          backgroundImage: `url(${helpImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-60"><u>How You Can Help</u></h2>
          <ul  className="list-disc pl-4">
            <li >Donate to cancer research organizations.</li>
            <li>Volunteer your time to support patients and families.</li>
            <li>Spread awareness through social media and community events.</li>
          </ul>
        </div>
      </section>
         
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg leading-relaxed">
          Join our mission to fight cancer. Whether through donations, volunteering, or spreading the message, your
          contribution matters. Together, we can make a difference.
        </p>
        <div className="mt-6">
          <a
            href={"create-donation"}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          ><span className="ml-2">❤️
            Donate Now
            ⬇️</span>
          </a>
          <button
            onClick={scrollToLeadershipTeam}

          >

          </button>
        </div>
      </section> */


      <section id="leadership-team" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">volunteer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          {[...Array(5)].map((_, index) => (
            <div className="flex flex-col items-center" key={index}>
              <img
                src={teamImage}
                alt={`Leader ${index + 1}`}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700">Volunteer{index + 1}</h3>
              <p className="text-gray-600 text-sm text-center">
                A  passionate individual committed to empowering communities through innovative approaches.
              </p>
              <p className="text-gray-600 text-sm text-center">
                A  passionate individual committed to empowering communities through innovative approaches.
              </p>
            </div>
          ))}
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center ">
          <p>&copy; 2024 Cancer Awareness. by <i>RAjAt kUmAr mAhAtA</i>  .All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// ReactDOM.render(<CancerAwareness />, document.getElementById('root'));
export default CancerAwareness;
