import Image from "next/image";
import Link from "next/link";
import React from "react";

// img import
import shapes_1 from "@/assets/img/payment/qrcode.png";
import shapes_2 from "@/assets/img/payment/mobile.png";
import shapes_3 from "@/assets/img/payment/hand.png";
import shapes_4 from "@/assets/img/payment/coin-1.png";
import shapes_5 from "@/assets/img/payment/coin-2.png";
import shapes_6 from "@/assets/img/payment/payment-3.png";
import shapes_7 from "@/assets/img/payment/message.png";
import bg_img from "@/assets/img/payment/background.png";
import payment_img_1 from "@/assets/img/payment/image.png";
import payment_img_2 from "@/assets/img/payment/get-paid.png";
const payment_content = {
  title: (
    <>
      You'll Have <br /> Everything in Your Hands Easily.
    </>
  ),
  sub_title: <>We've integrated NFC cards with the FrameSpik app.</>,
  box_1: [
    {
      id: 1,
      col: "md-6",
      cls: "2 tpfadeLeft",
      delay: ".3s",
      title: "Tap & Link",
      des: (
        <>
          Tap the NFC card to gather details and enable NFC functionality
          seamlessly.
        </>
      ),
      shapes: [
        {
          id: 1,
          cls: "4",
          img: shapes_1,
        },
        {
          id: 2,
          cls: "5",
          img: shapes_2,
        },
        {
          id: 3,
          cls: "6",
          img: shapes_3,
        },
        {
          id: 4,
          cls: "7",
          img: shapes_4,
        },
        {
          id: 5,
          cls: "8",
          img: shapes_5,
        },
      ],
    },
    {
      id: 2,
      col: "md-6",
      cls: "3 tpfadeRight",
      delay: ".5s",
      title: "Easy to Maintain and Build Trust in Your Brand",
      des: (
        <>
          Effortlessly share the backup link for quick access <br />
          and client engagement.
        </>
      ),
      shapes: [
        {
          id: 1,
          cls: "9",
          img: shapes_6,
        },
        {
          id: 2,
          cls: "11",
          img: shapes_7,
        },
      ],
    },
  ],
  box_3_title: (
    <>
      Easy to Tap on Any Device & <br /> Access the Gallery.
    </>
  ),
  box_3_des: (
    <>
      Effortlessly view the client gallery <br /> and use the Virtual Terminal.
    </>
  ),
  box_3_btn: "Explore More",
};

const { title, sub_title, box_1, box_3_title, box_3_des, box_3_btn } =
  payment_content;

const NfcEnableSteps = () => {
  return (
    <>
      <div id="payment-method" className="tp-payment__area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-payment__title-box text-center mb-55">
                <h3 className="tp-section-title-lg">{title}</h3>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row">
                {box_1.map((item, i) => (
                  <div key={i} className="col-md-6 mb-30">
                    <div
                      className={`tp-payment__item tp-payment__bg-color-${item.cls} p-relative z-index wow `}
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      {item.shapes.map((item, i) => (
                        <div
                          key={i}
                          className={`tp-payment__shape-${item.cls}`}
                        >
                          <Image src={item.img} alt="theme-pure" />
                        </div>
                      ))}

                      <div className="tp-payment__content">
                        <h3 className="tp-payment__title">{item.title}</h3>
                        <p> {item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-12 mb-30">
              <div
                className="tp-payment__item p-relative z-index wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-payment__shape-1">
                  <Image src={bg_img} alt="theme-pure" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="tp-payment__content tp-payment__content-space">
                      <h3 className="tp-payment__title">{box_3_title}</h3>
                      <p>{box_3_des}</p>
                      <Link href="/get-started">
                        {box_3_btn}
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-payment__shape-2">
                      <Image src={payment_img_1} alt="theme-pure" />
                    </div>
                    <div className="tp-payment__shape-3 d-none d-sm-block">
                      <Image src={payment_img_2} alt="theme-pure" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NfcEnableSteps;
