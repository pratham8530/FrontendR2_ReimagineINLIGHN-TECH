import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const VerifyCertificatePage: React.FC = () => {
  const [internId, setInternId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2s delay for demo
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!internId.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      // Simulate random result for demo
      setVerificationResult(Math.random() > 0.5 ? 'success' : 'error');
    }, 2000);
  };

  const Skeleton: React.FC<{ className?: string; type?: 'input' | 'button' | 'result' | 'text' }> = ({ className, type = 'text' }) => (
    <div className={`bg-gray-800/30 animate-shimmer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      {type === 'input' && <div className="h-12 w-full rounded-lg" />}
      {type === 'button' && <div className="h-12 w-full rounded-lg" />}
      {type === 'result' && <div className="h-32 w-full rounded-2xl" />}
      {type === 'text' && <div className="h-4 w-3/4 rounded-xl" />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-quicksand font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Verify <span className="text-gradient">Certificate</span>
            </motion.h1>
            <motion.p 
              className="font-nunito text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Verify the authenticity of INLIGHN TECH internship certificates using the unique 
              Intern ID provided on your certificate or offer letter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="verify-skeleton"
                className="max-w-2xl mx-auto"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-8 lg:p-12 rounded-3xl">
                  <div className="text-center mb-8 space-y-4">
                    <Skeleton className="w-16 h-16 rounded-2xl mx-auto" />
                    <Skeleton className="h-6 w-1/2 mx-auto" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                  </div>
                  <div className="space-y-6">
                    <Skeleton type="input" className="h-12 w-full" />
                    <Skeleton type="button" className="h-12 w-full" />
                    <Skeleton type="result" className="h-32 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/2" />
                      {[...Array(3)].map((_, index) => (
                        <Skeleton key={index} className="h-4 w-3/4" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="verify-content"
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="glass-card p-8 lg:p-12 rounded-3xl">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Certificate Verification</h2>
                    <p className="text-white/70">
                      Enter your Intern ID to verify your certificate
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="intern_id" className="block text-white text-lg font-semibold mb-3">
                        Enter Intern ID:
                      </label>
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                          type="text"
                          id="intern_id"
                          name="intern_id"
                          value={internId}
                          onChange={(e) => setInternId(e.target.value)}
                          placeholder="e.g., ITID000123"
                          required
                          className="form-input pl-12 text-center text-lg font-mono"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full btn-primary text-lg py-4"
                      disabled={isVerifying || !internId.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isVerifying ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Verifying...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Search className="w-5 h-5" />
                          Verify Certificate
                        </div>
                      )}
                    </motion.button>
                  </form>

                  {/* Verification Result */}
                  {verificationResult && (
                    <motion.div
                      className={`mt-8 p-6 rounded-2xl ${
                        verificationResult === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30' 
                          : 'bg-red-500/20 border border-red-500/30'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {verificationResult === 'success' ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-400" />
                        )}
                        <h3 className={`text-lg font-semibold ${
                          verificationResult === 'success' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {verificationResult === 'success' ? 'Certificate Verified!' : 'Verification Failed'}
                        </h3>
                      </div>
                      <p className="text-white/80">
                        {verificationResult === 'success' 
                          ? `Certificate with ID "${internId}" is valid and has been issued by INLIGHN TECH.`
                          : `Certificate with ID "${internId}" could not be verified. Please check the ID and try again.`
                        }
                      </p>
                      {verificationResult === 'success' && (
                        <div className="mt-4 p-4 bg-white/10 rounded-xl">
                          <h4 className="font-semibold text-white mb-2">Certificate Details:</h4>
                          <div className="space-y-1 text-sm text-white/80">
                            <p><strong>Intern Name:</strong> John Doe</p>
                            <p><strong>Program:</strong> Full Stack Development</p>
                            <p><strong>Issue Date:</strong> January 15, 2025</p>
                            <p><strong>Status:</strong> Valid</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  <div className="mt-8 p-6 bg-white/5 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-3">How to find your Intern ID:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#667eea] rounded-full mt-2 flex-shrink-0"></span>
                        Check your offer letter or experience letter
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#667eea] rounded-full mt-2 flex-shrink-0"></span>
                        Look for the format "ITID\" followed by numbers (e.g., ITID000123)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#667eea] rounded-full mt-2 flex-shrink-0"></span>
                        Contact support if you cannot locate your ID
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default VerifyCertificatePage;