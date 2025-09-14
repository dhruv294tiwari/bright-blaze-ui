import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, UserCheck, Stethoscope, Heart } from 'lucide-react';

export const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pulse-soft"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg pulse-soft"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 fade-in">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="medical-button bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 group"
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

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="medical-card bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center text-white">
              <Heart className="h-8 w-8 mx-auto mb-3 text-white pulse-soft" />
              <h3 className="font-semibold mb-2">Trusted Care</h3>
              <p className="text-sm text-white/80">HIPAA compliant & secure</p>
            </div>
            
            <div className="medical-card bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center text-white">
              <UserCheck className="h-8 w-8 mx-auto mb-3 text-white pulse-soft" />
              <h3 className="font-semibold mb-2">Verified Doctors</h3>
              <p className="text-sm text-white/80">Licensed healthcare professionals</p>
            </div>
            
            <div className="medical-card bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center text-white">
              <Stethoscope className="h-8 w-8 mx-auto mb-3 text-white pulse-soft" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-white/80">Round-the-clock assistance</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-8 text-white/70">
            <p className="text-sm">
              ✓ No setup fees • ✓ Free consultation assessment • ✓ Multi-language support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};