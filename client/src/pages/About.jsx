import React, { useState, useEffect } from 'react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Welcome to RENTIO',
      description:
        'We are a platform dedicated to simplifying the process of finding rental properties, home-cooked meals, and rental vehicles for people moving to a new city, like Indore. Our goal is to make your relocation as smooth as possible, whether you’re a student, a professional, or a traveler looking for a comfortable stay.',
    },
    {
      title: 'Our Mission',
      description:
        'To bridge the gap between property owners, home cooks, and service seekers, providing an easy-to-use platform that connects them directly and transparently.',
    },
    {
      title: 'What We Offer',
      description:
        'Rental Properties: Discover a wide range of verified rental homes and apartments that match your needs and budget. Our listings are updated in real-time to ensure that you always have the latest options. Home-Cooked Meals: Connect with local home cooks who offer delicious, homemade food that feels like home. Choose from a variety of meal plans and dishes tailored to your preferences.',
    },
    {
      title: 'Why Choose Us?',
      description:
        'Smart Search Tools: Find exactly what you’re looking for with our intelligent search and filter options. Real-Time Availability: Stay up-to-date with real-time availability of properties, meal services, and vehicles. Direct Communication: Chat directly with property owners, home cooks, or vehicle providers to get answers to your queries and build trust. Community Focus: We believe in building a supportive community, where service providers and seekers come together for a better experience.',
    },
    {
      title: 'Our Vision',
      description:
        'To become the go-to platform for newcomers in any city, making their stay comfortable, affordable, and home-like, while supporting local property owners and home cooks.',
    },
    {
      title: 'Join Us on This Journey',
      description:
        'We invite you to explore, connect, and settle in with ease using our platform. Whether you\'re looking for a cozy room or a home-cooked meal, we are here to help you every step of the way.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="px-4 py-12 max-w-4xl w-full">
          <div className="relative">
            <div className="bg-gray-200 p-10 rounded-lg shadow-md text-center">
              <h1 className="text-4xl font-bold mb-6 text-slate-800">{slides[currentSlide].title}</h1>
              <p className="text-lg text-slate-700">{slides[currentSlide].description}</p>
            </div>
            <div className="flex justify-center mt-6 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-800 text-white py-6 text-center">
        <p>&copy; 2024 RENTIO. All rights reserved.</p>
        <p>Contact us: support@rentio.com | +123 456 7890</p>
        <div className="flex justify-center space-x-4 mt-2">
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"            //use with _blankfor security and performance reasons 
            //It prevents the browser from sending the Referer header when navigating to the new page.
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
