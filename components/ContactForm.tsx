
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  subject:string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject:'',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', subject:'', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className='mt-0 w-full mx-auto px-4 lg:px-8 sm:h-[50%] sm:w-[80%]'
    >
      <h2 className='text-1xl sm:text-3xl lg:text-2xl font-bold mb-5 sm:mb-6 lg:mb-8 text-white text-center sm:text-left'>
        Contact me
      </h2>
      
      <div className='space-y-4 sm:space-y-5'>
        <div>
          <input 
            type="text" 
            placeholder='Your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-black placeholder-gray-400 bg-white border-0 rounded shadow focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all'
          />
        </div>

        <div>
          <input 
            type="text" 
            placeholder='Subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
            className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-black placeholder-gray-400 bg-white border-0 rounded shadow focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all'
          />
        </div>
        
        <div>
          <input 
            type="email" 
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-black placeholder-gray-400 bg-white border-0 rounded shadow focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all'
          />
        </div>
        
        <div>
          <textarea 
            placeholder='Your message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base sm:h-[60%] text-black placeholder-gray-400 bg-white border-0 rounded shadow focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none'
          />
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white rounded-md uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>

      {status && (
        <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-md text-sm sm:text-base ${
          status.includes('success') 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;