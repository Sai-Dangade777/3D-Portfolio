import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch("https://formspree.io/f/mld1avbk", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="text-gray-700">Your email:</label>
        <input
          id="email"
          type="email" 
          name="email"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="text-gray-700">Your message:</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded-md h-32"
          required
        />
      </div>

      <button 
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>

      {status === 'success' && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">There was an error sending your message.</p>
      )}
    </form>
  );
};

export default ContactForm;