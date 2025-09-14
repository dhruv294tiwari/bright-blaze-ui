import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Stethoscope, Video, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    valueKey: 'stats.patients',
    value: 50000,
    suffix: '+',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Stethoscope,
    valueKey: 'stats.doctors',
    value: 500,
    suffix: '+',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Video,
    valueKey: 'stats.consultations',
    value: 75000,
    suffix: '+',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe,
    valueKey: 'stats.languages',
    value: 12,
    suffix: '+',
    color: 'from-orange-500 to-orange-600'
  }
];

interface CounterProps {
  target: number;
  suffix: string;
}

const Counter = ({ target, suffix }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.min(prev + increment, target);
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{Math.floor(count).toLocaleString()}{suffix}</span>;
};

export const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Transforming Lives Across Rural India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our impact speaks for itself - real numbers from real communities
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.valueKey}
              className="medical-card hover:scale-105 transition-all duration-300 slide-up border-0 bg-white dark:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center medical-glow`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {t(stat.valueKey)}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: '85%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center fade-in">
          <div className="medical-card p-8 bg-gradient-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">96%</div>
                <p className="text-sm text-muted-foreground">Patient Satisfaction Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">75%</div>
                <p className="text-sm text-muted-foreground">Reduced Travel Time</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <p className="text-sm text-muted-foreground">Healthcare Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};