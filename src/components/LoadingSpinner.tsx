import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ className = "w-4 h-4" }: { className?: string }) => (
  <Loader2 className={`animate-spin ${className}`} />
);

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner className="w-8 h-8" />
  </div>
);