import React from "react";
import Image from "next/image";
import victor from "@/public/images/victor.jpeg";

const Profile = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
      <Image
        src={victor}
        height={250}
        width={250}
        className="rounded-full zoom-animation"
        alt="Victor Patrick"
        priority
      />
      <div className="lg:max-w-[50%]">
        <p className="text-sm text-center lg:text-left">
          Hi there, My name is Victor Patrick Bernard, {"I'm"} a professional
          Frontend Engineer with Diploma certification from AltSchool{" "}
          {"Africa’s"} school of Software Engineering. I have about 4 years of
          proven work experience which spans across vast tech industries. I work
          with JavaScript/TypeScript as my major programming language, I also
          utilize frameworks like React, NextJS and Tailwind for my frontend
          crafting. I am currently pursuing a BSc degree in Software Development
          at the prestigious Brigham Young University -{"Idaho(U.S.A)"}. I am
          open to Frontend Engineering opportunities in reputable companies.
        </p>
      </div>
    </div>
  );
};

export default Profile;
