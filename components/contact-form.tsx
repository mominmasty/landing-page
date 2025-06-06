"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm border-green-500/30">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
          <p className="text-lg text-gray-300 mb-6">
            We&apos;ve received your information and will get back to you within 24 hours to discuss how Varia can transform
            your business communication.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm border-cyan-500/30">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">Get Started Today</CardTitle>
        <p className="text-gray-300">Tell us about your business and we&apos;ll show you how Varia can help</p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Business Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="business" className="text-white">
              Company Name *
            </Label>
            <Input
              id="business"
              type="text"
              placeholder="Your company name"
              value={formData.business}
              onChange={(e) => handleInputChange("business", e.target.value)}
              required
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry" className="text-white">
              Industry/Use Case *
            </Label>
            <Select onValueChange={(value) => handleInputChange("industry", value)} required>
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white focus:border-cyan-400">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="fintech" className="text-white hover:bg-gray-700">
                  Fintech & Banking
                </SelectItem>
                <SelectItem value="ecommerce" className="text-white hover:bg-gray-700">
                  E-commerce & D2C
                </SelectItem>
                <SelectItem value="healthcare" className="text-white hover:bg-gray-700">
                  Healthcare & Telehealth
                </SelectItem>
                <SelectItem value="education" className="text-white hover:bg-gray-700">
                  Education & EdTech
                </SelectItem>
                <SelectItem value="real-estate" className="text-white hover:bg-gray-700">
                  Real Estate
                </SelectItem>
                <SelectItem value="insurance" className="text-white hover:bg-gray-700">
                  Insurance
                </SelectItem>
                <SelectItem value="automotive" className="text-white hover:bg-gray-700">
                  Automotive
                </SelectItem>
                <SelectItem value="travel" className="text-white hover:bg-gray-700">
                  Travel & Hospitality
                </SelectItem>
                <SelectItem value="saas" className="text-white hover:bg-gray-700">
                  SaaS & Technology
                </SelectItem>
                <SelectItem value="other" className="text-white hover:bg-gray-700">
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Tell us about your needs
            </Label>
            <Textarea
              id="message"
              placeholder="What type of calls do you want to automate? (sales, support, KYC, surveys, collections, etc.)"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4"
          >
            Get Free Consultation
            <Send className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-gray-400 text-center">
            By submitting this form, you agree to receive communication from Varia about our AI voice agent platform.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
