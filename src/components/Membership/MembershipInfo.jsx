import React, { useRef } from "react";

const MembershipInfo = () => {
  // const rightDivRef = useRef(null);
  // const handleScroll = (event) => {
  //   if (rightDivRef.current) {
  //     rightDivRef.current.scrollTop = event.target.scrollTop;
  //   }
  // };
  return (
    <div>
      <div className="h-screen overflow-y-scroll no-scrollbar">
        <div className="flex pt-20 h-screen top-0">
          <div className="w-2/6 pl-6 sticky h-screen">
            <p className="text-7xl font-serif">Why membership?</p>
          </div>
          <div className="w-4/6 ml-14 overflow-y-auto no-scrollbar">
            <div>
              <h2 className="text-5xl font-serif">Reward writers</h2>
              <p className="text-xl text-black pt-4 w-3/4">
                Your membership directly supports the writers, editors,
                curators, and teams who make Medium a vibrant, inclusive home
                for human stories. A portion of your membership is allocated to
                the writers of the stories you read and interact with.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-serif pt-36">Unlock every story</h2>
              <p className="text-xl text-black pt-4">
                Get access to millions of original stories that spark bright
                ideas, answer big questions, and fuel bold ambitions.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-serif pt-36">
                Enhance your reading experience
              </h2>
              <p className="text-xl text-black pt-4">
                Immerse yourself in audio stories, read offline wherever you go,
                and connect with the Medium community on Mastodon.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-serif pt-36">
                Elevate your writing
              </h2>
              <p className="text-xl text-black pt-4">
                Create and contribute to publications to collaborate with other
                writers, create a custom domain for your profile, and level up
                your writing with our simple but powerful publishing tools.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-serif pt-36">
                Support a mission that matters
              </h2>
              <p className="text-xl text-black pt-4 pb-20">
                Members are creating a world where original, human-crafted
                stories thrive. As a member-supported platform, quality comes
                first, not ads or clickbait.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipInfo;
