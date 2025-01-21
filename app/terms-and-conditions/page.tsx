import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#acceptance" className="text-blue-600 hover:underline">
              Acceptance of Terms
            </a>
          </li>
          <li>
            <a href="#changes" className="text-blue-600 hover:underline">
              Changes to Terms
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#account" className="text-blue-600 hover:underline">
              User Accounts
            </a>
          </li>
          <li>
            <a href="#products" className="text-blue-600 hover:underline">
              Products and Pricing
            </a>
          </li>
          <li>
            <a href="#orders" className="text-blue-600 hover:underline">
              Orders and Payments
            </a>
          </li>
          <li>
            <a href="#shipping" className="text-blue-600 hover:underline">
              Shipping and Delivery
            </a>
          </li>
          <li>
            <a href="#returns" className="text-blue-600 hover:underline">
              Returns and Refunds
            </a>
          </li>
          <li>
            <a href="#intellectual" className="text-blue-600 hover:underline">
              Intellectual Property
            </a>
          </li>
          <li>
            <a href="#disclaimer" className="text-blue-600 hover:underline">
              Disclaimer of Warranties
            </a>
          </li>
          <li>
            <a href="#limitation" className="text-blue-600 hover:underline">
              Limitation of Liability
            </a>
          </li>
          <li>
            <a
              href="#indemnification"
              className="text-blue-600 hover:underline"
            >
              Indemnification
            </a>
          </li>
          <li>
            <a href="#governing" className="text-blue-600 hover:underline">
              Governing Law
            </a>
          </li>
          <li>
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact Information
            </a>
          </li>
        </ul>
      </div>

      <section id="acceptance" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms and Conditions and all applicable laws and regulations. If you
          do not agree with any part of these terms, you may not use our
          website.
        </p>
      </section>

      <section id="changes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will always
          post the most current version on our website. By continuing to use the
          site after changes have been made, you accept and agree to the
          modified terms.
        </p>
      </section>

      <section id="privacy" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
        <p>
          Your use of our website is also governed by our Privacy Policy. Please
          review our Privacy Policy, which also governs the site and informs
          users of our data collection practices.
        </p>
      </section>

      <section id="account" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
        <p>
          To access certain features of the website, you may be required to
          create an account. You are responsible for maintaining the
          confidentiality of your account and password. You agree to accept
          responsibility for all activities that occur under your account.
        </p>
      </section>

      <section id="products" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Products and Pricing</h2>
        <p>
          We strive to provide accurate product and pricing information, but
          errors may occur. We reserve the right to correct any errors and to
          change or update information at any time without prior notice.
        </p>
      </section>

      <section id="orders" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Orders and Payments</h2>
        <p>
          By placing an order, you are making an offer to purchase. We reserve
          the right to refuse or cancel any order for any reason at any time.
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the website.
        </p>
      </section>

      <section id="shipping" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Shipping and Delivery
        </h2>
        <p>
          Shipping and delivery times may vary based on the product and your
          location. We are not responsible for delays outside our control.
          Please review our Shipping Policy for more details.
        </p>
      </section>

      <section id="returns" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Returns and Refunds</h2>
        <p>
          Please review our Return Policy for information about returning
          products and receiving refunds.
        </p>
      </section>

      <section id="intellectual" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Intellectual Property
        </h2>
        <p>
          The website and its original content, features, and functionality are
          owned by us and are protected by international copyright, trademark,
          patent, trade secret, and other intellectual property or proprietary
          rights laws.
        </p>
      </section>

      <section id="disclaimer" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          10. Disclaimer of Warranties
        </h2>
        <p>
          The website and all information, content, materials, products, and
          services included on or otherwise made available to you through this
          site are provided on an "as is" and "as available" basis.
        </p>
      </section>

      <section id="limitation" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          11. Limitation of Liability
        </h2>
        <p>
          In no event will we be liable for any direct, indirect, incidental,
          consequential, special, or exemplary damages arising from or relating
          to your use of or inability to use the website.
        </p>
      </section>

      <section id="indemnification" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless our company and our
          affiliates, and their respective officers, directors, employees, and
          agents, from and against any claims, liabilities, damages, losses, and
          expenses.
        </p>
      </section>

      <section id="governing" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of [Your Country/State], without regard to its conflict of law
          provisions.
        </p>
      </section>

      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
        <p>For any questions about these Terms, please contact us at:</p>
        <address className="mt-2">
          Krithu Resin Art
          <br />
          Operational Address: #02, Ground Floor, Hallkurke Main Road,
          Basavaraju Complex, Honavalli, Tiptur, Tumakuru, Karnataka Tumakuru
          KARNATAKA 572201
          <br />
          Email:{" "}
          <Link
            href="mailto:contact@example.com"
            className="text-blue-600 hover:underline"
          >
            krithuresinstudio@gmail.com
          </Link>
          <br />
          Phone: +91 7619211187
        </address>
      </section>

      <p className="mt-8 text-sm text-gray-600">Last updated: Jan-2025</p>
    </div>
  );
}
