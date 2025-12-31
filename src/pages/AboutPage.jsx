import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { AboutSection } from '../components/AboutSection';

export const About = () => {
  const { t } = useTranslation();
  const showInspirations = false;
  const showHobbies = false;

  // Memoize sections to avoid recreating array on each render (reduces scroll-spy recalculations)
  const sections = useMemo(() => {
    const base = [
      { id: 'me', label: t('aboutPage.sections.me') },
      { id: 'information', label: t('aboutPage.sections.information') },
      { id: 'education', label: t('aboutPage.sections.education') },
      { id: 'foccus', label: t('aboutPage.sections.foccus') },
    ];
    // Keep code for inspirations/hobbies but exclude from content bar when flags are false
    if (showInspirations)
      base.splice(3, 0, { id: 'inspirations', label: t('aboutPage.sections.inspirations') });
    if (showHobbies)
      base.splice(showInspirations ? 4 : 3, 0, {
        id: 'hobbies',
        label: t('aboutPage.sections.hobbies'),
      });
    return base;
  }, [t, showInspirations, showHobbies]);

  return (
    <ProjectPageLayout sections={sections}>
      {/* ME Section */}
      <section id="me" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          {/* Mobile-friendly centered layout; desktop keeps split */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Name Block */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-end text-center md:text-right order-2 md:order-1">
              <h1 className="font-bold leading-tight flex flex-col">
                <span className="text-[3.25rem] sm:text-[3.75rem] md:text-[6.5rem] xl:text-[8rem]">
                  {'Julián'}
                </span>
                <span className="text-[2.75rem] sm:text-[3.25rem] md:text-[5.25rem] xl:text-[6.5rem]">
                  {'Galindo'}
                </span>
              </h1>
              <p className="mt-6 text-[2.25rem] sm:text-[2.5rem] md:text-[3.25rem] xl:text-[3.75rem] font-bold text-foreground">
                {'juligm4'}
              </p>
              <p className="mt-8 text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] xl:text-[2.5rem] font-semibold max-w-2xl text-muted-foreground text-center md:text-right">
                {t('about.subtitle')}
              </p>
            </div>
            {/* Image */}
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
      <section id="information" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-6" />
          <div className="mb-6 text-left">
            <h3 className="text-h2 font-semibold text-primary">
              {t('aboutPage.sections.information')}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
            {/* Image Left */}
            <div className="order-1 md:order-1 w-full md:w-5/12 xl:w-4/12 flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg flex">
                <img
                  src="/photos/info.jpeg"
                  alt="Informative portrait"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Paragraphs Right */}
            <div className="order-2 md:order-2 flex-1 flex flex-col justify-between space-y-6">
              {t('aboutPage.information.paragraphs', { returnObjects: true }).map((para, idx) => (
                <p
                  key={idx}
                  className="text-body font-light leading-relaxed text-left text-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION Section */}
      <section id="education" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-6" />
          <div className="mb-6 text-left">
            <h3 className="text-h2 font-semibold text-primary">
              {t('aboutPage.sections.education')}
            </h3>
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

      {/* INSPIRATIONS Section (temporarily hidden) */}
      {showInspirations && (
        <section id="inspirations" className="py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="border-t border-border mb-6" />
            <div className="mb-6 text-left">
              <h3 className="text-h2 font-semibold text-primary">
                {t('aboutPage.sections.inspirations')}
              </h3>
            </div>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.inspirations.text')}
            </p>
          </div>
        </section>
      )}

      {/* HOBBIES Section (temporarily hidden) */}
      {showHobbies && (
        <section id="hobbies" className="py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="border-t border-border mb-6" />
            <div className="mb-6 text-left">
              <h3 className="text-h2 font-semibold text-primary">
                {t('aboutPage.sections.hobbies')}
              </h3>
            </div>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.hobbies.text')}
            </p>
          </div>
        </section>
      )}

      {/* FOCCUS (Focus) Section - reuse existing About content minus title */}
      <section id="foccus" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border mb-6" />
          <div className="mb-6 text-left">
            <h3 className="text-h2 font-semibold text-primary">{t('aboutPage.sections.foccus')}</h3>
          </div>
          <AboutSection hideTitle />
        </div>
      </section>
    </ProjectPageLayout>
  );
};
