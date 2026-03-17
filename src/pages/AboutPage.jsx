import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';

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
      {/* ME Section — image left, identity text right, always 2-col */}
      <section id="me" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center">
            {/* Image — Left */}
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Identity — Right */}
            <div className="flex flex-col justify-center text-left space-y-4 md:space-y-6">
              <p className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] xl:text-[5.5rem] font-bold text-primary leading-none">
                juligm4
              </p>
              <h1 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-foreground leading-tight">
                Julián Galindo
              </h1>
              <p className="text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] font-semibold text-foreground leading-snug">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION Section — title top-left, text left, image right */}
      <section id="information" className="pt-0 pb-16 md:pb-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border my-0 mb-16" />
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center">
            {/* Paragraphs — Left */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2">
                {t('aboutPage.sections.information')}
              </h3>
              {t('aboutPage.information.paragraphs', { returnObjects: true }).map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base md:text-body font-light leading-relaxed text-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Image — Right */}
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/info.jpeg"
                alt="Informative portrait"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION Section — image left, title+text right-aligned */}
      <section id="education" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border my-8" />
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center">
            {/* Image — Left */}
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/uni.jpg"
                alt="Universidad de los Andes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Text — Right, right-aligned */}
            <div className="flex flex-col justify-center space-y-2 md:space-y-4 text-right">
              <h3 className="text-[1.4rem] sm:text-h2 font-semibold text-primary">
                {t('aboutPage.sections.education')}
              </h3>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {'Universidad de los Andes, Bogotá'}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {t('aboutPage.education.degree1')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {t('aboutPage.education.degree2')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-muted-foreground">
                {`(${t('aboutPage.education.years')})`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATIONS Section (temporarily hidden) */}
      {showInspirations && (
        <section id="inspirations" className="py-16 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="border-t border-border mb-8" />
            <h3 className="text-h2 font-semibold text-primary mb-6 text-left">
              {t('aboutPage.sections.inspirations')}
            </h3>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.inspirations.text')}
            </p>
          </div>
        </section>
      )}

      {/* HOBBIES Section (temporarily hidden) */}
      {showHobbies && (
        <section id="hobbies" className="py-16 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="border-t border-border mb-8" />
            <h3 className="text-h2 font-semibold text-primary mb-6 text-left">
              {t('aboutPage.sections.hobbies')}
            </h3>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.hobbies.text')}
            </p>
          </div>
        </section>
      )}

      {/* FOCUS Section — title + text left, image right */}
      <section id="foccus" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-border my-8" />
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center">
            {/* Paragraphs — Left */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2">
                {t('aboutPage.sections.foccus')}
              </h3>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph1')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph2')}
              </p>
            </div>
            {/* Image placeholder — Right */}
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg bg-muted/30 aspect-[4/3]" />
          </div>
        </div>
      </section>
    </ProjectPageLayout>
  );
};
