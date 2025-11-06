import Link from "next/link";

const SocialLinks = ({shareUrl, shareText, shareTitle}) => {
  return (
    <>
      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
      >
        <i className="fab fa-facebook"></i>
      </Link>

      {/* Twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
        target="_blank"
      >
        <i className="fab fa-linkedin-in"></i>
      </Link>

      {/* WhatsApp */}
      <Link
        href={`https://api.whatsapp.com/send?phone=919390726366&text=${encodeURIComponent(shareText)} You can read more at - ${shareUrl}`}
        target="_blank"
      >
        <i className="fab fa-whatsapp"></i>
      </Link>

    </>
  );
};

export default SocialLinks;

const copy_right_text = {
  copy_right: (
    <>
      Full Copyright & Design By <Link href="#">@Theme pure</Link> –{" "}
      {new Date().getFullYear()}
    </>
  ),
};
const { copy_right } = copy_right_text;

export const CopyRight = () => {
  return <>{copy_right}</>;
};

// home 04 social link
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1",
  },
  {
    link: "https://www.instagram.com",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "2",
  },

  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "3",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_two.map((link, i) => (
        <Link
          key={i}
          target={link.target}
          className={`icon-color-${link.color}`}
          href={link.link}
        >
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}
    </>
  );
};
