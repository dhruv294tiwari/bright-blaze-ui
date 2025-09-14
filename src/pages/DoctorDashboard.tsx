import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Phone, 
  Video,
  Heart,
  LogOut,
  User,
  Settings
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const DoctorDashboard = () => {
  const { t } = useTranslation();
  
  // Mock data - replace with real data from backend
  const [todayAppointments] = useState([
    {
      id: 1,
      patientName: 'राजू शर्मा',
      time: '09:00 AM',
      type: 'Video Call',
      status: 'upcoming',
      symptoms: 'बुखार, सिरदर्द'
    },
    {
      id: 2,
      patientName: 'सुनीता देवी',
      time: '10:30 AM',
      type: 'Phone Call',
      status: 'completed',
      symptoms: 'पेट दर्द'
    },
    {
      id: 3,
      patientName: 'मोहन कुमार',
      time: '02:00 PM',
      type: 'Video Call',
      status: 'upcoming',
      symptoms: 'सांस की तकलीफ'
    }
  ]);

  const [recentPatients] = useState([
    {
      id: 1,
      name: 'राजू शर्मा',
      lastVisit: '2024-01-15',
      condition: 'हाइपरटेंशन',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'सुनीता देवी',
      lastVisit: '2024-01-14',
      condition: 'डायबिटीज',
      status: 'Under Treatment'
    }
  ]);

  const stats = {
    todayAppointments: 5,
    totalPatients: 142,
    pendingReports: 8,
    completedConsultations: 236
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-primary text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-primary">GrameenCure</span>
              </div>
              <Badge variant="secondary">डॉक्टर डैशबोर्ड</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                {t('dashboard.settings')}
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                {t('dashboard.logout')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            नमस्ते, डॉ. राजेश कुमार
          </h1>
          <p className="text-muted-foreground">
            आज आपके पास {stats.todayAppointments} अपॉइंटमेंट्स हैं
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">आज के अपॉइंटमेंट्स</p>
                  <p className="text-2xl font-bold text-primary">{stats.todayAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">कुल मरीज़</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalPatients}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">लंबित रिपोर्ट्स</p>
                  <p className="text-2xl font-bold text-primary">{stats.pendingReports}</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">पूर्ण परामर्श</p>
                  <p className="text-2xl font-bold text-primary">{stats.completedConsultations}</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="appointments">आज के अपॉइंटमेंट्स</TabsTrigger>
            <TabsTrigger value="patients">मरीज़ों की सूची</TabsTrigger>
            <TabsTrigger value="reports">रिपोर्ट्स</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>आज के अपॉइंटमेंट्स</CardTitle>
                <CardDescription>
                  आपके आज के सभी शेड्यूल किए गए अपॉइंटमेंट्स
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{appointment.patientName}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.symptoms}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{appointment.time}</p>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            {appointment.type === 'Video Call' ? (
                              <Video className="h-4 w-4" />
                            ) : (
                              <Phone className="h-4 w-4" />
                            )}
                            <span>{appointment.type}</span>
                          </div>
                        </div>
                        <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                          {appointment.status === 'completed' ? 'पूर्ण' : 'आगामी'}
                        </Badge>
                        {appointment.status === 'upcoming' && (
                          <Button size="sm" className="medical-button">
                            शुरू करें
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>मरीज़ों की सूची</CardTitle>
                <CardDescription>
                  आपके हाल के मरीज़ों की जानकारी
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{patient.name}</h3>
                          <p className="text-sm text-muted-foreground">अंतिम विज़िट: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{patient.condition}</p>
                          <Badge variant="outline">{patient.status}</Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          विवरण देखें
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>रिपोर्ट्स और विश्लेषण</CardTitle>
                <CardDescription>
                  आपकी प्रैक्टिस का विस्तृत विश्लेषण
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">रिपोर्ट्स सेक्शन जल्द ही उपलब्ध होगा</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorDashboard;