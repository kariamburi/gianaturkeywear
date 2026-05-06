import Navbar from "@/components/shared/navbar";
import { getUserDetails } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import Head from "next/head";
import Footer from "@/components/shared/Footer";

const Privacy = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const feedback = await getUserDetails(userId);
  const comp = feedback.adminUser;

  return (
    <>
      <Head>
        <title>Privacy Policy - Giana Turkey Wear</title>
        <meta
          name="description"
          content="Read Giana Turkey Wear's Privacy Policy to understand how we collect, use, and protect your personal information when you shop with us."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Giana Turkey Wear, Turkish fashion, ladies wear, customer privacy, data protection"
        />
        <meta name="author" content="Giana Turkey Wear" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Privacy Policy - Giana Turkey Wear"
        />
        <meta
          property="og:description"
          content="Learn how Giana Turkey Wear protects your privacy and handles your personal information."
        />
        <meta
          property="og:url"
          content="https://gianaturkeywear.co.ke/privacy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gianaturkeywear.co.ke/assets/images/logo.png"
        />

        <link rel="canonical" href="https://gianaturkeywear.co.ke/privacy" />
      </Head>

      <div className="z-10 top-0 fixed w-full">
        <Navbar userstatus="User" comp={comp} userId={userId} />
      </div>

      <div className="max-w-3xl mx-auto flex mt-20 p-1">
        <div className="hidden lg:inline mr-5"></div>

        <div className="flex-1">
          <div className="rounded-[20px] bg-white max-w-6xl mx-auto lg:flex-row mt-0 p-1 justify-center">
            <div className="container mx-auto p-6 border text-gray-800 rounded-[20px]">
              <h1 className="text-3xl font-bold text-center mb-6 text-black">
                Privacy Policy for Giana Turkey Wear
              </h1>

              <p className="text-sm text-center mb-4 text-gray-500">
                Last Updated: May 6, 2026
              </p>

              <p className="mb-4">
                Giana Turkey Wear is committed to protecting the privacy of our
                customers and website users. This Privacy Policy explains how we
                collect, use, and safeguard your information when you visit our
                website,{" "}
                <a
                  href="https://gianaturkeywear.co.ke"
                  className="text-teal-600 underline"
                >
                  gianaturkeywear.co.ke
                </a>
                .
              </p>

              <p className="mb-6">
                By accessing or using our website, creating an account, placing
                an order, or contacting us, you agree to the practices described
                in this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                1. Information We Collect
              </h2>

              <p className="mb-4">
                We may collect the following types of information:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>
                  <b>Personal Information:</b> Your name, phone number, email
                  address, delivery address, and order details.
                </li>
                <li>
                  <b>Payment Information:</b> Payment confirmation details
                  required to process your order. We do not store sensitive
                  payment credentials.
                </li>
                <li>
                  <b>Account Information:</b> Login details provided through our
                  authentication provider where applicable.
                </li>
                <li>
                  <b>Non-Personal Information:</b> Browser type, device
                  information, IP address, pages visited, and general website
                  usage data.
                </li>
                <li>
                  <b>Cookies and Tracking Technologies:</b> We may use cookies
                  to improve website performance, remember preferences, and
                  enhance your shopping experience.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 text-black">
                2. How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 mb-6">
                <li>To process and confirm your orders.</li>
                <li>To arrange delivery or pickup of purchased items.</li>
                <li>To contact you about your order, delivery, or inquiry.</li>
                <li>To provide customer support and handle returns or exchanges.</li>
                <li>To improve our products, website, and customer experience.</li>
                <li>
                  To send updates, offers, or promotional messages where you
                  have opted in.
                </li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 text-black">
                3. How We Protect Your Information
              </h2>

              <p className="mb-6">
                We use reasonable security measures to protect your personal
                information from unauthorized access, misuse, loss, or
                disclosure. However, no online platform is completely risk-free,
                and users should also keep their login details secure.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                4. Sharing of Information
              </h2>

              <p className="mb-4">
                We do not sell your personal information. We may only share your
                information where necessary, including:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>With courier or delivery partners to complete your order.</li>
                <li>With payment providers to confirm payments.</li>
                <li>With service providers who help operate our website.</li>
                <li>Where required by law or legal process.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 text-black">
                5. Your Rights
              </h2>

              <ul className="list-disc pl-6 mb-6">
                <li>
                  <b>Access:</b> You may request details of the personal
                  information we hold about you.
                </li>
                <li>
                  <b>Correction:</b> You may ask us to update or correct your
                  personal information.
                </li>
                <li>
                  <b>Deletion:</b> You may request deletion of your personal
                  information, subject to order records and legal obligations.
                </li>
                <li>
                  <b>Opt-Out:</b> You may unsubscribe from promotional messages
                  where applicable.
                </li>
              </ul>

              <p className="mb-6">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:support@gianaturkeywear.co.ke"
                  className="text-teal-600 underline"
                >
                  support@gianaturkeywear.co.ke
                </a>
                .
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                6. Third-Party Services
              </h2>

              <p className="mb-6">
                Our website may include links or integrations with third-party
                services such as payment providers, delivery partners, analytics
                tools, or social media platforms. These third parties have their
                own privacy policies, and we are not responsible for their
                practices.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                7. Children&apos;s Privacy
              </h2>

              <p className="mb-6">
                Our website is intended for general shopping use and is not
                directed at children. We do not knowingly collect personal data
                from children.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                8. Changes to This Privacy Policy
              </h2>

              <p className="mb-6">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated date.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-black">
                9. Contact Us
              </h2>

              <p className="mb-4">
                For questions, concerns, privacy requests, or customer support,
                contact us at:
              </p>

              <ul className="list-disc pl-6">
                <li>
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:support@gianaturkeywear.co.ke"
                    className="text-teal-600 underline"
                  >
                    support@gianaturkeywear.co.ke
                  </a>
                </li>
                <li>
                  <b>Phone:</b> {comp?.phone ?? ""}
                </li>
                <li>
                  <b>Address:</b> {comp?.businessaddress ?? ""}
                </li>
              </ul>
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

export default Privacy;