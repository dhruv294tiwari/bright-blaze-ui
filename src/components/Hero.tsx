import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Stethoscope, Users, Shield, Zap, Heart } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl pulse-soft"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary/20 rounded-full blur-lg pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="medical-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="medical-button border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.learnMore')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-white/70" />
                <span className="text-white/70">50,000+ Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-white/70" />
                <span className="text-white/70">500+ Doctors</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="medical-card p-8 bg-white/95 backdrop-blur-sm medical-glow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI Health Assistant</h3>
                      <p className="text-sm text-muted-foreground">Ready to help 24/7</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-2">Describe your symptoms:</p>
                      <p className="text-foreground">"मुझे बुखार और खांसी है" (I have fever and cough)</p>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-3 bg-primary/10 rounded-xl">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm text-primary font-medium">AI Analysis Complete</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-3 bg-secondary/10 rounded-xl">
                      <Shield className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-secondary font-medium">Connecting to Doctor...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center medical-glow">
                <Heart className="h-8 w-8 text-white pulse-soft" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center medical-glow">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};