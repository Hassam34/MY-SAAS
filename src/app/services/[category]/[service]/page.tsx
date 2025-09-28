import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '../../../../data/services.json';
import ScrollAnimation from '../../../../components/ScrollAnimation';

interface ServicePageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];
  
  servicesData.serviceCategories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.slug,
        service: service.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const category = servicesData.serviceCategories.find(
    (cat) => cat.slug === resolvedParams.category
  );
  
  const service = category?.services.find(
    (svc) => svc.slug === resolvedParams.service
  );

  if (!category || !service) {
    return {
      title: 'Service Not Found | MIRSSA TECH LTD',
    };
  }

  return {
    title: `${service.name} - ${category.name} | MIRSSA TECH LTD`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const category = servicesData.serviceCategories.find(
    (cat) => cat.slug === resolvedParams.category
  );
  
  const service = category?.services.find(
    (svc) => svc.slug === resolvedParams.service
  );

  if (!category || !service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <ScrollAnimation direction="fade" delay={0.1} duration={0.6}>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/services" className="ml-4 text-gray-400 hover:text-gray-500">
                    Services
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href={`/services/${category.slug}`} className="ml-4 text-gray-400 hover:text-gray-500">
                    {category.name}
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-700 font-medium">{service.name}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </ScrollAnimation>

      {/* Hero Section */}
      <ScrollAnimation direction="fade" delay={0.2} duration={0.8}>
        <section className={`${category.bgColor} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left" delay={0.3} duration={0.8}>
                <div>
                  <div className={`w-16 h-1 ${category.color.replace('border-l-', 'bg-')} mb-6 rounded`}></div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {service.name}
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      Get Quote
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      View Examples
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.4} duration={0.8}>
                <div className="relative">
                  <div className={`w-full h-96 ${category.bgColor} rounded-2xl flex items-center justify-center border-4 border-white shadow-xl`}>
                    <span className="text-9xl opacity-60">{category.icon}</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service Details */}
      <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Features */}
                <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      What&apos;s Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <ScrollAnimation key={index} direction="up" delay={0.7 + (index * 0.1)} duration={0.8}>
                          <div className="flex items-start">
                            <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Process */}
                <ScrollAnimation direction="up" delay={0.8} duration={0.8}>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Our Process
                    </h2>
                    <div className="space-y-8">
                      {service.process.map((step, index) => (
                        <ScrollAnimation key={index} direction="left" delay={0.9 + (index * 0.1)} duration={0.8}>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                              {step.step}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Deliverables */}
                <ScrollAnimation direction="up" delay={1.0} duration={0.8}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Deliverables
                    </h2>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.deliverables.map((deliverable, index) => (
                          <ScrollAnimation key={index} direction="up" delay={1.1 + (index * 0.1)} duration={0.8}>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-700">{deliverable}</span>
                            </div>
                          </ScrollAnimation>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Sidebar */}
              <ScrollAnimation direction="right" delay={0.6} duration={0.8}>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Service Details
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Timeline
                        </span>
                        <p className="text-xl font-semibold text-gray-900 mt-1">
                          {service.timeline}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Starting Price
                        </span>
                        <p className="text-xl font-semibold text-gray-900 mt-1">
                          {service.pricing}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </span>
                        <p className="text-lg text-gray-900 mt-1">
                          {category.name}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <Link
                        href="/contact"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        Request Quote
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Related Services */}
      <ScrollAnimation direction="up" delay={1.2} duration={0.8}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore other {category.name.toLowerCase()} solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services
                .filter((relatedService) => relatedService.id !== service.id)
                .slice(0, 2)
                .map((relatedService, index) => (
                  <ScrollAnimation key={relatedService.id} direction="up" delay={1.3 + (index * 0.1)} duration={0.8}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group">
                      <div className={`w-12 h-1 ${category.color.replace('border-l-', 'bg-')} mb-6 rounded`}></div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {relatedService.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {relatedService.description}
                      </p>

                      <Link
                        href={`/services/${category.slug}/${relatedService.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </ScrollAnimation>
                ))
              }
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
