import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Academia = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-6">Academia</h1>
                <Tabs>
                    <TabList className="flex justify-center mb-8">
                        <Tab className="px-4 py-2 bg-[#38b6ff] hover:bg-[#064c66] rounded-md mr-4 cursor-pointer text-white">Universities</Tab>
                        <Tab className="px-4 py-2 bg-[#38b6ff] rounded-md mr-4 cursor-pointer text-white">Students</Tab>
                        <Tab className="px-4 py-2 bg-[#38b6ff] rounded-md cursor-pointer text-white">Professors</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="container mx-auto py-12 px-4">

                            <h2 className="text-center text-2xl font-semibold mb-8">How BLUMIN helps UNIVERSITIES</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Facilitating Collaboration</h3>
                                        <p className="text-gray-700">Act as a bridge between industry and academic institutions to establish mutually beneficial partnerships.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Enhancing Research Excellence</h3>
                                        <p className="text-gray-700">Support universities in conducting relevant research aligned with industry needs.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Access to Funding and Resources</h3>
                                        <p className="text-gray-700">Assist in securing competitive funding ranging from $15,000 to $120,000 for innovative projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="container mx-auto py-12 px-4">
                            <h2 className="text-center text-2xl font-semibold mb-8">How BLUMIN helps STUDENTS</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Internship Programs</h3>
                                        <p className="text-gray-700">Opportunities for students to gain invaluable real-world experience through internships with partner organizations.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Accelerate Programs</h3>
                                        <p className="text-gray-700">Accelerate program for students in any discipline, offering real-world experience and funding opportunities through internships.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Career Development</h3>
                                        <p className="text-gray-700">Skills training workshops to develop industry-relevant skills and enhance employability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="container mx-auto py-12 px-4">
                            <h2 className="text-center text-2xl font-semibold mb-8">How BLUMIN helps PROFESSORS</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Research Collaborations</h3>
                                        <p className="text-gray-700">Facilitate joint research projects between companies and academic institutions.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Industry Advisory Support</h3>
                                        <p className="text-gray-700">Engage professors in industry advisory boards to guide curriculum development and research priorities.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Professional Development</h3>
                                        <p className="text-gray-700">Workshops and seminars to enhance teaching methodologies, research techniques, and industry relevance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Academia;