import React from 'react';
import Image from 'next/image';

function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <header className="w-full mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-500">Xbox Support</h1>
        <p className="text-lg text-gray-300">Need help? We’ve got you covered. Find solutions to common issues or get in touch with our support team.</p>
      </header>

      <section className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <Image 
            src="./New.jpg" 
            alt="Controller Support" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Controller Issues</h2>
          <p className="text-gray-400">Get help with controller connectivity and functionality.</p>
        </div>

       

        <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <Image 
            src="./gamepass.jpg" 
            alt="Game Pass Support" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Game Pass Support</h2>
          <p className="text-gray-400">Learn how to make the most of your Xbox Game Pass subscription.</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <Image 
            src="/icons/account.svg" 
            alt="Account Support" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Account Management</h2>
          <p className="text-gray-400">Manage your account settings and recover lost credentials.</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <Image 
            src="/icons/support.svg" 
            alt="Contact Support" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p className="text-gray-400">Reach out to our support team for personalized assistance.</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
          <Image 
            src="./2.jpg" 
            alt="Updates and News" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Updates and News</h2>
          <p className="text-gray-400">Stay informed about the latest updates and features.</p>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2025 Xbox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SupportPage;
