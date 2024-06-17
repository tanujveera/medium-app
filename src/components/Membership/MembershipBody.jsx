import React from "react";
import "../../App.css"
import MembershipInfo from "./MembershipInfo";

const MembershipBody = () => {
  return (
    <div>
      <div className="w-4/6 pl-6 bg-gradient-to-b from-violet-500 to-blue-600">
        <p className="text-7xl font-serif pt-16">Support human stories</p>
        <p className="text-2xl text-gray-400 pt-64 w-7/12">
          Become a member to read without limits or ads, fund great writers, and
          join a global community of people who care about high-quality
          storytelling.
        </p>
        <div className="flex pt-10 pb-10">
          <div className="text-white bg-black rounded-full px-4 py-2 mr-4">
            Get started
          </div>
          <div className="text-black bg-white border border-black rounded-full px-4 py-2">
            View plans
          </div>
        </div>
        <div className="border-r border-black opacity-50 h-full"></div>
      </div>
      <hr className="border border-black opacity-50"></hr>
    </div>
  );
};

export default MembershipBody;
