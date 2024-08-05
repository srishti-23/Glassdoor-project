import React from "react";
import Footer from "../components/Footer";
import img from "../assets/companybg.jpg";
import salary1 from "../assets/salary1.webp";
import sal2 from "../assets/sal2.webp";
import sal3 from "../assets/sal3.png";
import {Mdsearch} from "react-icons/md"
//Salary page for navbar
const Salary = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <img src={img} alt="" className="" />
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mt-[-180px]">
            Search salaries and compensation
          </h1>
        </div>
      </div>
      <div className="bg-[#F5F6F7] h-10">
        <span clasName="text-orange-500">NEW ! </span>
        Dive into anonymous, candid conversations with a community of
        professionals like you.
      </div>
      <div className="  ">
        <div className="">
          <input
            type="text"
            placeholder="Your job title..."
            className="absolute mt-[-180px] ml-[550px] rounded bg-white border border-gray-300"
          />
          <Mdsearch className="bg-green-400"/>
        </div>
        
        <div className="flex">
          <div className="flex flex-col w-1/2 gap-10 h-80 p-10 items-start justify-center shadow-md">
            <p className="font-bold text-4xl">Even the Score</p>
            <p>
              Whether you’re starting a job search or ready for a promotion, use
              Glassdoor to uncover what other professionals like you are getting
              paid – so you can negotiate with confidence.
            </p>
            <button className="border border-black rounded bg-green-500 hover:bg-green-600  w-full">
              Discover Salaries
            </button>
          </div>
          <div className="w-1/2">
            <img src={salary1} alt="" className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between p-10 gap-3 bg-slate-200 ">
            <div className="flex flex-col bg-white ">
              <img src={sal3} alt="" className="w-full h-1/3 bg-[#0caa41]" />
              <p className="font-bold">
                How to Use a New Job Offer to Re-Negotiate Your Current Salary
              </p>
              <p>
                Should you decide that leveraging an external opportunity is the
                route you want to take, here are some “Dos and Don’ts” to keep
                in mind when stepping into these kinds of negotiation talks.
              </p>
              <button className="bg-green-400 p-2 rounded-md mt-4">
                Read the Blog
              </button>
            </div>
            <div className="flex flex-col bg-white ">
              <img src={sal2} alt="" className="w-full h-1/3" />
              <p className="font-bold">
                What to Do About a Pay Gap at Your Workplace
              </p>
              <p>
                Have you found out that you are earning a lower salary than
                someone who is a more recent hire, or has less experience than
                you? If so, it may be time to look for ways to do something
                about it.
              </p>
              <button className="bg-green-400 p-2 rounded-md mt-4">
                Read the Blog
              </button>
            </div>
            <div className="flex flex-col bg-white ">
              <img src={sal2} alt="" className="w-full h-1/3" />
              <p className="font-bold">
                5 Ways to Know If You’re Making Less Than Your Coworkers
              </p>
              <p>
                Knowing where you stand in terms of compensation compared to
                your coworkers can help you understand your value to the
                company, whether or not it’s time to ask for a raise, and if you
                should potentially be looking for a new gig.
              </p>
              <button className="bg-green-400 p-2 rounded-md mt-4">
                Read the Blog
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-start bg-slate-100">
          <div className=" flex flex-col">
            <p className="font-bold text-2xl">Popular Salaries</p>
            <p>Mechanical Engineering Salaries</p>
            <p>Assistant Professor Salaries</p>
            <p>Buisness Analyst Salaries</p>
            <p>Investment Banking Analyst Salaries</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-2xl">Highest Salaries</p>
            <p>Director Salaries</p>
            <p>Managing Director Salaries</p>
            <p>Vice-President Salaries</p>
            <p>Trader Salaries</p>
            <p>Sale Director salaries</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-2xl">New Salaries</p>
            <p>Recruitment Consultant Salaries</p>
            <p>Program Manager Salaries</p>
            <p>Actuary Salaries</p>
            <p>Relationship Director Salaries</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-2xl">Salary Advice</p>
            <p>Salary Negotiation</p>
            <p>Asking for a Raise</p>
            <p>Top Paying Jobs</p>
            <p>Top paying companies</p>
            <p>Compare Your SAlaries</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Salary;
