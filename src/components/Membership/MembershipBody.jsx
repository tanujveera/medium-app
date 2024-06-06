import React from "react";
import "../../App.css"

const MembershipBody = () => {
  return (
    <div>
      <div className="w-4/6 pl-6">
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

      <div className="h-screen overflow-y-scroll no-scrollbar">
        <div className="flex pt-20 h-screen scroll-container">
          <div className="w-2/6 pl-6 sticky h-screen">
            <p className="text-7xl font-serif">Why membership?</p>
          </div>
          <div className="w-4/6 ml-14 overflow-y-auto no-scrollbar">
            <h2 className="text-5xl font-serif">Reward writers</h2>
            <p className="text-xl text-black pt-4 w-3/4">
              Your membership directly supports the writers, editors, curators,
              and teams who make Medium a vibrant, inclusive home for human
              stories. A portion of your membership is allocated to the writers
              of the stories you read and interact with.
            </p>
            <h2 className="text-5xl font-serif pt-36">Unlock every story</h2>
            <p className="text-xl text-black pt-4">
              Get access to millions of original stories that spark bright
              ideas, answer big questions, and fuel bold ambitions.
            </p>
            <h2 className="text-5xl font-serif pt-36">
              Enhance your reading experience
            </h2>
            <p className="text-xl text-black pt-4">
              Immerse yourself in audio stories, read offline wherever you go,
              and connect with the Medium community on Mastodon.
            </p>
            <h2 className="text-5xl font-serif pt-36">Elevate your writing</h2>
            <p className="text-xl text-black pt-4">
              Create and contribute to publications to collaborate with other
              writers, create a custom domain for your profile, and level up
              your writing with our simple but powerful publishing tools.
            </p>
            <h2 className="text-5xl font-serif pt-36">
              Support a mission that matters
            </h2>
            <p className="text-xl text-black pt-4 pb-20">
              Members are creating a world where original, human-crafted stories
              thrive. As a member-supported platform, quality comes first, not
              ads or clickbait.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipBody;
