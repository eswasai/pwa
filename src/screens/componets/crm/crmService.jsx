import Link from "next/link";
import React from "react";

import service_img_1 from "../../../../public/assets/img/service/sv-icon-3-1.png";
import service_img_2 from "../../../../public/assets/img/service/service-shape-3-1.png";
import Image from "next/image";

// CRM Features cards
import WorkUpdate from "../../../../public/assets/img/crm/crm-service/work-updates.png";
import PaymentRemainder from "../../../../public/assets/img/crm/crm-service/payment.png";
import AnyWhere from "../../../../public/assets/img/crm/crm-service/anywhere.png";
import NfcCard from "../../../../public/assets/img/crm/crm-service/nfc-card.png";
import Schedule from "../../../../public/assets/img/crm/crm-service/schedule.png";
import Memorypage from "../../../../public/assets/img/crm/crm-service/memory-page.png";
import FinanceTrack from "../../../../public/assets/img/crm/crm-service/finance-tracking.png";









const service_content = {
  title: (
    <>
      Framespik CRM <br /> That <span>Empowers Your Business.</span>
    </>
  ),
  btn_text: <>Explore More</>,

  bg_img: "/assets/img/service/service-3-bg.png",
  service_title: "Framespik CRM",
  service_info: (
    <>
      Streamline your workflow, Manage relationships, <br />
      and Convert leads into loyal customers.
    </>
  ),
};

const { title, btn_text, bg_img, service_title, service_info } =
  service_content;

const service_data = [
  {
    id: 1,
    icon: WorkUpdate,
    img: WorkUpdate,
    title: "Work Updates",
    description: <>Get Real-Time Work Updates and Client Notifications</>,
    path: "./work-updates",
    delay: ".9s",
  },
  {
    id: 2,
    icon: PaymentRemainder,
    img: PaymentRemainder,
    title: "Payment Remainders",
    description: <>Seamless Payment Tracking for Organized Invoicing</>,
    path: "./payment-remainders",
    delay: ".9s",
  },
  {
    id: 3,
    icon: AnyWhere,
    img: AnyWhere,
    title: "Any Where View",
    description: <>Access your photos from any device, anytime.</>,
    path: "./payment-remainders",
    delay: ".9s",
  },
  {
    id: 4,
    icon: NfcCard,
    img: NfcCard,
    title: "NFC Card",
    description: <>Share cloud-stored data securely with NFC cards</>,
    path: "./nfc-cards",
    delay: ".9s",
  },
  {
    id: 5,
    icon: Schedule,
    img: Schedule,
    title: "Scheduling",
    description: <>Effortlessly organize events with clear timelines</>,
    path: "./scheduling",
    delay: ".9s",
  },
  {
    id: 6,
    icon: Memorypage,
    img: Memorypage,
    title: "Memory Page",
    description: <>Personalized event content, sharing, and management.</>,
    path: "./memory-page  ",
    delay: ".9s",
  },
  {
    id: 7,
    icon: FinanceTrack,
    img: FinanceTrack,
    title: "Finance Tracking",
    description: <>Comprehensive Payment Tracking and Staff Salary Management</>,
    path: "./track-and-analyze-financee  ",
    delay: ".9s",
  },
];


const CrmService = () => {
  return (
    <>
      <div className="tp-service-area pb-90 z-index mt-80" >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                <h3
                  className="tp-section-title-3 wow tpfadeLeft"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  {title}
                </h3>
                <Link
                  className="tp-btn-blue-lg tp-btn-hover mb-10 alt-color-black wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  href="/download"
                >
                  <span>Download</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-8 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div
                className="tp-service-3-item mb-30 p-relative z-index"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="tp-service-3-icon">
                  <Image src={service_img_1} alt="theme-pure" />
                </div>
                <div className="tp-service-3-content">
                  <span>{service_title}</span>
                  <h4 className="tp-service-3-title-sm">
                    <Link href="/service-details">{service_info}</Link>
                  </h4>
                </div>
                <div className="tp-service-3-btn">
                  <Link className="tp-btn-white-solid" href="/service-details">
                    Learn More
                  </Link>
                </div>
                <div className="tp-service-3-shape">
                  <Image src={service_img_2} alt="theme-pure" />
                </div>
              </div>
            </div>

            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                  <div className="tp-service-sm-icon">
                    <Image
                      style={{ width: "3.5rem" }}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div className="tp-service-sm-content">
                    <span>{item.title}</span>
                    <h3 className="tp-service-sm-title">
                      <Link href={item.path}>{item.description} </Link>
                    </h3>
                    <div className="tp-service-sm-link">
                      <Link href={item.path}>
                        Learn More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CrmService;
