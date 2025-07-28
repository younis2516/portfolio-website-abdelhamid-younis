import { create } from 'domain';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

interface VisitorPopupProps {
  onClose: () => void;
}

const VisitorPopup: React.FC<VisitorPopupProps> = ({ onClose }) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('  ');
  const [showError, setShowError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setShowError(true);
      return;
    }

        const visitor = {
            // id: crypto.randomUUID(),
            name: name.trim(),
            email: email.trim() || "example@email.com", // ✅ Always send a string (never undefined or null)
            createdAt: new Date().toISOString(),
        };
    console.log('Submitting visitor data:', visitor); // ✅ log request body

    try {
      const response = await fetch(`${process.env.FORM_URL || "https://6887ec7badf0e59551b898c0.mockapi.io/api/visitors-data"}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:name,
          email:email,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      toast.success("Your response is submitted successfully! ")
      // setShowToast(true); // ✅ show success toast
      localStorage.setItem('visited', 'true');

      setTimeout(() => {
        setShowToast(false);
        onClose(); // Close after toast
      }, 2000);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <div className="bg-white/50 dark:bg-gray-800/90 backdrop-blur-md border border-white/20 dark:border-gray-300/10 shadow-2xl rounded-xl p-6 w-[90%] max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">Nice to meet you! 👋</h2>
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 text-center">
        Please enter your name or if you are a recruiter enter your company name to view my portfolio.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-black dark:text-white">Name or Company name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowError(false);
            }}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-black dark:text-white"
            required
          />
          {showError && <p className="text-red-500 text-sm mt-1">Name is required</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-black dark:text-white">Email (optional)</label>
          <input
            type="email"
            value={email}
            placeholder='example@email.com'
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-black dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="group bg-gray-900 dark:bg-gray-600 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full w-full sm:w-auto"
        >
          Submit
        </button>
      </form>
       {/* ✅ Toast */}
      {/* {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
          Submitted successfully!
        </div>
      )} */}
    </div>
    
  );
};

export default VisitorPopup;
