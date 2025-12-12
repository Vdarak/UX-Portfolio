import React, { useState } from 'react';
import { CheckCircle2, Circle, Loader2, AlertCircle, ShieldAlert, ChevronRight } from 'lucide-react';

// Mock component to demonstrate the "Molecule" level of the system
export const AgentPlanViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { id: 1, label: 'Analyze request context', status: 'completed', duration: '120ms' },
    { id: 2, label: 'Query vector database', status: 'completed', duration: '450ms' },
    { id: 3, label: 'Draft email response', status: 'processing', duration: 'Thinking...' },
    { id: 4, label: 'Send via Gmail API', status: 'pending', risk: 'high' },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white/5 border border-white/10 rounded-lg overflow-hidden font-mono">
      <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-xs font-bold text-white">Agent Execution Plan</span>
        </div>
        <span className="text-[10px] font-mono text-white/40">Trace: ax-992-b</span>
      </div>
      
      <div className="p-5 space-y-5">
        {steps.map((step, idx) => (
          <div key={step.id} className={`flex gap-4 ${step.status === 'pending' ? 'opacity-50' : 'opacity-100'}`}>
            <div className="mt-0.5">
              {step.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              {step.status === 'processing' && <Loader2 className="w-5 h-5 text-accent animate-spin" />}
              {step.status === 'pending' && <Circle className="w-5 h-5 text-white/20" />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className={`text-sm font-medium ${step.status === 'processing' ? 'text-accent' : 'text-white'}`}>
                  {step.label}
                </span>
                <span className="text-[10px] font-mono text-white/40">{step.duration}</span>
              </div>
              
              {step.risk === 'high' && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded text-orange-200">
                    <ShieldAlert className="w-3 h-3" />
                    <span className="text-[10px] font-medium">Human approval required</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 p-4 border-t border-white/10 flex gap-3">
        <button className="flex-1 bg-transparent border border-white/20 text-white/60 text-xs font-medium py-2 rounded hover:text-white transition-colors">
            Modify Plan
        </button>
        <button className="flex-1 bg-accent text-black text-xs font-bold py-2 rounded hover:bg-accent/90 transition-colors shadow-sm">
            Approve & Run
        </button>
      </div>
    </div>
  );
};
