import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const Register = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <div className="flex flex-col justify-center items-center w-full h-[100vh] px-5">
            <div className="xl:max-w-3xl bg-white rounded-xl w-full pb-6 sm:pb-10">
                <Tabs selectedIndex={activeTabIndex} onSelect={index => setActiveTabIndex(index)}>
                    <TabList className="grid grid-cols-3 mb-5">
                        <Tab className={`cursor-pointer text-xs md:text-lg text-black font-medium text-center py-3 ${activeTabIndex === 0 ? 'bg-slate-200' : 'bg-white hover:bg-slate-100'}`}>Student</Tab>
                        <Tab className={`cursor-pointer text-xs md:text-lg text-black font-medium text-center py-3 ${activeTabIndex === 1 ? 'bg-slate-200' : 'bg-white hover:bg-slate-100'}`}>Professor</Tab>
                        <Tab className={`cursor-pointer text-xs md:text-lg text-black font-medium text-center py-3 ${activeTabIndex === 2 ? 'bg-slate-200' : 'bg-white hover:bg-slate-100'}`}>Employee</Tab>
                    </TabList>
                    <TabPanel>
                        <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
                            Student Registration Form
                        </h1>
                        <div className="w-full mt-8">
                            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your first name"
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your last name"
                                    />
                                </div>
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="text"
                                    placeholder="Enter your collage name"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="tel"
                                    placeholder="Enter your phone"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Register</span>
                                </button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
                            Professor Registration Form
                        </h1>
                        <div className="w-full mt-8">
                            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your first name"
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your last name"
                                    />
                                </div>
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="text"
                                    placeholder="Enter your university name"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="tel"
                                    placeholder="Enter your phone"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Register</span>
                                </button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
                            Employee Registration Form
                        </h1>
                        <div className="w-full mt-8">
                            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your first name"
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                        type="text"
                                        placeholder="Your last name"
                                    />
                                </div>
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="text"
                                    placeholder="Enter your company name"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="tel"
                                    placeholder="Enter your phone"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Register</span>
                                </button>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};
export default Register;
