import { Input, Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { studentSchema } from "../schema/studentSchema";
import { professorSchema } from "../schema/professorSchema";
import { employeeSchema } from "../schema/employeeSchema";
const Register = () => {

  const onSubmit = (values) => {
    // console.log(values)
  }
  const studentForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      college: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: studentSchema,
    onSubmit
  })
  const professorForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: professorSchema,
    onSubmit
  })
  const employeeForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: employeeSchema,
    onSubmit
  })
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const cat = {
    0: "Student",
    1: "Professor",
    2: "Employee",
  };

  const handleCatagory = (index) => {
    setActiveTabIndex(index);
    // setForm({
    //   ...form,
    //   catagory: cat[index],
    // });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="xl:max-w-3xl bg-white rounded-xl w-full pb-6 sm:pb-10">
        <Tabs selectedIndex={activeTabIndex} onSelect={handleCatagory}>
          <TabList className="grid grid-cols-3 mb-5">
            {["Student", "Professor", "Employee"].map((item, index) => (
              <Tab
                key={index}
                className={`cursor-pointer text-xs md:text-lg font-medium text-center py-3 ${activeTabIndex === index
                  ? "bg-blue-gray-50 text-[#39a9f1] border-b-2 border-[#39a9f1]"
                  : "bg-white text-black  hover:bg-slate-100"
                  }`}
              >
                {item}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <section className="px-6">
              <form className="flex flex-col md:grid md:grid-cols-2 gap-4" onSubmit={studentForm.handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="after:content-['*'] after:text-red-600 after:ml-1 ">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter First Name" value={studentForm.values.firstName} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.firstName && studentForm.touched.firstName ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.firstName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="lastName" className="after:content-['*'] after:text-red-600 after:ml-1 ">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Last Name" value={studentForm.values.lastName} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.lastName && studentForm.touched.lastName ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.lastName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="email" className="after:content-['*'] after:text-red-600 after:ml-1 ">Email</label>
                  <input type="email" id="email" name="email" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Email" value={studentForm.values.email} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.email && studentForm.touched.email ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.email}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="phone" className="after:content-['*'] after:text-red-600 after:ml-1 ">Phone Number</label>
                  <input type="number" id="phone" name="phone" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Phone Number" value={studentForm.values.phone} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.phone && studentForm.touched.phone ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.phone}</p> : null
                  }
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="college" className="after:content-['*'] after:text-red-600 after:ml-1 ">College Name</label>
                  <input type="text" id="college" name="college" className="w-full border py-2 px-3 rounded-md" placeholder="Enter College Name" value={studentForm.values.college} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.college && studentForm.touched.college ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.college}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="password" className="after:content-['*'] after:text-red-600 after:ml-1 ">Password</label>
                  <input type="password" id="password" name="password" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Password" value={studentForm.values.password} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.password && studentForm.touched.password ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.password}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="after:content-['*'] after:text-red-600 after:ml-1 ">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Confirm Password" value={studentForm.values.confirmPassword} onChange={studentForm.handleChange} />
                  {
                    studentForm.errors.confirmPassword && studentForm.touched.confirmPassword ? <p className="mt-1 text-sm text-red-600">{studentForm.errors.confirmPassword}</p> : null
                  }
                </div>
                <button type="submit" className="p-3 col-span-2 bg-[#39a9f1] text-white font-semibold rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-4">
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
                    Register
                  </div>
                </button>
              </form>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="px-6">
              <form className="flex flex-col md:grid md:grid-cols-2 gap-4" onSubmit={professorForm.handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="after:content-['*'] after:text-red-600 after:ml-1 ">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter First Name" value={professorForm.values.firstName} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.firstName && professorForm.touched.firstName ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.firstName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="lastName" className="after:content-['*'] after:text-red-600 after:ml-1 ">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Last Name" value={professorForm.values.lastName} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.lastName && professorForm.touched.lastName ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.lastName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="email" className="after:content-['*'] after:text-red-600 after:ml-1 ">Email</label>
                  <input type="email" id="email" name="email" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Email" value={professorForm.values.email} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.email && professorForm.touched.email ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.email}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="phone" className="after:content-['*'] after:text-red-600 after:ml-1 ">Phone Number</label>
                  <input type="number" id="phone" name="phone" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Phone Number" value={professorForm.values.phone} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.phone && professorForm.touched.phone ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.phone}</p> : null
                  }
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="university" className="after:content-['*'] after:text-red-600 after:ml-1 ">University Name</label>
                  <input type="text" id="university" name="university" className="w-full border py-2 px-3 rounded-md" placeholder="Enter University Name" value={professorForm.values.university} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.university && professorForm.touched.university ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.university}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="password" className="after:content-['*'] after:text-red-600 after:ml-1 ">Password</label>
                  <input type="password" id="password" name="password" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Password" value={professorForm.values.password} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.password && professorForm.touched.password ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.password}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="after:content-['*'] after:text-red-600 after:ml-1 ">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Confirm Password" value={professorForm.values.confirmPassword} onChange={professorForm.handleChange} />
                  {
                    professorForm.errors.confirmPassword && professorForm.touched.confirmPassword ? <p className="mt-1 text-sm text-red-600">{professorForm.errors.confirmPassword}</p> : null
                  }
                </div>
                <button type="submit" className="p-3 col-span-2 bg-[#39a9f1] text-white font-semibold rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-4">
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
                    Register
                  </div>
                </button>
              </form>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="px-6">
              <form className="flex flex-col md:grid md:grid-cols-2 gap-4" onSubmit={employeeForm.handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="after:content-['*'] after:text-red-600 after:ml-1 ">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter First Name" value={employeeForm.values.firstName} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.firstName && employeeForm.touched.firstName ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.firstName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="lastName" className="after:content-['*'] after:text-red-600 after:ml-1 ">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Last Name" value={employeeForm.values.lastName} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.lastName && employeeForm.touched.lastName ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.lastName}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="email" className="after:content-['*'] after:text-red-600 after:ml-1 ">Email</label>
                  <input type="email" id="email" name="email" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Email" value={employeeForm.values.email} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.email && employeeForm.touched.email ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.email}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="phone" className="after:content-['*'] after:text-red-600 after:ml-1 ">Phone Number</label>
                  <input type="number" id="phone" name="phone" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Phone Number" value={employeeForm.values.phone} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.phone && employeeForm.touched.phone ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.phone}</p> : null
                  }
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="company" className="after:content-['*'] after:text-red-600 after:ml-1 ">Company Name</label>
                  <input type="text" id="company" name="company" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Company Name" value={employeeForm.values.company} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.company && employeeForm.touched.company ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.company}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="password" className="after:content-['*'] after:text-red-600 after:ml-1 ">Password</label>
                  <input type="password" id="password" name="password" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Password" value={employeeForm.values.password} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.password && employeeForm.touched.password ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.password}</p> : null
                  }
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="after:content-['*'] after:text-red-600 after:ml-1 ">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border py-2 px-3 rounded-md" placeholder="Enter Confirm Password" value={employeeForm.values.confirmPassword} onChange={employeeForm.handleChange} />
                  {
                    employeeForm.errors.confirmPassword && employeeForm.touched.confirmPassword ? <p className="mt-1 text-sm text-red-600">{employeeForm.errors.confirmPassword}</p> : null
                  }
                </div>
                <button type="submit" className="p-3 col-span-2 bg-[#39a9f1] text-white font-semibold rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-center gap-4">
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
                    Register
                  </div>
                </button>
              </form>
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default Register;
