import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

function App() {
  const [message, setMessage] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <PaperAirplaneIcon className="h-16 w-16 text-amber-800 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-amber-900 mb-2 font-serif">TÉLÉGRAMME</h1>
          <p className="text-amber-900">Service de messagerie rapide et officiel</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-amber-200">
          {sent ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">TÉLÉGRAMME ENVOYÉ!</h2>
              <p className="text-gray-900">Votre message a été transmis avec succès.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b-2 border-amber-200 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium text-gray-900 uppercase tracking-wide">
                      À:
                    </label>
                    <input
                      type="text"
                      id="to"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="from" className="block text-sm font-medium text-gray-900 uppercase tracking-wide">
                      De:
                    </label>
                    <input
                      type="text"
                      id="from"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 uppercase tracking-wide">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 font-mono text-gray-900"
                  required
                />
                <p className="mt-2 text-sm text-gray-600">
                  {message.length} caractères utilisés
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-amber-200">
                <p className="text-sm text-gray-900">
                  Prix: 0.50₣ par mot
                </p>
                <button
                  type="submit"
                  className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  ENVOYER LE TÉLÉGRAMME
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-900">
          <p>Service disponible 24h/24 - 7j/7</p>
          <p className="mt-2">© 2023 Service des Télégrammes</p>
        </div>
      </div>
    </div>
  );
}

export default App;