import React from "react";
import MembershipHeader from "./MembershipHeader";
import MembershipBody from "./MembershipBody";

const Membership = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <MembershipHeader />
      </div>
    </div>
  );
};

export default Membership;
