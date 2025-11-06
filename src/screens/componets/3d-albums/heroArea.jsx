import Image from "next/image";
import Link from "next/link";
import React from "react";

// img import

import bg_img from "@/assets/img/payment/background.png";
import payment_img_1 from "@/assets/img/payment/image.png";
import payment_img_2 from "@/assets/img/payment/get-paid.png";

const payment_content = {
  title: (
    <>
      You'll love our <br /> amazing 3D albums.
    </>
  ),
  sub_title: <>Create, customize, and share your stunning 3D albums</>,

  box_3_title: (
    <>
      Interactive 3D Album <br /> Creation Tools.
    </>
  ),
  box_3_des: (
    <>
      Upload images, arrange them, and transform your photos into an interactive
      3D experience.
    </>
  ),
  box_3_btn: "Explore 3D Albums",
};

const { title, sub_title, box_3_title, box_3_des, box_3_btn } = payment_content;

const PaymentArea = () => {
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

export default PaymentArea;
