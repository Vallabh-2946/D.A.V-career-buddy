
import { useState } from 'react';
import { Home, BarChart3, Compass, BookOpen, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItem) => (
  <button
    className={cn(
      'flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full',
      active 
        ? 'bg-primary text-primary-foreground' 
        : 'hover:bg-muted text-foreground'
    )}
    onClick={onClick}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </button>
);

export const NavBar = ({ 
  activeSection, 
  setActiveSection 
}: { 
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'quiz', label: 'Career Quiz', icon: Compass },
    { id: 'suggestions', label: 'Suggestions', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'goals', label: 'Weekly Goals', icon: Target }
  ];

  return (
    <nav className="bg-card p-4 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row md:flex-col gap-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};
