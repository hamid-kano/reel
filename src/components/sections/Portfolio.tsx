import React, { useState } from 'react';
import { ExternalLink, Play, Image } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, title: 'حملة إعلانية لمطعم', category: 'ads', type: 'image' },
    { id: 2, title: 'فيديو ترويجي لشركة', category: 'video', type: 'video' },
    { id: 3, title: 'تصميم هوية بصرية', category: 'design', type: 'image' },
    { id: 4, title: 'إدارة حساب إنستغرام', category: 'social', type: 'image' },
    { id: 5, title: 'محتوى تسويقي', category: 'content', type: 'image' },
    { id: 6, title: 'إعلان تجاري', category: 'video', type: 'video' }
  ];

  const filters = [
    { id: 'all', label: 'جميع الأعمال' },
    { id: 'design', label: 'التصاميم' },
    { id: 'video', label: 'الفيديوهات' },
    { id: 'social', label: 'السوشيال ميديا' },
    { id: 'ads', label: 'الإعلانات' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            معرض <span className="gradient-text">أعمالنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            استكشف مجموعة من أفضل أعمالنا التي حققت نجاحاً باهراً لعملائنا
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Video Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                {project.type === 'video' ? (
                  <Play className="w-16 h-16 text-white/80" />
                ) : (
                  <Image className="w-16 h-16 text-white/80" />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            عرض جميع الأعمال
          </button>
        </div>
      </div>
    </section>
  );
}