import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { useInView } from '../hooks/useInView';

const iconMap = {
  'React.svg': '/assets/icons/React.svg',
  'Tailwind CSS.svg': '/assets/icons/Tailwind CSS.svg',
  'Figma.svg': '/assets/icons/Figma.svg',
  'Python.svg': '/assets/icons/Python.svg',
  'Django.svg': '/assets/icons/Django.svg',
  'SQL Developer.svg': '/assets/icons/SQL Developer.svg',
  'Flutter.svg': '/assets/icons/Flutter.svg',
  'Unity.svg': '/assets/icons/Unity.svg',
  'Unreal Engine.svg': '/assets/icons/Unreal Engine.svg',
};

export const About = () => {
  const { t } = useTranslation();
  const showInspirations = false;
  const showHobbies = false;

  const meSplitRef = useInView('reveal-split--init');
  const infoSplitRef = useInView('reveal-split--init');
  const eduSplitRef = useInView('reveal-split--init');
  const focusSplitRef = useInView('reveal-split--init');
  const capabilitiesRef = useInView();

  const sections = useMemo(() => {
    const base = [
      { id: 'me', label: t('aboutPage.sections.me') },
      { id: 'information', label: t('aboutPage.sections.information') },
      { id: 'education', label: t('aboutPage.sections.education') },
      { id: 'foccus', label: t('aboutPage.sections.foccus') },
      { id: 'capabilities', label: t('aboutPage.sections.capabilities') },
      { id: 'tech-stack', label: t('aboutPage.sections.techStack') },
      { id: 'certifications-about', label: t('aboutPage.sections.certifications') },
    ];
    if (showInspirations)
      base.splice(3, 0, { id: 'inspirations', label: t('aboutPage.sections.inspirations') });
    if (showHobbies)
      base.splice(showInspirations ? 4 : 3, 0, {
        id: 'hobbies',
        label: t('aboutPage.sections.hobbies'),
      });
    return base;
  }, [t, showInspirations, showHobbies]);

  const capabilities = t('aboutPage.capabilities.items', { returnObjects: true });

  return (
    <ProjectPageLayout sections={sections}>
      {/* ME Section */}
      <section id="me" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div
            ref={meSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center"
          >
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6">
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

      {/* INFORMATION Section */}
      <section id="information" className="pt-0 pb-0 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-0 mb-10 md:mb-16" />
          <div
            ref={infoSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center"
          >
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-left">
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
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/info.jpeg"
                alt="Informative portrait"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* EDUCATION Section */}
      <section id="education" className="pt-10 md:pt-0 pb-0 md:pb-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-16 hidden md:block" />
          <div
            ref={eduSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center"
          >
            <div className="order-2 md:order-1 rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/uni.jpg"
                alt="Universidad de los Andes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center space-y-4 md:space-y-4 text-left md:text-right">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-right">
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
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* INSPIRATIONS Section (temporarily hidden) */}
      {showInspirations && (
        <section id="inspirations" className="py-16 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="about-divider border-t border-border mb-8" />
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
            <div className="about-divider border-t border-border mb-8" />
            <h3 className="text-h2 font-semibold text-primary mb-6 text-left">
              {t('aboutPage.sections.hobbies')}
            </h3>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.hobbies.text')}
            </p>
          </div>
        </section>
      )}

      {/* FOCUS Section */}
      <section id="foccus" className="pt-10 pb-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-16 hidden md:block" />
          <div
            ref={focusSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center"
          >
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-left">
                {t('aboutPage.sections.foccus')}
              </h3>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph1')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph2')}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg bg-muted/30 aspect-[4/3]" />
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* CAPABILITIES Section — 3 grouped cards (primary skills display) */}
      <section id="capabilities" className="py-10 md:py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border mb-8 md:mb-12" />
          <h3 className="text-h2 font-semibold text-primary mb-8 md:mb-10">
            {t('aboutPage.sections.capabilities')}
          </h3>
          <div ref={capabilitiesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 p-5 md:p-6 rounded-xl border border-border bg-[var(--color2)] hover:border-[var(--color4)]/50 transition-colors duration-300"
              >
                {/* Tool icons */}
                <div className="flex gap-2">
                  {cap.tools.map((iconFile) => (
                    <div
                      key={iconFile}
                      className="w-8 h-8 bg-[var(--skill-icon-bg)] rounded-md flex items-center justify-center"
                    >
                      <img
                        src={iconMap[iconFile]}
                        alt={iconFile.replace('.svg', '')}
                        loading="lazy"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{cap.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK — collapsible full skills grid */}
      <CollapsibleSection
        id="tech-stack"
        title={t('aboutPage.sections.techStack')}
      >
        <SkillsSection embedded />
      </CollapsibleSection>

      {/* CERTIFICATIONS — collapsible */}
      <CollapsibleSection
        id="certifications-about"
        title={t('aboutPage.sections.certifications')}
      >
        <CertificationsSection embedded />
      </CollapsibleSection>
    </ProjectPageLayout>
  );
};
