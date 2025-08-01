import React from 'react';
import { Users, Award, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that drive your business forward.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing to ensure reliability and optimal performance.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Data Reflections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-navy-200 font-mono text-xs animate-pulse opacity-20">
          ABOUT_DATA_STREAM: {Array.from({length: 16}, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
        </div>
        <div className="absolute bottom-20 right-20 text-slate-300 font-mono text-xs animate-pulse delay-1000 opacity-20">
          COMPANY_INFO: {Array.from({length: 12}, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
        </div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-navy-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-slate-200 rounded-full blur-2xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Infrarise Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking IT solutions company dedicated to empowering businesses through innovative technology and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Business Through Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Infrarise Technologies, we believe that the right technology can transform any business. 
              Our team of experienced professionals combines deep technical expertise with a passion for 
              innovation to deliver solutions that not only meet your current needs but also position 
              you for future growth.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From web development and mobile applications to cloud infrastructure and cybersecurity, 
              we provide comprehensive IT services that help businesses thrive in the digital age. 
              Our commitment to excellence and customer satisfaction has made us a trusted partner 
              for companies of all sizes.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Our Mission</h4>
                <p className="text-gray-600">Empowering businesses with innovative IT solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;