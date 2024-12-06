import React from "react";

const ContactForm1 = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-5 sm:px-10">
     
      <form className="space-y-5 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Sie haben noch Fragen?</h2>
      <p className="mb-8">
        Hier können Sie uns gerne eine schriftliche Mitteilung senden. Unser Service-Team kümmert sich dann schnellstmöglich um die Beantwortung Ihrer E-Mail. Sie benötigen eine direkte Antwort? Kein Problem! Nutzen Sie einfach eine unserer weiteren Kontaktmöglichkeiten weiter unten.
      </p>
        <div>
          <label className="block mb-2" htmlFor="help-topic">
            Wobei können wir Ihnen helfen? *
          </label>
          <select
            id="help-topic"
            className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
            required
          >
            <option value="">- Bitte wählen -</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2" htmlFor="company">
              Unternehmen *
            </label>
            <input
              type="text"
              id="company"
              className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="firstname">
              Vorname *
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="lastname">
              Nachname *
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="email">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="phone">
              Telefonnummer *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2" htmlFor="message">
            Wie können wir Ihnen helfen? *
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 rounded border border-gray-300 text-black shadow-2xl"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="marketing-consent"
              className="mr-2"
            />
            <label htmlFor="marketing-consent">
              Ja, ich möchte von ecotel kontaktiert werden. Diese Einwilligung kann ich jederzeit widerrufen.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              className="mr-2"
              required
            />
            <label htmlFor="privacy-policy">
              Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen.
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2">Friendly Captcha *</label>
          <div className="bg-white text-black p-3 rounded">Anti-Roboter-Verifizierung</div>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600"
        >
          Absenden
        </button>
      </form>
    </div>
  );
};

export default ContactForm1;
