import { Briefcase, Code, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AboutSection = ({ hideTitle = false }) => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {!hideTitle && (
          <h2 className="text-h1 font-bold mb-12 text-center">
            {t('about.title1')} {t('about.title2')}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {!hideTitle && (
              <h3 className="text-primary text-h2 font-semibold">{t('about.subtitle')}</h3>
            )}
            <p className="text-body font-light text-muted-foreground text-justify">
              {t('about.parragraph1')}
            </p>
            <p className="text-body font-light text-muted-foreground text-justify">
              {t('about.parragraph2')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-h3">{t('about.desc1')}</h4>
                  <p className="text-muted-foreground font-light text-body text-justify">
                    {t('about.idea1')}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-h3">{t('about.desc2')}</h4>
                  <p className="text-muted-foreground font-light text-body text-justify">
                    {t('about.idea2')}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-semibold text-h3">{t('about.desc3')}</h4>
                  <p className="text-muted-foreground font-light text-body text-justify">
                    {t('about.idea3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
