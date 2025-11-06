import "./globals.scss";
import ToastProvider from "@/data/toastContainer";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-dm",
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mont",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: ["--tp-ff-body", "--tp-ff-heading"],
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-urban",
});

export const metadata = {
  title: "Simplifying Photography Business Management - framespik",
  description:
    "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
  openGraph: {
    title: "Simplifying Photography Business Management - framespik",
    description:
      "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
    url: "https://framespik.com",
    image: "https://framespik.com/images/home-thumb.jpg",
    type: "website",
    site_name: "Framespik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplifying Photography Business Management - framespik",
    description:
      "Framespik is a powerful platform that helps photographers manage their operations, enhance client experience, and grow their business.",
    image: "https://framespik.com/images/home-thumb.jpg",
    site: "@framespik",
    creator: "@framespik",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${plusJakartaSans.variable} ${urbanist.variable}`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
