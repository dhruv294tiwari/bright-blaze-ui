import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, UserCheck, Stethoscope } from 'lucide-react';

export const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="medical-button bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 group border-transparent"
            >
              <UserCheck className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              {t('cta.patient')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="medical-button border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 group"
            >
              <Stethoscope className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              {t('cta.doctor')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};