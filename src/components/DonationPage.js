import React, { useState } from 'react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <button onClick={() => window.location.href = '/'}>KU Donations</button>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => window.location.href = '/'} className="text-white hover:text-gray-200">Home</button>
          <button onClick={() => window.location.href = '/about'} className="text-white hover:text-gray-200">About Us</button>
          <button onClick={() => window.location.href = '/programs'} className="text-white hover:text-gray-200">Programs</button>
          <button onClick={() => window.location.href = '/impact'} className="text-white hover:text-gray-200">Impact</button>
          <button onClick={() => window.location.href = '/contact'} className="text-white hover:text-gray-200">Contact</button>
          <button onClick={() => window.location.href = '/faq'} className="text-white hover:text-gray-200">FAQ</button>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Donate Now
          </button>
          <button onClick={() => window.location.href = '/login'} className="text-white hover:text-gray-200">Login</button>
          <button onClick={() => window.location.href = '/signup'} className="text-white hover:text-gray-200">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <p className="mt-2">123 University Rd, Karachi, Pakistan</p>
          <p className="mt-1">Phone: (123) 456-7890</p>
          <p className="mt-1">Email: info@ku.edu</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="mt-2">
            <li><button className="hover:underline" onClick={() => window.location.href = '/privacy'}>Privacy Policy</button></li>
            <li><button className="hover:underline" onClick={() => window.location.href = '/terms'}>Terms of Service</button></li>
            <li><button className="hover:underline" onClick={() => window.location.href = '/sitemap'}>Sitemap</button></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex mt-2 space-x-4">
            <button className="hover:underline">
              <img src="/fb.png" alt="Facebook" className="h-6" />
            </button>
            <button className="hover:underline">
              <img src="/twitter.png" alt="Twitter" className="h-6" />
            </button>
            <button className="hover:underline">
              <img src="/insta.png" alt="Instagram" className="h-6" />
            </button>
          </div>
        </div>
        <div className="md:self-end">
          <h4 className="text-lg font-bold">Newsletter</h4>
          <form className="mt-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded-l bg-white text-gray-800"
            />
            <button 
              type="submit" 
              className="p-2 rounded-r bg-blue-600 hover:bg-blue-800 text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} KU Donations. All rights reserved.</p>
      </div>
    </footer>
  );
};

// CreditCardForm Component
const CreditCardForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Credit Card Information</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Card Number (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm mb-1">Expiration Date (*)</label>
            <input type="text" className="p-2 border rounded text-sm" placeholder="MM/YY" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm mb-1">CVV (*)</label>
            <input type="text" className="p-2 border rounded text-sm" placeholder="123" />
          </div>
        </div>
      </div>
    </div>
  );
};

// BankDetailsForm Component
const BankDetailsForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Bank Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Bank Account Number (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="1234567890" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Bank Name (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="Your Bank Name" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Account Holder Name (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="Your Name" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">IFSC Code (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="IFSC Code" />
        </div>
      </div>
    </div>
  );
};

// ChequeForm Component
const ChequeForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Cheque Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Cheque Number (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="123456" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Bank Name (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="Your Bank Name" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Account Holder Name (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="Your Name" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-sm mb-1">Amount (*)</label>
          <input type="text" className="p-2 border rounded text-sm" placeholder="Amount in Selected Currency" />
        </div>
      </div>
    </div>
  );
};

// Main DonationPage Component
const DonationPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showGiftSummary, setShowGiftSummary] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <div className="min-h-screen flex flex-col"
              style={{ backgroundImage: 'url(/img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'  }}
>   <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Make a Donation</h1>
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="font-semibold text-sm mb-1">Select Currency (*)</label>
            <select 
              value={selectedCurrency} 
              onChange={(e) => setSelectedCurrency(e.target.value)} 
              className="p-2 border rounded text-sm"
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="PKR">PKR</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-sm mb-1">Amount (*)</label>
            <input 
              type="text" 
              className="p-2 border rounded text-sm" 
              placeholder="Amount in Currency" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-sm mb-1">Payment Method (*)</label>
            <div className="flex gap-4">
              <label>
                <input 
                  type="radio" 
                  value="creditCard" 
                  checked={selectedPaymentMethod === 'creditCard'}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)} 
                />
                Credit Card
              </label>
              <label>
                <input 
                  type="radio" 
                  value="bank" 
                  checked={selectedPaymentMethod === 'bank'}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)} 
                />
                Bank Transfer
              </label>
              <label>
                <input 
                  type="radio" 
                  value="cheque" 
                  checked={selectedPaymentMethod === 'cheque'}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)} 
                />
                Cheque
              </label>
            </div>
          </div>
          {/* Conditional rendering for payment methods */}
          {selectedPaymentMethod === 'creditCard' && <CreditCardForm />}
          {selectedPaymentMethod === 'bank' && <BankDetailsForm />}
          {selectedPaymentMethod === 'cheque' && <ChequeForm />}
          <div className="flex justify-end mt-6">
            <button 
              type="button" 
              onClick={() => setShowPopup(true)} 
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800"
            >
              Continue
            </button>
          </div>
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <h2 className="text-lg font-semibold mb-4">Confirm Your Donation</h2>
              <p>Are you sure you want to make this donation?</p>
              <div className="flex justify-end mt-4">
                <button 
                  onClick={() => setShowPopup(false)} 
                  className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowPopup(false);
                    setShowGiftSummary(true);
                  }} 
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 ml-2"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
        {showGiftSummary && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <h2 className="text-lg font-semibold mb-4">Gift Summary</h2>
              <p>Your donation has been successfully processed. Thank you for your generosity!</p>
              <div className="flex justify-end mt-4">
                <button 
                  onClick={() => setShowGiftSummary(false)} 
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
