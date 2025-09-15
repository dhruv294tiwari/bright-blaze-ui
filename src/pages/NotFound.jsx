import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm">
            <Heart className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-white/90">Page Not Found</h2>
          <p className="text-white/80 leading-relaxed">
            The page you're looking for doesn't exist. You might have mistyped the URL or the page has been moved.
          </p>
        </div>

        <Button 
          asChild
          className="medical-button bg-white text-primary hover:bg-white/90 border-transparent"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;