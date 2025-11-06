import PriceList from "../svg/price-list";

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";
const price_data_home_one = [
  // 5-Year Basic Plan
  {
    id: 1,
    img: pric_img_1,
    title: "Basic Plan",
    description: <>5 Years of Secure Backup</>,
    cls: "",
    pric: "99.00",
    price_feature: [
      {
        list: "View on Any Device for 5 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads ",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Send Links ",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Apply Watermarks ",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  // 10-Year Premium Plan
  {
    id: 2,
    img: pric_img_2,
    title: "Premium Plan",
    description: <>10 Years of Secure Backup (Recommended)</>,
    cls: "active",
    pric: "199.00",
    price_feature: [
      {
        list: "View on Any Device for 10 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send Links ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Apply Watermarks ",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  // 15-Year Ultra Premium Plan
  {
    id: 3,
    img: pric_img_3,
    title: "Ultra Premium Plan",
    description: <>15 Years of Secure Backup</>,
    cls: "",
    pric: "299.00",
    price_feature: [
      {
        list: "View on Any Device for 15 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send Links ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Apply Watermarks ",
        icon: <PriceList />,
        cls: "",
      },
    ],
  },
  // 5-Year Basic Plan (Yearly Pricing)
  {
    id: 4,
    img: pric_img_1,
    title: "Basic Plan",
    description: <>5 Years of Secure Backup</>,
    cls: "",
    pric: "99.00",
    price_feature: [
      {
        list: "View on Any Device for 5 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads ",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Send Links ",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Apply Watermarks ",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  // 10-Year Premium Plan (Yearly Pricing)
  {
    id: 5,
    img: pric_img_2,
    title: "Premium Plan",
    description: <>10 Years of Secure Backup (Recommended)</>,
    cls: "active",
    pric: "199.00",
    price_feature: [
      {
        list: "View on Any Device for 10 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send Links",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Apply Watermarks",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  // 15-Year Ultra Premium Plan (Yearly Pricing)
  {
    id: 6,
    img: pric_img_3,
    title: "Ultra Premium Plan",
    description: <>15 Years of Secure Backup</>,
    cls: "",
    pric: "299.00",
    price_feature: [
      {
        list: "View on Any Device for 15 Years",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send the Data Backup Card ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Unlimited Downloads ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Send Links ",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Apply Watermarks ",
        icon: <PriceList />,
        cls: "",
      },
    ],
  },
];

export default price_data_home_one;
