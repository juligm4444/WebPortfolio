import { useTranslation } from 'react-i18next';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { AboutSection } from '../components/AboutSection';

export const About = () => {
  const { t } = useTranslation();

  const sections = [
    { id: 'me', label: t('aboutPage.sections.me') },
    { id: 'information', label: t('aboutPage.sections.information') },
    { id: 'education', label: t('aboutPage.sections.education') },
    { id: 'inspirations', label: t('aboutPage.sections.inspirations') },
    { id: 'hobbies', label: t('aboutPage.sections.hobbies') },
    { id: 'foccus', label: t('aboutPage.sections.foccus') },
  ];

  return (
    <ProjectPageLayout sections={sections}>
      {/* ME Section */}
      <section id="me" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.me')}</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Name and Tagline (left, right-aligned) */}
            <div className="flex-1 flex flex-col justify-center items-end text-right order-2 md:order-1">
              <h1 className="font-bold leading-none flex flex-col tracking-tight">
                <span className="text-[7rem] md:text-[9rem] xl:text-[10rem]">{'Julián'}</span>
                <span className="text-[6rem] md:text-[8rem] xl:text-[9rem]">{'Galindo'}</span>
              </h1>
              <p className="mt-6 text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-black dark:text-black">
                {'juligm4'}
              </p>
              <p className="mt-8 text-[2.25rem] md:text-[2.75rem] xl:text-[3rem] font-semibold max-w-2xl text-muted-foreground text-right">
                {t('about.subtitle')}
              </p>
            </div>
            {/* Image (right) */}
            <div className="w-full md:w-1/2 max-w-xl order-1 md:order-2">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="/photos/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION Section */}
      <section id="information" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.information')}</h2>
          </div>
          <p className="text-body font-light leading-relaxed text-left max-w-4xl">
            {t('aboutPage.information.text')}
          </p>
        </div>
      </section>

      {/* EDUCATION Section */}
      <section id="education" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.education')}</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
            <div className="w-full md:w-1/2 max-w-xl">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="/photos/uni.jpg"
                  alt="Universidad de los Andes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-2 md:space-y-3 text-left">
              <h3 className="text-h2 font-semibold">{'Universidad de los Andes, Bogotá'}</h3>
              <p className="text-body font-light text-muted-foreground">
                {t('aboutPage.education.years')}
              </p>
              <p className="text-body font-light text-muted-foreground">
                {t('aboutPage.education.degree1')}
              </p>
              <p className="text-body font-light text-muted-foreground">
                {t('aboutPage.education.degree2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATIONS Section */}
      <section id="inspirations" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.inspirations')}</h2>
          </div>
          <p className="text-body font-light leading-relaxed text-left max-w-4xl">
            {t('aboutPage.inspirations.text')}
          </p>
        </div>
      </section>

      {/* HOBBIES Section */}
      <section id="hobbies" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.hobbies')}</h2>
          </div>
          <p className="text-body font-light leading-relaxed text-left max-w-4xl">
            {t('aboutPage.hobbies.text')}
          </p>
        </div>
      </section>

      {/* FOCCUS (Focus) Section - reuse existing About content minus title */}
      <section id="foccus" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-12" />
          <div className="mb-12 text-left">
            <h2 className="text-h2 font-bold">{t('aboutPage.sections.foccus')}</h2>
          </div>
          <AboutSection hideTitle />
        </div>
      </section>
    </ProjectPageLayout>
  );
};
