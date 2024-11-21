import React from 'react';

const Impressum = () => {
  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-2xl rounded-xl border-0 border-gray-600 p-8">
        <h1 className="text-3xl font-bold text-gray-50 mb-6 border-b-2 pb-3">Impressum</h1>

        {/* Company Information */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">Company Information</h2>
          <div className="text-gray-50 space-y-4">
            <p>
              <strong>Global World IK LLC & GWIK LLC</strong>
              <br />
              5203 Juan Tabo Blvd Ne Suite 2b
              <br />
              Albuquerque, New Mexico 87111, USA
              <br />
              <a href="mailto:info@global-world.us" className="text-gray-100 hover:underline">
                info@global-world.us
              </a>
              <br />
              <a href="mailto:info@gwik.us" className="text-gray-100 hover:underline">
                info@gwik.us
              </a>
            </p>
          </div>
        </section>

        {/* Regulatory Authority */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">Regulatory Authority</h2>
          <div className="text-gray-50 space-y-4">
            <p>
              <strong>Federal Network Agency for Electricity, Gas, Telecommunications, Post, and Railways</strong>
              <br />
              Tulpenfeld 4, 53113 Bonn, Germany
            </p>
          </div>
        </section>

        {/* Contact Point for Authorities and Users */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">
            Contact Point for Authorities and Users (Art. 11 & 12 DSA)
          </h2>
          <div className="text-gray-50 space-y-4">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:dsa-3utelecom@3u.net" className="text-gray-100 hover:underline">
                dsa-3utelecom@3u.net
              </a>
              <br />
              <strong>Phone:</strong> +49 6421 999-0
              <br />
              <strong>Fax:</strong> +49 6421 999-1111
              <br />
              <strong>Languages:</strong> German, English
            </p>
          </div>
        </section>

        {/* Notice and Redress Procedure (Art. 16 DSA) */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">
            Notice and Redress Procedure (Art. 16 DSA)
          </h2>
          <div className="text-gray-50 space-y-4">
            <p>
              Reports of illegal content can be submitted via email to:{' '}
              <a href="mailto:dsa-3utelecom@3u.net" className="text-gray-100 hover:underline">
                dsa-3utelecom@3u.net
              </a>
            </p>
            <p>Your report must include the following elements:</p>
            <ul className="list-disc list-inside text-gray-50">
              <li>
                A sufficiently substantiated explanation of why you consider the information to be
                illegal content.
              </li>
              <li>
                Clear identification of the exact electronic storage location of this information
                (e.g., precise URL).
              </li>
              <li>
                Your name and email address, unless the report pertains to information related to
                crimes listed in Articles 3 to 7 of Directive 2011/93/EU.
              </li>
              <li>
                A declaration stating that you believe in good faith that the information provided
                in the report is correct and complete.
              </li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">Disclaimer</h2>
          <div className="text-gray-50">
            <p>
              Global World GmbH does not guarantee the accuracy, completeness, or quality of the
              provided information. Liability claims regarding damages caused by the use or
              non-use of the information provided or by the use of incorrect or incomplete
              information are excluded unless there is evidence of intentional or grossly negligent
              fault.
            </p>
            <p>
              Despite careful content control, we do not accept liability for external links. The
              content of linked pages is the sole responsibility of their operators.
            </p>
          </div>
        </section>

        {/* Copyright */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">Copyright</h2>
          <div className="text-gray-50">
            <p>
              All offered information may not be disseminated or published, even in part, without
              the written consent of Global World GmbH.
            </p>
          </div>
        </section>

        {/* Image Credits */}
        <section>
          <h2 className="text-xl font-bold text-yellow-400 mb-3 uppercase">Image Credits</h2>
          <div className="text-gray-50">
            <p>
              Various images and graphics provided by sources such as Freepik, Vecteezy, and
              iStock.com are used on this website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impressum;
