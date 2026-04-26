import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { SubmitButton } from './SubmitButton';

interface VisitorPopupProps {
  onClose: () => void;
}

const VisitorPopup: React.FC<VisitorPopupProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setShowError(true);
      return;
    }

    const visitor = {
      name: name.trim(),
      email: email.trim() || "example@email.com",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${process.env.FORM_URL || "https://6887ec7badf0e59551b898c0.mockapi.io/api/visitors-data"}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      toast.success("Your response is submitted successfully! ")
      localStorage.setItem('visited', 'true');

      setTimeout(() => {
        onClose();
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

        <SubmitButton />
      </form>
    </div>
  );
};

export default VisitorPopup;
