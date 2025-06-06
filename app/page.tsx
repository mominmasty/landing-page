import {
  ArrowRight,
  Phone,
  Globe,
  BarChart3,
  Clock,
  Users,
  CheckCircle,
  Star,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Varia
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#solution" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Solution
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border-cyan-500/30">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Voice Automation
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Multilingual AI Voice Agents for Enterprise
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automate your outbound communication with human-like AI agents that speak Hindi, Tamil, Bengali, Marathi and
            more. Scale your sales, support, and customer engagement 24/7 with zero wait time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-4 text-white"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-gray-600 text-black hover:bg-gray-800 hover:text-white"
            >
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5,000+</div>
              <div className="text-gray-400">Calls Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1.2s</div>
              <div className="text-gray-400">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">88%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Problem with Traditional Call Centers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Businesses today struggle with outdated communication methods that can't scale effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-red-500/30 bg-red-500/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-semibold mb-2 text-red-300">High Costs</h3>
                <p className="text-sm text-gray-300">Large, inefficient call centers with expensive human resources</p>
              </CardContent>
            </Card>

            <Card className="border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2 text-orange-300">Scaling Issues</h3>
                <p className="text-sm text-gray-300">Difficulty scaling human teams during peak demand periods</p>
              </CardContent>
            </Card>

            <Card className="border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2 text-yellow-300">Poor Quality</h3>
                <p className="text-sm text-gray-300">Inconsistent customer interactions and service quality</p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-300">Language Barriers</h3>
                <p className="text-sm text-gray-300">Cannot serve users in multiple Indian languages effectively</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="solution"
        className="py-20 px-4 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Varia Solves This</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our AI-powered voice agents eliminate traditional call center limitations with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Zero Wait Time, 24/7 Availability</h3>
                  <p className="opacity-90">
                    AI agents call customers instantly, any time of day, eliminating queue times and scheduling
                    conflicts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">True Multilingual Support</h3>
                  <p className="opacity-90">
                    Real-time conversations in Hindi, Tamil, Bengali, Marathi, and more with cultural nuance
                    understanding.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                  <p className="opacity-90">
                    Detailed insights on each interaction with confidence scores and next-best-action recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Self-Improving AI</h3>
                  <p className="opacity-90">
                    Continuous learning through fine-tuned LLM feedback loops and human-in-the-loop training.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-500/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Lead Engagement Increase</span>
                  <span className="text-2xl font-bold text-green-300">+26%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cost Reduction</span>
                  <span className="text-2xl font-bold text-green-300">-60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Response Time</span>
                  <span className="text-2xl font-bold text-green-300">1.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Accuracy Rate</span>
                  <span className="text-2xl font-bold text-green-300">88%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Powerful Features for Modern Businesses</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and scale your customer communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Outbound Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate sales calls, support follow-ups, KYC verification, surveys, and collections with intelligent
                  AI agents.
                </p>
                <div className="flex items-center text-sm text-cyan-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Sales, Support, KYC, Surveys
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-green-500/30 hover:border-green-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Multilingual Support</h3>
                <p className="text-gray-300 mb-4">
                  Native support for Hindi, Tamil, Bengali, Marathi, and other Indian languages with accent recognition.
                </p>
                <div className="flex items-center text-sm text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  10+ Indian Languages
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Real-time Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive dashboard with call outcomes, confidence scores, and actionable insights for
                  optimization.
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Live Performance Metrics
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Custom Training</h3>
                <p className="text-gray-300 mb-4">
                  AI agents trained on your company-specific data, processes, and compliance requirements.
                </p>
                <div className="flex items-center text-sm text-orange-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Domain-Specific Knowledge
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-red-500/30 hover:border-red-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Hallucination Control</h3>
                <p className="text-gray-300 mb-4">
                  Built-in RAG system with discriminator consistency checks and fallback templates for accuracy.
                </p>
                <div className="flex items-center text-sm text-red-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Reliable & Accurate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-teal-500/30 hover:border-teal-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Easy Integration</h3>
                <p className="text-gray-300 mb-4">
                  Simple CSV upload, goal definition, and CRM integration. Get started in minutes, not months.
                </p>
                <div className="flex items-center text-sm text-teal-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Plug & Play Setup
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>      

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Customer Communication?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join forward-thinking businesses already using Varia to scale their customer engagement. Get started with
              a free consultation and see the difference AI can make.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">

              <span className="text-2xl  font-bold">Varia</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Varia. All rights reserved.</p>
              <p className="text-sm mt-1">Transforming enterprise communication with AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
