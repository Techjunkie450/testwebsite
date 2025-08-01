import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '100+',
      label: 'Happy Clients',
      description: 'Businesses trust us'
    },
    {
      icon: Award,
      number: '200+',
      label: 'Projects Completed',
      description: 'Successfully delivered'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience',
      description: 'In IT solutions'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Support Available',
      description: 'Round the clock'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-600">Infrarise Technologies</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Infrarise Technologies, we are passionate about empowering businesses through innovative IT solutions. 
              With years of experience and a team of skilled professionals, we deliver cutting-edge technology services 
              that drive growth and efficiency.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence, combined with our deep understanding of modern technology trends, 
              makes us the ideal partner for your digital transformation journey. We don't just provide services; 
              we build lasting partnerships.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">Expert team with proven track record</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">Customized solutions for every business</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">24/7 support and maintenance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-xl p-6 text-center border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-emerald-600 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;