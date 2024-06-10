import React, { useState } from "react";
import Input from "../input";

const Banner = () => {
  const [first, setfirst] = useState("");
  return (
    <>
      <div className="banner">
        <h2 className="text-center">Sample Toggle Mode </h2>
        <h3 className="text-white fw-normal text-center">
          sample components design acc to your requirements
        </h3>
        <Input
          wrapperClass="br-0 border-top-0 border-end-0  border-start-0 rounded   w-50"
          placeholder="Current Password"
          labelClass="bg-dangers small medium bg-transparent text-black-50"
          inputClass="fw-medium text-black"
          value={first}
          height="55px"
          type="password"
          icon
          onChange={(e) => setfirst(e.target.value)}
        />
      </div>
    </>
  );
};

export default Banner;
