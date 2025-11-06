import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Windows from "../../public/assets/img/hero/windows.svg";
import Mac from "../../public/assets/img/hero/apple.svg";
import Linux from "../../public/assets/img/hero/linux.svg";
import Android from "../../public/assets/img/hero/playstore.svg";
import Ios from "../../public/assets/img/hero/appstore.svg";

const brwoser_data = [
  { img: Windows, title: "Windows", link: "/download#windows" },
  { img: Mac, title: "Mac OS", link: "/download#mac" },
  { img: Linux, title: "Linux", link: "/download#linux" },
  { img: Android, title: "Android", link: "#" },
  { img: Ios, title: "IOS", link: "#" },
];

const detectDesktopOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "Windows";
  if (userAgent.includes("mac")) return "Mac OS";
  if (userAgent.includes("linux") && !userAgent.includes("android"))
    return "Linux"; // Exclude Android (mobile)

  return null; // No desktop OS detected
};

const Brwoser = ({ textClass = "text-white" }) => {
  const [os, setOS] = useState(null);

  useEffect(() => {
    setOS(detectDesktopOS());
  }, []);

  return (
    <>
      {brwoser_data
        .filter((item) => {
          // Keep Play Store and App Store untouched
          if (item.title === "Android" || item.title === "IOS") return true;
          // Show only detected desktop OS
          return item.title === os;
        })
        .map((item, i) => (
          <div key={i} className="tp-hero-browser-item">
            <Link href={item.link} target="_blank">
              <Image src={item.img} alt={`${item.title} icon`} />
            </Link>
            <p className={`d-none d-sm-block ${textClass}`}>{item.title}</p>
          </div>
        ))}
    </>
  );
};

export default Brwoser;
