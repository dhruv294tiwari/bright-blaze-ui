import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { PatientJourney } from '@/components/PatientJourney';
import { Statistics } from '@/components/Statistics';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-background">
        <Header />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Features />
        </section>
        <section id="services">
          <PatientJourney />
          <Statistics />
        </section>
        <section id="contact">
          <CallToAction />
          <Footer />
        </section>
      </div>
    </Suspense>
  );
};

export default Index;
