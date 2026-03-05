import { Menu, User, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNeedCareClick?: () => void;
  onProvideCareClick?: () => void;
  onHomeClick?: () => void;
  onOurStoryClick?: () => void;
  onFeatureRequestClick?: () => void;
}

export function Header({ onNeedCareClick, onProvideCareClick, onHomeClick, onOurStoryClick, onFeatureRequestClick }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={onHomeClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Heart className="h-8 w-8 text-indigo-600 fill-indigo-600" />
            </div>
            <span className="text-2xl text-indigo-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Care Bridge
            </span>
          </div>
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={onNeedCareClick} className="hover:text-indigo-600 transition-colors">
            Need Care
          </button>
          <button onClick={onProvideCareClick} className="hover:text-indigo-600 transition-colors">
            Provide Care
          </button>
          <a href="#safety" className="hover:text-indigo-600 transition-colors">
            Trust & Safety
          </a>
          <button onClick={onOurStoryClick} className="hover:text-indigo-600 transition-colors">
            Our Story
          </button>
          <button onClick={onFeatureRequestClick} className="hover:text-indigo-600 transition-colors">
            Feedback
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}