import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  FileText, 
  Pill, 
  Phone,
  Video,
  Heart,
  LogOut,
  User,
  Settings,
  Plus
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const PatientDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here when backend is implemented
    navigate('/');
  };
  
  // Mock data - replace with real data from backend
  const [upcomingAppointments] = useState([
    {
      id: 1,
      doctorName: 'डॉ. राजेश कुमार',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'Video Call',
      specialization: 'सामान्य चिकित्सा'
    },
    {
      id: 2,
      doctorName: 'डॉ. प्रिया शर्मा',
      date: '2024-01-25',
      time: '02:30 PM',
      type: 'Phone Call',
      specialization: 'हृदय रोग विशेषज्ञ'
    }
  ]);

  const [prescriptions] = useState([
    {
      id: 1,
      doctorName: 'डॉ. राजेश कुमार',
      date: '2024-01-15',
      medicines: [
        { name: 'पैरासिटामोल', dosage: '500mg', frequency: 'दिन में 3 बार' },
        { name: 'सिट्रिजिन', dosage: '10mg', frequency: 'दिन में 1 बार' }
      ]
    }
  ]);

  const [healthRecords] = useState([
    {
      id: 1,
      date: '2024-01-15',
      type: 'परामर्श',
      doctor: 'डॉ. राजेश कुमार',
      diagnosis: 'सामान्य बुखार',
      notes: 'आराम और दवा की सलाह दी गई'
    },
    {
      id: 2,
      date: '2024-01-10',
      type: 'जांच रिपोर्ट',
      doctor: 'डॉ. प्रिया शर्मा',
      diagnosis: 'ब्लड टेस्ट सामान्य',
      notes: 'सभी पैरामीटर सामान्य सीमा में'
    }
  ]);

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
              <Badge variant="secondary">मरीज़ डैशबोर्ड</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button variant="outline" size="sm" onClick={handleLogout}>
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
            नमस्ते, राजू शर्मा
          </h1>
          <p className="text-muted-foreground">
            आपकी स्वास्थ्य यात्रा में आपका स्वागत है
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Plus className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">नया अपॉइंटमेंट</h3>
              <p className="text-sm text-muted-foreground">डॉक्टर के साथ मुलाकात बुक करें</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">तत्काल परामर्श</h3>
              <p className="text-sm text-muted-foreground">तुरंत डॉक्टर से बात करें</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">रिपोर्ट अपलोड</h3>
              <p className="text-sm text-muted-foreground">अपनी मेडिकल रिपोर्ट साझा करें</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments">अपॉइंटमेंट्स</TabsTrigger>
            <TabsTrigger value="prescriptions">दवाइयां</TabsTrigger>
            <TabsTrigger value="records">स्वास्थ्य रिकॉर्ड</TabsTrigger>
            <TabsTrigger value="profile">प्रोफाइल</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>आगामी अपॉइंटमेंट्स</CardTitle>
                <CardDescription>
                  आपके आगामी डॉक्टर की मुलाकातें
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{appointment.doctorName}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{appointment.date}</p>
                          <p className="text-sm text-muted-foreground">{appointment.time}</p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          {appointment.type === 'Video Call' ? (
                            <Video className="h-4 w-4 text-primary" />
                          ) : (
                            <Phone className="h-4 w-4 text-primary" />
                          )}
                          <span className="text-muted-foreground">{appointment.type}</span>
                        </div>
                        <Button size="sm" className="medical-button">
                          जॉइन करें
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card>
              <CardHeader>
                <CardTitle>वर्तमान दवाइयां</CardTitle>
                <CardDescription>
                  डॉक्टर द्वारा दी गई दवाओं की सूची
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">{prescription.doctorName}</h3>
                          <p className="text-sm text-muted-foreground">दिनांक: {prescription.date}</p>
                        </div>
                        <Badge variant="outline">सक्रिय</Badge>
                      </div>
                      <div className="space-y-3">
                        {prescription.medicines.map((medicine, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-md">
                            <Pill className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <h4 className="font-medium">{medicine.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {medicine.dosage} - {medicine.frequency}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="records">
            <Card>
              <CardHeader>
                <CardTitle>स्वास्थ्य रिकॉर्ड</CardTitle>
                <CardDescription>
                  आपका पूरा मेडिकल इतिहास
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthRecords.map((record) => (
                    <div key={record.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{record.type}</h3>
                            <p className="text-sm text-muted-foreground">{record.date}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{record.doctor}</Badge>
                      </div>
                      <div className="ml-11">
                        <p className="font-medium text-sm mb-1">निदान: {record.diagnosis}</p>
                        <p className="text-sm text-muted-foreground">{record.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>प्रोफाइल जानकारी</CardTitle>
                <CardDescription>
                  अपनी व्यक्तिगत जानकारी को अपडेट करें
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">प्रोफाइल सेक्शन जल्द ही उपलब्ध होगा</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;