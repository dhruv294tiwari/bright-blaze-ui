import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Brain, 
  Video, 
  Pill,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const journeySteps = [
  {
    icon: MessageCircle,
    titleKey: 'journey.step1.title',
    descriptionKey: 'journey.step1.description',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    icon: Brain,
    titleKey: 'journey.step2.title',
    descriptionKey: 'journey.step2.description',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20'
  },
  {
    icon: Video,
    titleKey: 'journey.step3.title',
    descriptionKey: 'journey.step3.description',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20'
  },
  {
    icon: Pill,
    titleKey: 'journey.step4.title',
    descriptionKey: 'journey.step4.description',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20'
  }
];

export const PatientJourney = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="medical-title">{t('journey.title')}</h2>
          <p className="medical-subtitle max-w-3xl mx-auto">
            {t('journey.subtitle')}
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {journeySteps.map((step, index) => (
              <div key={step.titleKey} className="relative">
                <Card 
                  className={`medical-card ${step.bgColor} border-0 hover:scale-105 transition-all duration-300 slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center medical-glow`}>
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-background border-2 border-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(step.descriptionKey)}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Available 24/7</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow - Desktop Only */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-primary/60">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < journeySteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 text-primary/60">
                    <ArrowRight className="h-6 w-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="medical-card p-8 bg-gradient-primary text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Start Your Healthcare Journey Today</h3>
            <p className="text-white/90 mb-6">
              Join thousands of patients who have experienced better healthcare outcomes with GrameenCure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors">
                {t('cta.patient')}
              </button>
              <button className="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};