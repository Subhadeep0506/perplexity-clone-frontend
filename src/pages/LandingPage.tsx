import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Search,
  Zap,
  Brain,
  Globe,
  Lock,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

// Generate particles outside component to avoid impure function calls
const particles = [...Array(20)].map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 10,
}));

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTop
            ? "bg-transparent border-transparent"
            : "bg-black/80 border-b border-white/5 backdrop-blur-2xl"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <Sparkles className="w-9 h-9 text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
            </div>
            <span className="text-3xl font-black bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              AskAI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-black" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              top: "5%",
              left: "10%",
              transform: `translate(${mousePosition.x * 0.03}px, ${
                mousePosition.y * 0.03
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute w-[700px] h-[700px] bg-linear-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
            style={{
              bottom: "0%",
              right: "10%",
              animationDelay: "1s",
              transform: `translate(${mousePosition.x * -0.03}px, ${
                mousePosition.y * -0.03
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] bg-linear-to-br from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"
            style={{
              top: "40%",
              left: "50%",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] bg-linear-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              top: "60%",
              left: "20%",
              animationDelay: "1.5s",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl rounded-full border border-purple-500/20 text-purple-300 text-sm font-semibold shadow-2xl shadow-purple-500/20 animate-fade-in">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse" />
              Powered by Advanced AI Technology
              <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-7xl md:text-9xl font-black leading-[0.95] tracking-tighter animate-fade-in-up">
              <span className="block text-white drop-shadow-2xl">
                Ask anything.
              </span>
              <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                Get instant answers.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-normal">
              Experience the future of search with AI that understands you. Get
              accurate, sourced answers to your questions in real-time with
              citations you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-6 flex-wrap animate-fade-in-up animation-delay-400">
              <Link to="/register">
                <Button
                  size="lg"
                  variant="default"
                  className="relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group border-0 text-white font-semibold text-sm px-6 py-3 h-auto"
                >
                  <span className="relative z-10 flex items-center">
                    Start Exploring Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-slate-800 border-slate-700 hover:border-purple-400 hover:text-white hover:bg-slate-900/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-xl font-semibold text-sm px-6 py-3 h-auto hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-16 pt-12 animate-fade-in-up animation-delay-600">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 text-4xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  <Users className="w-8 h-8 text-blue-400" />
                  10K+
                </div>
                <div className="text-sm text-slate-600 mt-2 font-medium">
                  Active Users
                </div>
              </div>
              <div className="h-12 w-px bg-slate-800" />
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 text-4xl font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                  1M+
                </div>
                <div className="text-sm text-slate-600 mt-2 font-medium">
                  Queries Answered
                </div>
              </div>
              <div className="h-12 w-px bg-slate-800" />
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  <Star className="w-8 h-8 text-cyan-400" />
                  4.9/5
                </div>
                <div className="text-sm text-slate-600 mt-2 font-medium">
                  User Rating
                </div>
              </div>
            </div>
          </div>

          {/* Demo Search Bar */}
          <div className="max-w-5xl mx-auto mt-24 animate-fade-in-up animation-delay-800">
            <Card className="p-3 shadow-2xl bg-slate-950/80 backdrop-blur-2xl border border-slate-800/50 group">
              <div className="flex items-center gap-5 bg-black/50 rounded-2xl px-8 py-6 border border-slate-800/50">
                <Search className="w-7 h-7 text-slate-600" />
                <Input
                  placeholder="Try asking: 'What is quantum computing?'"
                  className="flex-1 bg-transparent outline-none text-xl text-white placeholder:text-slate-700 font-light"
                  disabled
                />
                <Button size="lg" variant="default" disabled>
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </Card>
            <p className="text-sm text-slate-700 mt-6 text-center">
              Press{" "}
              <kbd className="px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-800 text-slate-500 font-mono">
                Enter
              </kbd>{" "}
              to search • Free forever
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-32 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Why choose{" "}
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AskAI
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
              Experience the next generation of intelligent search with features
              designed to give you answers faster and more accurately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Get accurate, comprehensive answers to your questions in milliseconds, powered by cutting-edge AI technology.",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "Real-time Sources",
                description:
                  "Every answer comes with verified sources from across the web, ensuring you can always trust the information.",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Brain,
                title: "Contextual Intelligence",
                description:
                  "Our AI understands context and nuance, providing deeper insights and follow-up suggestions.",
                color: "green",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Search,
                title: "Advanced Search",
                description:
                  "Go beyond traditional search engines with AI that truly understands natural language queries.",
                color: "orange",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Lock,
                title: "Private & Secure",
                description:
                  "Your searches and data are encrypted and private. We never sell your information to third parties.",
                color: "pink",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Sparkles,
                title: "Personalized Results",
                description:
                  "Tailored responses based on your preferences and search history for increasingly better results over time.",
                color: "cyan",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group p-10 bg-slate-950/50 backdrop-blur-xl border-slate-800/50 hover:border-purple-500/50 hover:bg-slate-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-purple-500/30`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-24 relative z-10">
          <Card className="bg-linear-to-br from-slate-950 via-slate-900 to-black text-white p-20 text-center relative overflow-hidden shadow-2xl border border-slate-800/50">
            {/* Gradient Overlays */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
              <div className="absolute inset-0 bg-grid-white/5" />
            </div>

            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl font-black mb-8">
                Ready to transform your search?
              </h2>
              <p className="text-2xl md:text-3xl mb-12 text-slate-400 max-w-3xl mx-auto font-light">
                Join thousands of users who are already discovering the power of
                AI-driven answers
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link to="/register">
                  <Button
                    size="lg"
                    variant="default"
                    className="relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group border-0 text-white font-semibold text-sm px-6 py-3 h-auto"
                  >
                    <span className="relative z-10 flex items-center">
                      Create Free Account
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-slate-800 border-slate-700 hover:border-purple-400 hover:text-white hover:bg-slate-900/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-xl font-semibold text-sm px-6 py-3 h-auto hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
              <p className="text-sm mt-10 text-slate-600 font-medium">
                No credit card required • Free forever • Cancel anytime
              </p>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-900 py-16 relative z-10 bg-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <Sparkles className="w-7 h-7 text-purple-400 relative z-10" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AskAI
                </span>
              </div>
              <p className="text-slate-600 text-center font-medium">
                © 2025 AskAI. Your Personal AI Assistant. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm text-slate-600">
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors font-medium"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors font-medium"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
