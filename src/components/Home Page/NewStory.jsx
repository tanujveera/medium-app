import React from "react";
import MembershipHeader from "./HomePageHeader";
import MembershipBody from "./NewStoryBody";

const NewStory = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <MembershipHeader />
      </div>
      <MembershipBody/>
    </div>
  );
};

export default NewStory;
