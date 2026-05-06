import Navbar from "@/components/shared/navbar";
import { getUserDetails } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import Head from "next/head";
import Footer from "@/components/shared/Footer";

const Terms = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const feedback = await getUserDetails(userId);
  const comp = feedback.adminUser;

  return (
    <>
      <Head>
        <title>Terms and Conditions | Giana Turkey Wear</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for Giana Turkey Wear. Learn about our online shopping policies, delivery, returns, exchanges, and customer support."
        />
        <meta
          name="keywords"
          content="Giana Turkey Wear, Terms and Conditions, Turkish fashion, ladies wear, online shopping Kenya, delivery policy, return policy"
        />
        <meta name="author" content="Giana Turkey Wear" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Terms and Conditions | Giana Turkey Wear"
        />
        <meta
          property="og:description"
          content="Learn about Giana Turkey Wear's Terms and Conditions for online shopping, delivery, returns, exchanges, and customer support."
        />
        <meta
          property="og:url"
          content="https://gianaturkeywear.co.ke/terms"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gianaturkeywear.co.ke/assets/images/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms and Conditions | Giana Turkey Wear"
        />
        <meta
          name="twitter:description"
          content="Explore Giana Turkey Wear's Terms and Conditions for shopping, delivery, returns, and exchanges."
        />
        <meta
          name="twitter:image"
          content="https://gianaturkeywear.co.ke/assets/images/logo.png"
        />

        <link rel="canonical" href="https://gianaturkeywear.co.ke/terms" />
      </Head>

      <div className="z-10 top-0 fixed w-full">
        <Navbar userstatus="User" comp={comp} userId={userId} />
      </div>

      <div className="max-w-3xl mx-auto flex mt-20 p-1">
        <div className="hidden lg:inline mr-5"></div>

        <div className="flex-1">
          <div className="rounded-[20px] bg-white max-w-6xl mx-auto lg:flex-row mt-0 p-1 justify-center">
            <div className="p-6 bg-white text-gray-800 max-w-4xl mx-auto rounded-[20px] border">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Terms and Conditions for Giana Turkey Wear
              </h1>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Effective Date:</strong> May 6, 2026
              </p>

              <p className="mb-4">
                Welcome to <strong>Giana Turkey Wear</strong>. These Terms and
                Conditions govern your use of our website{" "}
                <strong>
                  <a
                    href="https://gianaturkeywear.co.ke"
                    className="text-teal-600 hover:underline"
                  >
                    gianaturkeywear.co.ke
                  </a>
                </strong>{" "}
                and the purchase of our products. By accessing our website or
                placing an order, you agree to comply with these Terms.
              </p>

              <h2 className="text-lg font-semibold mb-2">
                1. General Overview
              </h2>
              <p className="mb-4">
                Giana Turkey Wear sells elegant Turkish-inspired fashion,
                ladies&apos; wear, and carefully selected clothing collections.
                Our online store allows customers to browse products, place
                orders, and arrange delivery.
              </p>

              <h2 className="text-lg font-semibold mb-2">2. Use of Website</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  You must provide accurate information when placing an order.
                </li>
                <li>
                  Product details, prices, and availability may be updated
                  without notice.
                </li>
                <li>
                  Misuse of the website, including unauthorized access or
                  tampering with data, is strictly prohibited.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-2">
                3. Orders and Payments
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  All prices listed on the website are in Kenyan Shillings
                  unless stated otherwise.
                </li>
                <li>
                  Orders are processed after payment confirmation.
                </li>
                <li>
                  Delivery charges, where applicable, will be communicated or
                  displayed before order completion.
                </li>
                <li>
                  We may cancel or decline an order if an item is unavailable,
                  payment is incomplete, or order details are incorrect.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-2">4. Delivery Policy</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Giana Turkey Wear delivers orders using available courier or
                  parcel delivery services.
                </li>
                <li>
                  Delivery timelines may vary depending on location, courier
                  availability, and public holidays.
                </li>
                <li>
                  Customers are responsible for providing the correct phone
                  number and delivery location.
                </li>
                <li>
                  We are not liable for delayed or failed delivery caused by
                  incorrect customer information.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-2">
                5. Return and Exchange Policy
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Returns or exchanges may be accepted where:
                  <ul className="list-disc ml-6">
                    <li>The wrong item was delivered.</li>
                    <li>The item was damaged or defective on delivery.</li>
                    <li>There is a confirmed size or fitting issue.</li>
                  </ul>
                </li>
                <li>
                  Return or exchange requests should be made within 3 days of
                  receiving the item.
                </li>
                <li>
                  Items must be unused, unworn, clean, and returned with their
                  original packaging or tags where applicable.
                </li>
                <li>
                  Delivery charges for returns or exchanges are non-refundable,
                  unless the issue was caused by our error.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-2">6. Product Images</h2>
              <p className="mb-4">
                We make every effort to display product images, colors, and
                descriptions accurately. However, slight differences may occur
                due to lighting, photography, screen settings, or supplier
                variations.
              </p>

              <h2 className="text-lg font-semibold mb-2">7. Privacy Policy</h2>
              <p className="mb-4">
                Giana Turkey Wear respects your privacy. Personal information
                collected during shopping is used for order processing,
                communication, delivery, and customer support. We do not sell
                your personal information.
              </p>

              <h2 className="text-lg font-semibold mb-2">
                8. Limitation of Liability
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Giana Turkey Wear is not liable for indirect or consequential
                  losses arising from use of the website or products purchased.
                </li>
                <li>
                  Our responsibility is limited to the value of the purchased
                  item where a valid issue is confirmed.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-2">9. Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by the laws of Kenya. Any disputes will
                be handled under the applicable Kenyan legal process.
              </p>

              <h2 className="text-lg font-semibold mb-2">10. Amendments</h2>
              <p className="mb-4">
                Giana Turkey Wear may update these Terms from time to time.
                Continued use of the website after changes are posted means you
                accept the updated Terms.
              </p>

              <h2 className="text-lg font-semibold mb-2">
                11. Contact Information
              </h2>
              <p className="mb-4">
                For questions, support, returns, or exchanges, contact us using
                the details below:
              </p>

              <p className="mb-4">
                <strong>Giana Turkey Wear</strong>
                <br />
                Website:{" "}
                <a
                  href="https://gianaturkeywear.co.ke"
                  className="text-teal-600 hover:underline"
                >
                  gianaturkeywear.co.ke
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:support@gianaturkeywear.co.ke"
                  className="text-teal-600 hover:underline"
                >
                  support@gianaturkeywear.co.ke
                </a>
                <br />
                Phone: {comp?.phone ?? ""}
                <br />
                Location: {comp?.businessaddress ?? ""}
              </p>

              <p className="text-center font-semibold mt-4">
                By purchasing from Giana Turkey Wear, you agree to these Terms
                and Conditions. Thank you for choosing us for your fashion needs.
              </p>
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

export default Terms;