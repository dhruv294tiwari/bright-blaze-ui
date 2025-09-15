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

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.ceil(prev + increment);
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.valueKey} 
              className="medical-card text-center hover:scale-105 transition-transform duration-300 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center medical-glow`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {t(stat.valueKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};