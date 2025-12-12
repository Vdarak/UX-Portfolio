import React from 'react';

const FoundationSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-12 last:mb-0">
        <h4 className="text-sm font-semibold mb-6 text-white/60 uppercase tracking-widest font-mono">{title}</h4>
        {children}
    </div>
);

export const Foundations = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        
        {/* Typography */}
        <FoundationSection title="Typography">
            <div className="space-y-8">
                <div className="flex flex-col gap-2">
                    <span className="text-xs text-white/40 font-mono">Primary (Human Interface)</span>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-4xl font-sans font-light text-white mb-2">Inter / Sans</p>
                        <p className="text-sm text-white/60 font-sans">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-xs text-white/40 font-mono">Secondary (Agent Data)</span>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-4xl font-mono font-normal text-accent mb-2">JetBrains / Mono</p>
                        <p className="text-sm text-white/60 font-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789</p>
                    </div>
                </div>
            </div>
        </FoundationSection>

        {/* Colors & Radius */}
        <div className="space-y-12">
            <FoundationSection title="Color Palette">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="h-16 bg-white rounded-lg border border-white/10"></div>
                        <div className="flex justify-between text-xs font-mono text-white/60">
                            <span>Surface</span>
                            <span>#FFFFFF</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-16 bg-accent rounded-lg border border-white/10"></div>
                        <div className="flex justify-between text-xs font-mono text-white/60">
                            <span>Accent</span>
                            <span>#FF4D00</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-16 bg-emerald-500 rounded-lg border border-white/10"></div>
                        <div className="flex justify-between text-xs font-mono text-white/60">
                            <span>Trust</span>
                            <span>#10B981</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-16 bg-purple-500 rounded-lg border border-white/10"></div>
                        <div className="flex justify-between text-xs font-mono text-white/60">
                            <span>Data</span>
                            <span>#A855F7</span>
                        </div>
                    </div>
                </div>
            </FoundationSection>

            <FoundationSection title="Radius & Spacing">
                <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-white/20 rounded-sm bg-white/5"></div>
                        <span className="text-xs font-mono text-white/40">sm (2px)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-white/20 rounded-md bg-white/5"></div>
                        <span className="text-xs font-mono text-white/40">md (6px)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-white/20 rounded-xl bg-white/5"></div>
                        <span className="text-xs font-mono text-white/40">xl (12px)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 border border-white/20 rounded-full bg-white/5"></div>
                        <span className="text-xs font-mono text-white/40">full</span>
                    </div>
                </div>
            </FoundationSection>
        </div>
    </div>
  );
};
