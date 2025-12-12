import React from 'react';
import { 
    MessageSquare, 
    Bot, 
    CheckCircle2, 
    AlertCircle, 
    FileText, 
    Send, 
    MoreHorizontal, 
    Clock, 
    Shield, 
    Zap,
    ChevronRight,
    Sparkles
} from 'lucide-react';

// --- HELPER WRAPPERS ---

const ShowcaseSection = ({ title, sub, children }: { title: string, sub: string, children: React.ReactNode }) => (
    <div className="mb-16">
        <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-lg font-mono text-white/80 max-w-2xl">{sub}</p>
        </div>
        {children}
    </div>
);

const ComponentCard = ({ name, type, children, className = "" }: { name: string, type?: string, children: React.ReactNode, className?: string }) => (
    <div className={`flex flex-col border border-white/20 rounded-xl bg-white/5 overflow-hidden ${className}`}>
        <div className="p-6 flex-1 flex items-center justify-center min-h-[120px] bg-black/20">
            {children}
        </div>
        <div className="px-4 py-3 flex justify-between items-center border-t border-white/20 bg-white/5">
            <span className="text-sm font-bold text-white tracking-tight font-mono">{name}</span>
            {type && <span className="text-[10px] px-2 py-1 bg-white/10 text-white/60 rounded-full font-mono uppercase tracking-wider">{type}</span>}
        </div>
    </div>
);

// --- 1. ATOMS ---

const AtomGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Identity & Context */}
        <ComponentCard name="Agent Avatar" type="Identity">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shadow-lg shadow-accent/20">
                    <Bot size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-black rounded-full" />
            </div>
        </ComponentCard>

        <ComponentCard name="Channel Tag" type="Context">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-sans text-white/80 tracking-tight">
                <MessageSquare size={12} className="text-white/40" />
                <span>#product-launch</span>
            </div>
        </ComponentCard>

        {/* Status & Feedback */}
        <ComponentCard name="Status Badge" type="Feedback">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-full text-xs font-sans tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span>Analyzing</span>
            </div>
        </ComponentCard>

        <ComponentCard name="Confidence" type="Trust">
            <div className="flex flex-col gap-1 w-full max-w-[100px]">
                <div className="flex justify-between text-[10px] font-mono text-white/60">
                    <span>Confidence</span>
                    <span className="text-emerald-400">98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[98%]" />
                </div>
            </div>
        </ComponentCard>

        {/* Actions */}
        <ComponentCard name="Action Button" type="Interaction">
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold rounded hover:bg-white/90 transition-colors font-sans uppercase tracking-wide">
                <Zap size={14} />
                Execute
            </button>
        </ComponentCard>

        <ComponentCard name="Secondary Action" type="Interaction">
            <button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/10 transition-colors font-sans tracking-tight">
                Edit Draft
            </button>
        </ComponentCard>
        
        {/* Data */}
        <ComponentCard name="Data Chip" type="Data">
             <div className="font-mono text-[10px] text-white/60 bg-black/40 px-2 py-1 rounded border border-white/10">
                <span className="text-purple-400">summary_len</span>: <span className="text-orange-400">240</span>
            </div>
        </ComponentCard>

        <ComponentCard name="Source Link" type="Data">
             <a href="#" className="flex items-center gap-1 text-[10px] text-accent hover:underline font-mono">
                <FileText size={10} />
                <span>view_source_log</span>
            </a>
        </ComponentCard>
    </div>
);

// --- 2. MOLECULES ---

const MoleculesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Insight Card */}
        <ComponentCard name="Insight Card" type="Molecule" className="md:col-span-1">
            <div className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-sans">
                <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-blue-500/10 rounded-md text-blue-400">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">Key Insight Detected</h4>
                        <p className="text-xs text-white/60 mt-1">Launch date risk identified in thread.</p>
                    </div>
                </div>
                <div className="pl-11">
                    <div className="text-[10px] bg-black/40 p-2 rounded border border-white/5 text-white/50 font-mono">
                        "We might need to push the release by 2 days due to the API bug."
                    </div>
                </div>
            </div>
        </ComponentCard>

        {/* Action Proposal */}
        <ComponentCard name="Action Proposal" type="Molecule" className="md:col-span-1">
            <div className="w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <div className="p-3 border-b border-white/10 bg-white/5 flex justify-between items-center">
                    <span className="text-xs font-bold text-white font-sans tracking-tight flex items-center gap-2 uppercase">
                        <Send size={12} /> PROPOSED ACTION
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">ID: act_992</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-white/80 mb-4 font-sans">Draft email to <span className="text-accent">@stakeholders</span> regarding delay.</p>
                    <div className="flex gap-2">
                        <button className="flex-1 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-sans font-bold tracking-wide rounded hover:bg-emerald-500/30 uppercase">
                            APPROVE
                        </button>
                        <button className="flex-1 py-1.5 bg-white/5 border border-white/10 text-white/60 text-xs font-sans font-bold tracking-wide rounded hover:bg-white/10 uppercase">
                            REJECT
                        </button>
                    </div>
                </div>
            </div>
        </ComponentCard>
    </div>
);

// --- 3. ORGANISMS ---

const OrganismsGrid = () => (
    <div className="w-full">
        <ComponentCard name="Command Center Feed" type="Organism" className="w-full">
            <div className="w-full max-w-2xl bg-black/40 border border-white/10 rounded-xl overflow-hidden font-sans">
                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                            <Bot size={16} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white font-sans tracking-tight">Cofounder Agent</h3>
                            <p className="text-xs text-white/50 font-mono">Active • Monitoring #product-launch</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                </div>

                {/* Feed Body */}
                <div className="p-6 space-y-6">
                    
                    {/* Step 1: Ingestion */}
                    <div className="flex gap-4 opacity-50">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                <MessageSquare size={12} className="text-white/60" />
                            </div>
                            <div className="w-px h-full bg-white/10" />
                        </div>
                        <div className="pb-4">
                            <p className="text-xs text-white/40 font-mono mb-1">10:42 AM</p>
                            <p className="text-sm text-white/60 font-sans">Ingested 42 new messages from Slack.</p>
                        </div>
                    </div>

                    {/* Step 2: Analysis */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <Sparkles size={12} className="text-blue-400" />
                            </div>
                            <div className="w-px h-full bg-white/10" />
                        </div>
                        <div className="pb-4 w-full">
                            <p className="text-xs text-white/40 font-mono mb-1">10:43 AM</p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-white font-sans tracking-tight">Summary Generated</span>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 font-mono">High Confidence</span>
                                </div>
                                <p className="text-sm text-white/80 leading-relaxed font-sans">
                                    The team has identified a critical bug in the API layer. <span className="text-white font-medium bg-white/10 px-1 rounded">@sarah</span> suggests a 48h delay.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Action Required */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                                <Shield size={12} className="text-accent" />
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-xs text-white/40 font-mono mb-1">Just now</p>
                            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2 font-sans tracking-tight">
                                    <AlertCircle size={14} className="text-accent" />
                                    Approval Required
                                </h4>
                                <p className="text-sm text-white/70 mb-4 font-sans">
                                    I've drafted an update email to the executive team proposing the new timeline.
                                </p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-accent text-black text-xs font-bold rounded hover:bg-accent/90 transition-colors font-sans uppercase tracking-wide">
                                        REVIEW DRAFT
                                    </button>
                                    <button className="px-4 py-2 bg-transparent border border-white/20 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors font-sans tracking-tight">
                                        DISMISS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ComponentCard>
    </div>
);

export const ComponentShowcase = () => {
  return (
    <div className="space-y-24">
      <ShowcaseSection 
        title="1. Atoms" 
        sub="The fundamental building blocks: Identity, Context, Feedback, and Trust."
      >
        <AtomGrid />
      </ShowcaseSection>

      <ShowcaseSection 
        title="2. Molecules" 
        sub="Combining atoms into functional units: Insights, Proposals, and Logs."
      >
        <MoleculesGrid />
      </ShowcaseSection>

      <ShowcaseSection 
        title="3. Organisms" 
        sub="Complex interfaces for end-to-end agent workflows."
      >
        <OrganismsGrid />
      </ShowcaseSection>
    </div>
  );
};