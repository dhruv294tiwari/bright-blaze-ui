import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Brain, 
  Video, 
  Wifi, 
  MessageSquare, 
  Clock,
  Shield,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Globe,
    titleKey: 'feature.multilingual.title',
    descriptionKey: 'feature.multilingual.description',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Brain,
    titleKey: 'feature.ai.title',
    descriptionKey: 'feature.ai.description',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Video,
    titleKey: 'feature.consultation.title',
    descriptionKey: 'feature.consultation.description',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Wifi,
    titleKey: 'feature.offline.title',
    descriptionKey: 'feature.offline.description',
    gradient: 'from-orange-500 to-orange-600'
  }
];

const additionalFeatures = [
  {
    icon: MessageSquare,
    title: 'Smart Chatbot',
    description: 'Intelligent conversation flow that gathers medical history efficiently'
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Round-the-clock healthcare assistance for emergency situations'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'HIPAA-compliant platform ensuring patient data privacy and security'
  },
  {
    icon: Award,
    title: 'Expert Doctors',
    description: 'Network of verified healthcare professionals and specialists'
  }
];

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="medical-title">{t('features.title')}</h2>
          <p className="medical-subtitle max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.titleKey} 
              className="medical-card hover:scale-105 transition-transform duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center medical-glow`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="medical-card p-6 space-y-4 hover:scale-105 transition-transform duration-300 fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};