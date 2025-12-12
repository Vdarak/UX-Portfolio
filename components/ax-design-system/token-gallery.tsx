import React from 'react';

const ColorSwatch = ({ color, name, value, usage }: { color: string, name: string, value: string, usage?: string }) => (
  <div className="flex flex-col gap-2">
    <div className="h-12 w-full rounded-md shadow-sm border border-white/20 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: color }}>
        <span className="sr-only">{name}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-md font-bold text-white">{name}</span>
      <span className="text-sm text-white/60 font-mono">{value}</span>
      {usage && <span className="text-sm text-white/40 mt-1 font-mono">{usage}</span>}
    </div>
  </div>
);

const TokenSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8 last:mb-0">
        <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2 font-sans">{title}</h3>
        {children}
    </div>
);

export const TokenGallery: React.FC = () => {
  return (
    <div className="space-y-2 bg-transparent">
      <TokenSection title="Semantic Risk Tokens (Decision Impact)">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch color="#10b981" name="risk-low" value="Green-500" usage="Reversible actions, reads" />
          <ColorSwatch color="#f59e0b" name="risk-medium" value="Amber-500" usage="Edits, costs < $50" />
          <ColorSwatch color="#ef4444" name="risk-high" value="Red-500" usage="Deletes, Auth, Costs > $50" />
          <ColorSwatch color="#6366f1" name="risk-critical" value="Indigo-500" usage="System config, Policy" />
        </div>
      </TokenSection>

      <TokenSection title="Data Sensitivity & Permissions">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 border border-white/20 rounded-lg bg-white/5">
                <div className="font-mono text-xs text-accent font-bold mb-1">scope.read</div>
                <div className="text-[10px] text-white/60">Read-only access</div>
            </div>
            <div className="p-3 border border-white/20 rounded-lg bg-white/5">
                <div className="font-mono text-xs text-orange-400 font-bold mb-1">scope.write</div>
                <div className="text-[10px] text-white/60">Modify records</div>
            </div>
            <div className="p-3 border border-white/20 rounded-lg bg-white/5">
                <div className="font-mono text-xs text-purple-400 font-bold mb-1">data.pii</div>
                <div className="text-[10px] text-white/60">Personally Identifiable</div>
            </div>
            <div className="p-3 border border-white/20 rounded-lg bg-white/5">
                <div className="font-mono text-xs text-white font-bold mb-1">audit.required</div>
                <div className="text-[10px] text-white/60">Must log to ledger</div>
            </div>
         </div>
      </TokenSection>

      <TokenSection title="Telemetry Tokens (Standard Event Keys)">
        <div className="bg-black/40 rounded-lg p-4 font-mono text-[10px] text-white/80 grid grid-cols-2 gap-x-8 gap-y-2 border border-white/20">
            <span>event.actor_type: <span className="text-emerald-400">"agent" | "human"</span></span>
            <span>event.trace_id: <span className="text-emerald-400">UUID</span></span>
            <span>event.risk_level: <span className="text-emerald-400">"low" | "high"</span></span>
            <span>event.component: <span className="text-emerald-400">"AX.ApprovalGate"</span></span>
        </div>
      </TokenSection>
    </div>
  );
};
