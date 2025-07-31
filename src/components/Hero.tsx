import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    '24/7 Technical Support',
    'Scalable Solutions',
    'Expert Team',
    'Proven Track Record'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900"></div>
      
      {/* Data Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated wave patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#waveGradient1)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;50,0;0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z" fill="url(#waveGradient2)" className="animate-pulse" style={{animationDelay: '2s'}}>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;-30,0;0,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        
        {/* Floating data particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Binary code effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-white font-mono text-xs animate-pulse">01001001 01010100</div>
          <div className="absolute top-20 right-20 text-white font-mono text-xs animate-pulse delay-1000">01000100 01000001</div>
          <div className="absolute bottom-20 left-20 text-white font-mono text-xs animate-pulse delay-500">01010100 01000001</div>
          <div className="absolute bottom-10 right-10 text-white font-mono text-xs animate-pulse delay-1500">01010111 01000001</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative IT Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Modern Business</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From web development to cloud infrastructure, we deliver excellence that drives growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-purple-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <span>Explore Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Enterprise Ready</h3>
                    <p className="text-purple-200 text-sm">Scalable solutions for any business size</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">24/7 Support</h3>
                    <p className="text-purple-200 text-sm">Round-the-clock technical assistance</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Proven Results</h3>
                    <p className="text-purple-200 text-sm">100+ successful projects delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;