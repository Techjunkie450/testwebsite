import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Settings, 
  Network, 
  Shield, 
  Server, 
  Building 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Custom websites and web applications built with modern technologies, responsive design, and optimized for performance and user experience.',
      features: ['Responsive Design', 'Custom Development', 'E-commerce Solutions', 'CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, deployment, and management across AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Multi-Cloud Support']
    },
    {
      icon: Settings,
      title: 'DevOps',
      description: 'Streamline your development and deployment processes with CI/CD pipelines, automation, and infrastructure as code.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automation']
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Design, implement, and maintain robust network infrastructures that ensure reliable connectivity and optimal performance.',
      features: ['Network Design', 'Implementation', 'Troubleshooting', 'Performance Optimization']
    },
    {
      icon: Shield,
      title: 'Firewall & Security',
      description: 'Comprehensive cybersecurity solutions to protect your business from threats with advanced firewall configurations and security protocols.',
      features: ['Firewall Configuration', 'Threat Detection', 'Security Audits', 'Compliance']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Professional server administration, monitoring, and maintenance services to ensure maximum uptime and optimal performance.',
      features: ['Server Setup', '24/7 Monitoring', 'Maintenance', 'Performance Tuning']
    },
    {
      icon: Building,
      title: 'IT Infrastructure Solutions',
      description: 'End-to-end IT infrastructure planning, implementation, and support tailored to your business needs and growth objectives.',
      features: ['Infrastructure Planning', 'Hardware Setup', 'System Integration', 'Scalability Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2 hover:shadow-emerald-500/10"
              >
                <div
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;