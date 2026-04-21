"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-20 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/60" />
        </div>

        {/* Back Link */}
        <motion.div 
          className="absolute top-24 left-4 sm:left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6">
              <FileText className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing or using the services of Karibu Heritage Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Description</h2>
            <p className="text-slate-600 mb-4">Karibu Heritage Limited provides the following services:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>International relocation assistance to Kenya</li>
              <li>Global investment consulting</li>
              <li>Tourism coordination</li>
              <li>Cultural experiences and travel planning</li>
              <li>Veteran support services</li>
              <li>Humanitarian support services</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">By using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use our services only for lawful purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment and Fees</h2>
            <p className="text-slate-600 mb-6">
              Fees for our services are quoted on a case-by-case basis. All fees must be paid 
              according to the payment schedule outlined in your service agreement. Late payments 
              may result in suspension of services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-600 mb-6">
              All content, materials, and intellectual property on our website and provided 
              through our services are owned by Karibu Heritage Limited or our licensors. 
              You may not reproduce, distribute, or create derivative works without our 
              express written permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              To the maximum extent permitted by law, Karibu Heritage Limited shall not be 
              liable for any indirect, incidental, special, consequential, or punitive damages, 
              including but not limited to loss of profits, data, use, or goodwill, arising from 
              your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Indemnification</h2>
            <p className="text-slate-600 mb-6">
              You agree to indemnify and hold harmless Karibu Heritage Limited, its officers, 
              directors, employees, and agents from any claims, damages, losses, or expenses 
              (including attorney&apos;s fees) arising out of your use of our services or violation 
              of these terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
            <p className="text-slate-600 mb-6">
              We may terminate or suspend your access to our services immediately, without 
              prior notice or liability, for any reason, including breach of these Terms. 
              Upon termination, your right to use our services will immediately cease.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of 
              the Republic of Kenya. Any disputes arising under these Terms shall be subject to 
              the exclusive jurisdiction of the courts of Kenya.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to modify or replace these Terms at any time. We will 
              provide notice of any material changes by posting the new Terms on this page. 
              Your continued use of our services after any changes constitutes acceptance 
              of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Email: info@karibuheritage.com</li>
              <li>Phone: +254141119444</li>
              <li>Address: Westlands, Nairobi, Kenya</li>
            </ul>

            <div className="border-t border-slate-200 pt-8 mt-8">
              <p className="text-sm text-slate-500">
                By using our services, you acknowledge that you have read, understood, and 
                agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
