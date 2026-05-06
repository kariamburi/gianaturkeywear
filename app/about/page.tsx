import Navbar from "@/components/shared/navbar";
import SettingsEdit from "@/components/shared/SettingsEdit";
import { getUserById, getUserDetails } from "@/lib/actions/user.actions";
import { Toaster } from "@/components/ui/toaster";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { auth } from "@clerk/nextjs/server";

import Image from "next/image";
import BottomNavigation from "@/components/shared/BottomNavigation";
import Footersub from "@/components/shared/Footersub";
import Head from "next/head";
import Footer from "@/components/shared/Footer";
const About = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const feedback = await getUserDetails(userId);
  const comp = feedback.adminUser;
  const user = feedback.user;
  return (
    <>
      <Head>
        <title>About Us - Giana Turkey Wear</title>
        <meta
          name="description"
          content="Discover Giana Turkey Wear, your trusted destination for elegant Turkish fashion, ladies wear, and stylish collections in Kenya."
        />
        <meta
          name="keywords"
          content="Giana Turkey Wear, Turkish fashion Kenya, ladies wear, elegant fashion, Turkey clothes"
        />
        <meta name="author" content="Giana Turkey Wear" />
      </Head>

      <div className="z-10 top-0 fixed w-full">
        <Navbar userstatus="User" userId={userId} comp={comp} />
      </div>

      <div className="max-w-3xl mx-auto flex mt-20 p-1">
        <div className="hidden lg:inline mr-5"></div>

        <div className="flex-1">
          <div className="rounded-[20px] bg-white max-w-6xl mx-auto lg:flex-row mt-0 p-1 justify-center">
            <div>
              <div className="max-w-4xl mx-auto p-6 bg-white border rounded-[20px]">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                  About Giana Turkey Wear
                </h1>

                <p className="text-gray-700 mb-6">
                  Welcome to <strong>Giana Turkey Wear</strong>, your destination for elegant,
                  stylish, and high-quality Turkish fashion. We bring you beautiful ladies&apos;
                  collections designed to make you feel confident, classy, and unique.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Our Story
                </h2>

                <p className="text-gray-700 mb-6">
                  Giana Turkey Wear was created to make premium Turkish fashion easily accessible
                  to customers in Kenya. Our collections are carefully selected for women who
                  love elegance, comfort, and modern style.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  What We Offer
                </h2>

                <ul className="list-disc pl-5 text-gray-700 mb-6">
                  <li>
                    <strong>Elegant Turkish Wear:</strong> Beautiful outfits inspired by modern
                    Turkish fashion.
                  </li>
                  <li>
                    <strong>Ladies Collections:</strong> Stylish dresses, casual wear, official
                    wear, and statement pieces.
                  </li>
                  <li>
                    <strong>Quality Fashion:</strong> Carefully selected items with great fabric,
                    finishing, and comfort.
                  </li>
                  <li>
                    <strong>Easy Shopping:</strong> Browse and shop our latest arrivals online
                    anytime.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Our Commitment
                </h2>

                <p className="text-gray-700 mb-6">
                  At Giana Turkey Wear, we are committed to quality, affordability, and excellent
                  customer service. We want every customer to enjoy a smooth shopping experience
                  and receive outfits they truly love.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Why Choose Us?
                </h2>

                <p className="text-gray-700 mb-6">
                  We focus on elegant fashion, trusted quality, and carefully curated collections.
                  Whether you need something classy for work, casual outings, church, events, or
                  special occasions, Giana Turkey Wear has something beautiful for you.
                </p>
                <ul className="list-none pl-0 text-gray-700 mt-4">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@gianaturkeywear.co.ke"
                      className="text-teal-600 underline"
                    >
                      support@gianaturkeywear.co.ke
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong> {comp.phone}
                  </li>
                  <li>
                    <strong>Visit Us:</strong> {comp.businessaddress}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100">
        <Footer comp={comp} />
      </footer>
    </>
  );
};
export default About;
