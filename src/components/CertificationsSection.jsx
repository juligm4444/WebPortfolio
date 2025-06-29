import { Download } from 'lucide-react';

const certifications = [
  {
    name: 'Python Essentials 1',
    company: 'Cisco',
    status: '02/06/2025',
    badge: '/assets/badges/python-essentials-1.png',
    pdf: '/files/PythonEssentials1.pdf',
  },
  {
    name: 'Python Essentials 2',
    company: 'Cisco',
    status: '08/06/2025',
    badge: '/assets/badges/python-essentials-2.png',
    pdf: '/files/PythonEssentials2.pdf',
  },
  {
    name: 'Google UX Design Professional',
    company: 'Google',
    status: 'In Progress',
    badge: '',
    pdf: '',
  },
  {
    name: 'Adobe Graphic Designer',
    company: 'Adobe',
    status: 'Coming Soon',
    badge: '',
    pdf: '',
  },
  {
    name: 'Epic Games Game Design',
    company: 'Epic Games',
    status: 'Coming Soon',
    badge: '',
    pdf: '',
  },
  {
    name: 'Professional Scrum Master',
    company: 'Scrum Network',
    status: 'Coming Soon',
    badge: '',
    pdf: '',
  },
  {
    name: 'Game Design and Development with Unity',
    company: 'Michigan State University',
    status: 'Coming Soon',
    badge: '',
    pdf: '',
  },
];

export const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Certifications</span>
      </h2>
      <div className="flex flex-col gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-card rounded-lg shadow-xs p-6 card-hover
                       grid grid-cols-1 sm:grid-cols-3 items-center gap-6 text-center"
          >
            {/* Badge or placeholder for alignment */}
            <div className="flex items-center justify-center h-20 sm:justify-start sm:pl-6">
              {cert.badge ? (
                <img
                  src={cert.badge}
                  alt={`${cert.company} badge`}
                  className="w-20 h-20 object-contain"
                />
              ) : (
                <div className="w-20 h-20" />
              )}
            </div>
            {/* Center column */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-primary font-semibold text-lg">{cert.name}</h3>
              <p className="text-muted-foreground text-sm">{cert.company}</p>
              <p className="text-xs text-muted-foreground">{cert.status}</p>
            </div>
            {/* Download button or placeholder for alignment */}
            <div className="flex items-center justify-center h-20 sm:justify-end sm:pr-6">
              {cert.pdf ? (
                <a
                  href={cert.pdf}
                  download
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={24} />
                </a>
              ) : (
                <div className="w-12 h-12" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
