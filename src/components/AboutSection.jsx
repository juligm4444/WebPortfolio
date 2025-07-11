import { Briefcase, Code, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-primary text-2xl font-semibold">{t('about.subtitle')}</h3>
            <p className="text-muted-foreground">{t('about.parragraph1')}</p>
            <p className="text-muted-foreground">{t('about.parragraph2')}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="general-button">
                {t('about.button1')}
              </a>
              <a
                href={i18n.language === 'es' ? '/files/CV-Español.pdf' : '/files/CV-English.pdf'}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t('about.button2')}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-lg">{t('about.desc1')}</h4>
                  <p className="text-muted-foreground">{t('about.idea1')}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-lg">{t('about.desc2')}</h4>
                  <p className="text-muted-foreground">{t('about.idea2')}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-lg">{t('about.desc3')}</h4>
                  <p className="text-muted-foreground">{t('about.idea3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
