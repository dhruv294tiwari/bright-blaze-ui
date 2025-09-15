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
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="medical-title">{t('journey.title')}</h2>
          <p className="medical-subtitle max-w-3xl mx-auto">
            {t('journey.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={step.titleKey} className="relative">
              <Card className="medical-card hover:scale-105 transition-transform duration-300 border-border">
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center medical-glow`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};