import img_1 from "../../public/assets/img/blog/blog-1.jpg";
import img_2 from "../../public/assets/img/blog/blog-2.jpg";
import img_3 from "../../public/assets/img/blog/blog-3.jpg";

import author_img_1 from "../../public/assets/img/blog/blog-avata-1.png";
import author_img_2 from "../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../public/assets/img/blog/blog-avata-3.png";

import img_4 from "../../public/assets/img/blog/blog-4-1.jpg";
import img_5 from "../../public/assets/img/blog/blog-4-2.jpg";

const blog_data = [
  // home 03
  {
    id: 1,
    img: img_1,
    category: "CRM Software",
    color: "1",
    date: "28 April, 2023",
    title: <>How Framespik Revolutionizes Photography Business</>,
    author_img: author_img_1,
    author_name: "Arjun Patel",
    job_title: "Wedding Photographer",
    description: (
      <>
        "Framespik has transformed my photography business. It has streamlined
        client bookings and made financial tracking effortless."
      </>
    ),
  },
  {
    id: 2,
    img: img_2,
    category: "Staff Organization",
    color: "2",
    date: "28 April, 2023",
    title: <>5 Essential Features of Framespik for Photographers</>,
    author_img: author_img_2,
    author_name: "Priya Sharma",
    job_title: "Portrait Photographer",
    description: (
      <>
        "As a portrait photographer, managing multiple clients was challenging.
        Framespik simplified my workflow significantly."
      </>
    ),
  },
  {
    id: 3,
    img: img_3,
    category: "Cloud Management",
    color: "3",
    date: "28 April, 2023",
    title: <>Boost Your Photography Sales with Framespik's Invoicing Tools</>,
    author_img: author_img_3,
    author_name: "Rajesh Kumar",
    job_title: "Commercial Photographer",
    description: (
      <>
        "Framespik's invoicing feature has been a game-changer for my business.
        I can now focus more on my art and less on paperwork."
      </>
    ),
  },
  {
    id: 4,
    img: img_4,
    category: "Blog",
    color: "",
    date: "10 min",
    title: <>Maximizing Efficiency with Framespik</>,
    description: (
      <>
        Discover how Framespik helps photographers manage their workflow and
        increase productivity.
      </>
    ),
    author_img: author_img_3,
    author_name: "Ananya Desai",
    job_title: "Fashion Photographer",
  },
  {
    id: 5,
    img: img_5,
    category: "Blog",
    color: "",
    date: "24 min",
    title: <>Client Management Made Easy with Framespik</>,
    description: (
      <>
        Learn how Framespik's features help photographers maintain strong
        relationships with clients.
      </>
    ),
    author_img: author_img_3,
    author_name: "Vikram Malhotra",
    job_title: "Wedding Planner",
  },

  // anything here
];
export default blog_data;
