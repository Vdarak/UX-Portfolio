import React from 'react';

export interface ArtifactCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`my-8 border border-white/10 rounded-xl overflow-hidden bg-white/5 ${className}`}>
      <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center">
        <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">{title}</span>
        {description && <span className="text-xs text-white/60">{description}</span>}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
