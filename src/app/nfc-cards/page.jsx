import Wrapper from "@/layouts/wrapper";
import Nfc from "@/screens/nfcCards";

export const metadata = {
  title: "Enhance Client Trust with NFC Cards by Framespik",
  description:
    "Share cloud-stored data securely with NFC cards. Clients can easily access their data by tapping the card, ensuring secure access and enhancing your brand's professionalism.",
  openGraph: {
    title: "Enhance Client Trust with NFC Cards by Framespik",
    description:
      "Framespik’s NFC cards offer secure, password-protected access to cloud-stored data, building client trust while elevating your brand’s professionalism with modern technology.",
    url: "https://framespik.com/nfc-cards",
    image: "https://framespik.com/images/nfc-cards-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhance Client Trust with NFC Cards by Framespik",
    description:
      "Improve client trust and brand professionalism with NFC cards that provide secure, easy access to cloud data, ensuring privacy and security.",
    image: "https://framespik.com/images/nfc-cards-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

const nfcPage = () => {
  return (
    <Wrapper>
      <Nfc />
    </Wrapper>
  );
};

export default nfcPage;
