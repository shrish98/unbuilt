"use client";

import { useState } from "react";
import {
  Zap,
  Calendar,
  Play,
  Star,
  CheckCircle2,
  ArrowRight,
  Youtube,
  Mail,
  Video,
  Sparkles,
  BarChart3,
  Clock,
  Globe,
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  Users,
  MessageSquare,
  Instagram,
} from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// ─── TikTok icon (not in lucide) ───────────────────────────────────────────
const TikTokIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
  </svg>
);

// ─── Nav ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Features", "How It Works", "Pricing", "Testimonials"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-[#04040f]/80 border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <Play size={14} className="text-white fill-white ml-0.5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Vid<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Max</span>
        </span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/ /g, "-")}`}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </nav>

      {/* CTA */}
      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <SignedOut>
          <a href="/sign-in" className="text-sm text-white/70 hover:text-white transition-colors">Sign in</a>
          <a
            href="/sign-up"
            className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-medium transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Start Free Trial
          </a>
        </SignedOut>
        <SignedIn>
          <a
            href="/dashboard"
            className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-medium transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Dashboard
          </a>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#06061a] border-b border-white/5 px-6 py-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="/sign-up"
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-center"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-[10%] w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8 animate-fade-in">
        <Sparkles size={14} className="text-violet-400" />
        Powered by Advanced AI · Trusted by 12,000+ creators
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-4xl">
        Create & Schedule{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
          AI Short Videos
        </span>{" "}
        <br className="hidden md:block" />
        Across Every Platform
      </h1>

      {/* Sub */}
      <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
        VidMax generates viral short videos from a simple prompt and auto-schedules them to{" "}
        <span className="text-white/80">YouTube Shorts, Instagram Reels, TikTok,</span> and{" "}
        <span className="text-white/80">Email campaigns</span> — hands-free.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-14">
        <SignedOut>
          <a
            href="/sign-up"
            id="hero-start-free"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-base transition-all duration-200 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1"
          >
            Start for Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </SignedOut>
        <SignedIn>
          <a
            href="/dashboard"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-base transition-all duration-200 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1"
          >
            Go to Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </SignedIn>
        <a
          href="#how-it-works"
          id="hero-watch-demo"
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1"
        >
          <Play size={16} className="text-violet-400" />
          Watch Demo
        </a>
      </div>

      {/* Platform logos */}
      <div className="flex items-center gap-6 text-white/30 flex-wrap justify-center">
        <span className="text-xs uppercase tracking-widest text-white/25 mr-2">Publish to</span>
        <div className="flex items-center gap-2 text-red-400/70 hover:text-red-400 transition-colors" title="YouTube">
          <Youtube size={22} />
          <span className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors">YouTube</span>
        </div>
        <div className="flex items-center gap-2 text-pink-400/70 hover:text-pink-400 transition-colors" title="Instagram">
          <Instagram size={22} />
          <span className="text-sm font-medium text-white/40">Instagram</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors" title="TikTok">
          <TikTokIcon size={20} />
          <span className="text-sm font-medium text-white/40">TikTok</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400/70 hover:text-blue-400 transition-colors" title="Email">
          <Mail size={22} />
          <span className="text-sm font-medium text-white/40">Email</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "12K+", label: "Active Creators", icon: Users },
    { value: "2.4M+", label: "Videos Generated", icon: Video },
    { value: "98%", label: "Schedule Accuracy", icon: Clock },
    { value: "4.9★", label: "User Rating", icon: Star },
  ];
  return (
    <section className="py-16 px-6 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon size={20} className="text-violet-400 mb-1" />
            <span className="text-3xl md:text-4xl font-extrabold text-white">{value}</span>
            <span className="text-sm text-white/40 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Feature card ──────────────────────────────────────────────────────────
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  gradient: string;
  badge?: string;
}
function FeatureCard({ icon: Icon, title, desc, gradient, badge }: FeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon size={22} className="text-white" />
      </div>
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
          {badge}
        </span>
      )}
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Video Generation",
      desc: "Turn any text prompt into a polished short video with AI voiceover, animations, captions, and music — in under 60 seconds.",
      gradient: "bg-gradient-to-br from-violet-600 to-fuchsia-600",
      badge: "Core",
    },
    {
      icon: Calendar,
      title: "Smart Auto-Scheduling",
      desc: "VidMax's AI picks the optimal posting time for each platform based on your audience analytics and engagement patterns.",
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
      badge: "AI",
    },
    {
      icon: Globe,
      title: "Multi-Platform Publishing",
      desc: "Publish simultaneously to YouTube Shorts, Instagram Reels, TikTok, and email newsletters with one click.",
      gradient: "bg-gradient-to-br from-emerald-600 to-teal-600",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      desc: "Track views, engagement, retention, and cross-platform ROI from a unified dashboard updated in real-time.",
      gradient: "bg-gradient-to-br from-orange-600 to-red-600",
    },
    {
      icon: Zap,
      title: "Bulk Video Batching",
      desc: "Generate a week's worth of content in minutes. Upload a topic list and let VidMax do the rest — automatically.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      badge: "Pro",
    },
    {
      icon: MessageSquare,
      title: "AI Script & Caption Writer",
      desc: "Get SEO-optimized scripts, viral hooks, and platform-specific captions generated automatically for every video.",
      gradient: "bg-gradient-to-br from-pink-600 to-rose-600",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Everything you need to go{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">viral</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base leading-relaxed">
            From idea to published video across every platform — VidMax handles the entire workflow so you can focus on growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Describe Your Video",
      desc: "Type a topic, paste a script, or upload a URL. VidMax's AI instantly understands your intent and brand voice.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "AI Generates Your Video",
      desc: "Watch as VidMax crafts your video with a professional voiceover, dynamic visuals, captions, and background music.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Choose Platforms & Schedule",
      desc: "Select YouTube, Instagram, TikTok, Email — or all four. Set a time or let VidMax auto-schedule for peak engagement.",
      icon: Calendar,
    },
    {
      num: "04",
      title: "Publish & Track Results",
      desc: "Your content goes live automatically. Monitor performance across all platforms from one unified analytics dashboard.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            From idea to viral in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">4 steps</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            No video editing skills required. VidMax's end-to-end AI pipeline does it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc, icon: Icon }, i) => (
            <div key={num} className="relative flex flex-col gap-4">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] right-0 w-full h-px bg-gradient-to-r from-violet-500/30 to-transparent z-10" />
              )}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 relative">
                  <Icon size={22} className="text-violet-400" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400/70 mb-1">{num}</p>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Platforms ─────────────────────────────────────────────────────────────
function Platforms() {
  const platforms = [
    {
      icon: Youtube,
      name: "YouTube Shorts",
      desc: "Auto-upload optimized 9:16 videos with AI-generated titles, descriptions, tags, and thumbnails.",
      color: "text-red-400",
      border: "border-red-500/20",
      bg: "bg-red-500/5",
      glow: "shadow-red-500/10",
    },
    {
      icon: Instagram,
      name: "Instagram Reels",
      desc: "Post Reels and Stories with hashtag-optimized captions timed to your audience's peak activity.",
      color: "text-pink-400",
      border: "border-pink-500/20",
      bg: "bg-pink-500/5",
      glow: "shadow-pink-500/10",
    },
    {
      icon: TikTokIcon,
      name: "TikTok",
      desc: "Publish trend-aware videos with viral hooks, sounds, and captions fine-tuned for the TikTok algorithm.",
      color: "text-white/70",
      border: "border-white/10",
      bg: "bg-white/[0.03]",
      glow: "shadow-white/5",
    },
    {
      icon: Mail,
      name: "Email Campaigns",
      desc: "Embed short videos into your email newsletters and drip campaigns to boost click-through rates by 3×.",
      color: "text-blue-400",
      border: "border-blue-500/20",
      bg: "bg-blue-500/5",
      glow: "shadow-blue-500/10",
    },
  ];

  return (
    <section id="platforms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Multi-Platform</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            One video,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">every platform</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            VidMax reformats and optimizes each video for the platform it's being published to — automatically.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map(({ icon: Icon, name, desc, color, border, bg, glow }) => (
            <div
              key={name}
              className={`p-5 rounded-2xl border ${border} ${bg} hover:-translate-y-1 transition-all duration-300 shadow-xl ${glow} cursor-default`}
            >
              <Icon size={28} className={`${color} mb-4`} />
              <h3 className="text-sm font-semibold text-white mb-2">{name}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────
interface PlanProps {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}
function PricingCard({ name, price, period, desc, features, cta, highlight, badge }: PlanProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${highlight
        ? "border-violet-500/50 bg-gradient-to-b from-violet-900/40 to-[#06061a] shadow-2xl shadow-violet-500/20"
        : "border-white/8 bg-white/[0.03] hover:border-white/15"
        }`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-lg shadow-violet-500/30">
          {badge}
        </div>
      )}
      <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-2">{name}</p>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-white/40 text-sm mb-1.5">{period}</span>
      </div>
      <p className="text-sm text-white/40 mb-7">{desc}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
            <CheckCircle2 size={15} className="text-violet-400 mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 ${highlight
          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/25"
          : "border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white"
          }`}
      >
        {cta}
      </a>
    </div>
  );
}

function Pricing() {
  const plans: PlanProps[] = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      desc: "Perfect for individual creators just getting started.",
      features: [
        "10 AI videos per month",
        "YouTube & TikTok publishing",
        "Basic scheduling",
        "720p video quality",
        "Community support",
      ],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      desc: "For serious creators scaling their content strategy.",
      features: [
        "100 AI videos per month",
        "All 4 platform publishing",
        "AI auto-scheduling",
        "1080p HD video quality",
        "Analytics dashboard",
        "Custom branding & watermarks",
        "Priority support",
      ],
      cta: "Start Pro Trial",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Agency",
      price: "$99",
      period: "/mo",
      desc: "For agencies and teams managing multiple brands.",
      features: [
        "Unlimited AI videos",
        "All platforms + Email campaigns",
        "Bulk batch generation",
        "4K video quality",
        "Advanced analytics & reports",
        "White-label publishing",
        "10 team seats",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Simple, transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">pricing</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto">
            No hidden fees. Cancel anytime. Start free and upgrade as you grow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
        <p className="text-center text-white/25 text-xs mt-8">
          All plans include SSL security, 99.9% uptime SLA, and GDPR compliance.
        </p>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: "Sarah K.",
      role: "YouTube Creator · 280K subs",
      avatar: "SK",
      text: "VidMax completely changed my workflow. I went from posting 2 videos a week to 14 — across four platforms — with zero stress. The AI scheduling is scary accurate.",
      stars: 5,
    },
    {
      name: "Marcus T.",
      role: "Digital Marketing Agency",
      avatar: "MT",
      text: "We manage 12 brand accounts and VidMax cut our content production time by 80%. The bulk generation + email integration alone is worth the Agency plan.",
      stars: 5,
    },
    {
      name: "Priya L.",
      role: "TikTok Influencer · 1.2M followers",
      avatar: "PL",
      text: "I was skeptical about AI video tools but VidMax blew me away. The videos actually look human-made and the TikTok optimization really works — my views tripled.",
      stars: 5,
    },
    {
      name: "James R.",
      role: "E-commerce Brand Owner",
      avatar: "JR",
      text: "Using VidMax for product video shorts pushed our Instagram Reels engagement up 4×. The ROI is insane for the price. Genuinely the best SaaS we pay for.",
      stars: 5,
    },
    {
      name: "Elena V.",
      role: "Podcast Host & Content Creator",
      avatar: "EV",
      text: "I repurpose my podcast into 10+ short clips per episode automatically. VidMax adds captions, music, and schedules them while I sleep. It's magic.",
      stars: 5,
    },
    {
      name: "Daniel C.",
      role: "Fitness Coach · 95K subs",
      avatar: "DC",
      text: "The AI hooks VidMax writes are better than what I used to spend hours writing. My YouTube Shorts click-through rate went from 4% to 11% in one month.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">12,000+ creators</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            See how creators, agencies, and brands are using VidMax to grow faster.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map(({ name, role, avatar, text, stars }) => (
            <div
              key={name}
              className="break-inside-avoid p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/65 leading-relaxed mb-4">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{name}</p>
                  <p className="text-[10px] text-white/35">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-8 uppercase tracking-wider">
          <Zap size={12} className="text-violet-400" />
          Limited Early-Access Pricing — Save 40%
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to automate your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
            content strategy?
          </span>
        </h2>
        <p className="text-white/45 mb-10 text-lg leading-relaxed">
          Join 12,000+ creators who are posting more, earning more, and working less with VidMax.
          Start your free trial — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/sign-up"
            id="cta-start-free"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-base transition-all duration-200 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-1"
          >
            Start Free Trial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Product: ["Features", "How It Works", "Pricing", "Changelog", "Roadmap"],
    Platforms: ["YouTube Shorts", "Instagram Reels", "TikTok", "Email Campaigns"],
    Company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  };

  const socials = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: TikTokIcon, label: "TikTok", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <footer className="pt-16 pb-8 px-6 border-t border-white/8 bg-[#03030d]">
      <div className="max-w-6xl mx-auto">
        {/* Top area */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Play size={14} className="text-white fill-white ml-0.5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vid<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Max</span>
              </span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-6 max-w-[240px]">
              AI-powered short video generation and multi-platform scheduling for modern creators and brands.
            </p>

            {/* Newsletter */}
            <div className="mb-6 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Newsletter</h4>
              <div className="flex gap-2 max-w-[240px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/20 transition-colors w-full placeholder:text-white/20"
                />
                <button aria-label="Subscribe" className="bg-white/10 hover:bg-white/20 border border-white/5 text-white p-2 rounded-lg transition-colors flex-shrink-0">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/40 hover:text-white/80 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/80 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} VidMax Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Cookies</a>
          </div>
          <p className="text-xs text-white/20 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#04040f] text-white font-[var(--font-inter)] selection:bg-violet-500/30">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Platforms />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
