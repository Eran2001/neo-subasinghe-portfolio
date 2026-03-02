import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { Camera } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-muted rounded-3xl flex items-center justify-center text-primary mb-8">
        <Camera size={48} />
      </div>
      <h1 className="text-8xl font-black mb-4 tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold mb-6">Lost in Focus?</h2>
      <p className="text-xl text-muted-foreground max-w-md mb-12">
        The page you're looking for seems to have moved or doesn't exist. Let's get you back to the gallery.
      </p>
      <Link to="/">
        <Button size="lg" className="rounded-full px-12 py-8 text-lg">
          Return Home
        </Button>
      </Link>
    </div>
  );
};
