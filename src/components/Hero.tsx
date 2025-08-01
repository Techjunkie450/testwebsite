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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800"></div>
      
      {/* Enhanced Data Wave Background with Reflections */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main animated wave patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#64748b" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
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
          {/* Data reflection waves */}
          <path d="M0,100 Q200,50 400,100 T800,100 L800,300 L0,300 Z" fill="url(#reflectionGradient)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;100,0;0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        
        {/* Enhanced floating data particles with reflections */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Data reflection particles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-slate-300/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce delay-700"></div>
        
        {/* Enhanced binary code effect with data reflections */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-10 left-10 text-blue-300 font-mono text-xs animate-pulse">
            {Array.from({length: 12}, (_, i) => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
          <div className="absolute top-20 right-20 text-slate-300 font-mono text-xs animate-pulse delay-1000">
            {Array.from({length: 10}, (_, i) => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
          <div className="absolute bottom-20 left-20 text-blue-400 font-mono text-xs animate-pulse delay-500">
            {Array.from({length: 14}, (_, i) => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
          <div className="absolute bottom-10 right-10 text-slate-400 font-mono text-xs animate-pulse delay-1500">
            {Array.from({length: 8}, (_, i) => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
          {/* Additional data streams */}
          <div className="absolute top-1/3 left-1/4 text-blue-200 font-mono text-xs animate-pulse delay-2000">
            DATA_STREAM_ACTIVE
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-slate-200 font-mono text-xs animate-pulse delay-2500">
            NETWORK_SECURE
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative IT Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400"> Modern Business</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From web development to cloud infrastructure, we deliver excellence that drives growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-blue-500 to-slate-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-slate-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <span>Explore Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Enterprise Ready</h3>
                    <p className="text-blue-200 text-sm">Scalable solutions for any business size</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">24/7 Support</h3>
                    <p className="text-blue-200 text-sm">Round-the-clock technical assistance</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Proven Results</h3>
                    <p className="text-blue-200 text-sm">100+ successful projects delivered</p>
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