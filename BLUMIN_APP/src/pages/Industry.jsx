import React, { useState } from "react";
import pic1 from "../assets/indus-1.jpeg";
import FAQ from "../components/FAQ";
import industry1 from "../assets/industry1.jpg";
import industry2 from "../assets/industry2.jpg";
import industry3 from "../assets/industry3.jpg";
import { Heading } from '@radix-ui/themes';

const Industry = () => {
  const [showFAQs, setShowFAQs] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleFAQ = (index) => {
    const newShowFAQs = [...showFAQs];
    newShowFAQs[index] = !newShowFAQs[index];
    setShowFAQs(newShowFAQs);
  };
  return (
    <>
      <section className="body-font py-8">
        <div className="container px-5 mx-auto">
          {/* <h1 className="text-6xl font-medium title-font text-gray-900 mb-12 text-center">
            INDUSTRY
          </h1> */}
          <div className='mb-10'>
            <Heading align='center' weight='bold' size='9' className="text-3xl md:text-5xl">Industry</Heading>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-5 py-10 bg-white rounded-2xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 flex items-center justify-center">
            <h2 className="text-4xl font-medium text-gray-900">
              How we aim to help the Industry?
            </h2>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              BLUMIN facilitates strategic partnerships between industry
              leaders, academic institutions, and global innovators to drive
              growth and foster innovation. Access top talent, leverage
              cutting-edge research, and accelerate R&D initiatives with us.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="max-w-md md:w-1/2 mb-6 md:mb-0 flex items-center justify-center">
            <img src={pic1} alt="Your Image" className="mx-auto rounded-lg" />
          </div>

          <div className="md:w-1/2 px-10 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">FAQ'S</h2>
              <div className="space-y-4 min-w-full">
                <FAQ
                  question="Global Connections"
                  answer="BLUMINAccess global networks for talent, partnerships, and funding. Partnerships with governments, incubators, and key companies."
                  isOpen={showFAQs[0]}
                  toggle={() => toggleFAQ(0)}
                />
                <FAQ
                  question="Innovators Community"
                  answer="Collaborative model with top researchers. Flexible project plans and shared talent investments."
                  isOpen={showFAQs[1]}
                  toggle={() => toggleFAQ(1)}
                />
                <FAQ
                  question="Business Innovation"
                  answer="Embrace challenges, boost ROI in R&D. Connect with global expertise for projects."
                  isOpen={showFAQs[2]}
                  toggle={() => toggleFAQ(2)}
                />
                <FAQ
                  question="Building the Right Team"
                  answer="Find expertise before job postings. Consider interns for reduced risk. Align strategy with talent needs."
                  isOpen={showFAQs[3]}
                  toggle={() => toggleFAQ(3)}
                />
                <FAQ
                  question="Talent Solutions"
                  answer="100+ advisors for support. Identify and recruit skilled talent."
                  isOpen={showFAQs[4]}
                  toggle={() => toggleFAQ(4)}
                />
                <FAQ
                  question="Guidance from Start to Finish"
                  answer="Receive guidance at every project stage."
                  isOpen={showFAQs[5]}
                  toggle={() => toggleFAQ(5)}
                />
                <FAQ
                  question="Budget Efficiency"
                  answer="Seek funding support through IIC. Leverage investments for expanded budgets."
                  isOpen={showFAQs[6]}
                  toggle={() => toggleFAQ(6)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font pt-20 pb-0 pl-10">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-medium text-gray-900">Why choose us</h2>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-white">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry1}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                INDUSTRY ENGAGEMENT AND PROBLEM IDENTIFICATION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>Initiate discussions with potential industry partners.</li>
                <li>
                  Arrange introductory meetings with industry representatives
                  and gather insights.
                </li>
              </ul>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-white">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry2}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                NEEDS ASSESSMENT AND PROBLEM DEFINITION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>
                  Analyze industry trends, market dynamics, and regulations.
                </li>
                <li>
                  Collaborate with stakeholders to define challenges and
                  opportunities.
                </li>
              </ul>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-white">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry3}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                DEPARTMENTAL ALLOCATION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>Assign requirements based on identified challenges.</li>
                <li>
                  Form cross-functional teams and Allocate tasks to departments
                  as per capabilities and expertise.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industry;
