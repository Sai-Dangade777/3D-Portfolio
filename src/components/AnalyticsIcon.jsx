import {
  BarChart3,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  FileSpreadsheet,
  GitCompareArrows,
  Gauge,
  LayoutDashboard,
  MessageSquareCheck,
  PanelsTopLeft,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
  Sigma,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

const icons = {
  analytics: BarChart3,
  aiAnalytics: BrainCircuit,
  aiEvaluation: BadgeCheck,
  badgeCheck: BadgeCheck,
  chart: BarChart3,
  cleaning: Sparkles,
  code: Code2,
  dashboard: LayoutDashboard,
  database: Database,
  excel: FileSpreadsheet,
  formula: Sigma,
  gauge: Gauge,
  messageCheck: MessageSquareCheck,
  panels: PanelsTopLeft,
  pipeline: Workflow,
  python: Code2,
  search: Search,
  server: Server,
  shieldCheck: ShieldCheck,
  shuffle: Shuffle,
  terminal: TerminalSquare,
  compare: GitCompareArrows,
};

const AnalyticsIcon = ({ name, className = 'h-8 w-8' }) => {
  const Icon = icons[name] || BarChart3;

  return <Icon aria-hidden="true" className={className} strokeWidth={1.8} />;
};

export default AnalyticsIcon;
