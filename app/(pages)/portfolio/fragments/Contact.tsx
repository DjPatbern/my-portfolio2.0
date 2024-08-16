import { contactIcon, socialIcons } from "@/src/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col  my-10">
      <p className="underline font-bold mb-5">CONTACT ME VIA:</p>
      <div className="flex gap-5">
        {socialIcons.map((social, index) => (
          <Link href={social.url} target="_blank" key={index}>
            <Image
              src={social.img}
              width={30}
              height={30}
              alt="social icon"
              className="rounded-full"
            />
          </Link>
        ))}
      </div>
      <div className="flex mt-5 flex-col">
        {contactIcon.map((contact, index) => (
          <div className="flex gap-1.5 items-center justify-center" key={index}>
            <Image
              src={contact.img}
              width={24}
              height={24}
              alt="contact icon"
              className="rounded-full"
            />
            <p className="text-xs">{contact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
