import React from "react";

const Datenschutz = () => {
  return (
    <div className="p-6 font-sans bg-gray-800 text-gray-700">
      <div className="max-w-5xl mx-auto  space-y-8">
        <h1 className="text-4xl font-bold text-yellow-400">Impressum</h1>

        {/* Company Information */}
        <section className="space-y-2">
          <h2 className="text-2xl text-yellow-400 font-semibold">Company Information</h2>
          <p class="text-white">
            <strong>Global World IK LLC & GWIK LLC</strong>
            <br />
            5203 Juan Tabo Blvd Ne Suite 2b,
            <br />
            Albuquerque, New Mexico 87111 USA
          </p>
          <p class="text-white">
            <strong>Phone:</strong> +49(0)1722772888
            <br />
            <strong>Email:</strong> <a href="mailto:info@global-world.us">info@global-world.us</a>
          </p>
        </section>

        {/* Datenschutz Section */}
        <section className="space-y-2">
          <h2 className="text-2xl text-yellow-400 font-semibold">Datenschutz</h2>
          <p class="text-white">
            This privacy policy informs you about the processing of your personal
            data by us, our data protection principles, and your rights as a data
            subject.
          </p>
          <p class="text-white">
            This privacy policy applies to the use of our websites at
            www.3utelecom.de and www.uuu.de, for the establishment and use of a
            telecommunications contract with us, and for users accessing services
            in our telecommunications network, including third-party services via
            the telecommunications connection provided by us (e.g., 0800 services
            from third-party providers). It also applies to data collected for
            the provision of data center services, and our online customer portal.
          </p>
          <p class="text-white">
            <strong>Responsible Party:</strong>
            <br />
            3U TELECOM GmbH
            <br />
            Frauenbergstraße 31–33
            <br />
            35039 Marburg
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@3utelecom.de">info@3utelecom.de</a>
            <br />
            <strong>Phone:</strong> +49 6421 3000 503
          </p>
          <p class="text-white">
            <strong>Data Protection Officer:</strong>
            <br />
            3U TELECOM GmbH
            <br />
            Datenschutzbeauftragter
            <br />
            Frauenbergstraße 31–33
            <br />
            35039 Marburg
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:datenschutz@3utelecom.de">datenschutz@3utelecom.de</a>
          </p>
          <p class="text-white">
            We process personal data collected in accordance with the EU General
            Data Protection Regulation (GDPR), the German Federal Data Protection
            Act (BDSG), and the Telecommunications and Digital Services Data
            Protection Act (TDDDG).
          </p>
          <h3 className="text-xl text-yellow-400 font-semibold">1. Data Collection and Sources</h3>
          <p class="text-white">
            We collect the data you provide when using our websites, including
            when logging into our online customer portal. We also collect data in
            connection with the creation and execution of a customer relationship
            (e.g., for telecommunications services), traffic data related to your
            use of our telecommunications services, and data related to billing.
            We may also collect data when you enter into contact or supplier
            relationships or apply for positions with us.
          </p>
          <h3 className="text-xl text-yellow-400 font-semibold">2. Use and Disclosure of Personal Data</h3>
          <p class="text-white">
            Your data will be used to enable you to use our website, process your
            contracts, and facilitate billing. In some cases, your data may be
            shared with other service providers to ensure the fulfillment of services
            (e.g., if you use third-party services through our provided connection).
            We will never sell or market your data to third parties.
          </p>
          <h3 className="text-xl text-yellow-400 font-semibold">3. Third-Party Data Transfers</h3>
          <p class="text-white">
            If necessary, we may transfer data to third-party service providers
            under specific conditions or to comply with legal obligations. Any
            transfer of data outside the EU will be done in compliance with the EU
            GDPR standards.
          </p>
          <p class="text-white">
            For more details, please refer to our complete privacy policy on our
            website.
          </p>
        </section>

        {/* Legal Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-2xl text-yellow-400 font-semibold">Legal Disclaimer</h2>
          <p class="text-white">
            Global World GmbH makes every effort to ensure the accuracy,
            completeness, and timeliness of the information provided. However,
            no liability is assumed for any errors or omissions.
          </p>
          <p class="text-white">
            External links are carefully selected but we are not responsible for
            their content.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;
