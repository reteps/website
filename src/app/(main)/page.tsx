import Script from 'next/script';
import Hero from '@/components/Hero';
import NewsletterPopup from '@/components/NewsletterPopup';
import Sponsors from '@/components/Sponsors';
import Transition from '@/components/Transition';
import Sigscard from '@/sections/home/Sigscard';

export default function Home() {
  return (
    <>
      {/* Redirects old hash router links to normal routes (e.g. /#/membership -> /membership) */}
      <Script id="redirect-hash-router">
        {`if(window.location.hash.includes('#/')){window.location.replace(window.location.hash.replace('#',''));}`}
      </Script>
      <NewsletterPopup/>
      <Hero />
      <Transition bgClass="bg-surface-050"/>
      <section id="sighighlight" className="bg-surface-050 pt-6 pb-24">
        <div className="container flex flex-col gap-6">
          <h1>
            Special Interest Groups
          </h1>
          <p className="text-xl max-w-prose">
            SIGs, or Special Interest Groups, are student-run groups exploring
            different areas of computer science, from theory and algorithms to
            competitive programming. All our SIGs are beginner-friendly and are a
            great way to meet other members and explore computer science.
          </p>
          <Sigscard />
        </div>
      </section>
      <Sponsors />
    </>
  );
};