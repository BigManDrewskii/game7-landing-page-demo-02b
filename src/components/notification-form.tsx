
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function NotificationForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError("");

    // Validate email
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    try {
      setIsSubmitting(true);

      // This would be replaced with an actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mt-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center relative">
        <div className={`relative w-full sm:w-[350px] md:w-[400px] lg:w-[465px] group ${isFocused ? 'transform scale-[1.01]' : ''} transition-all duration-300`}>
          <input
            ref={inputRef}
            type="email"
            placeholder={isFocused ? '' : '1337gam3r@email.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-14 sm:h-16 md:h-[68px] border border-zinc-700/40 bg-[#0D0D0D]/30 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] text-zinc-200 text-base p-5 pr-10 rounded-full border-solid transition-all duration-300 ease-out focus:outline-none focus:shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_0_20px_rgba(255,255,255,0.05)] focus:border-zinc-500/50 hover:border-zinc-600/70 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] placeholder:text-zinc-400/40"
            aria-label="Email address"
          />
          {isFocused && email.length === 0 && (
            <span className="absolute top-1/2 left-5 transform -translate-y-1/2 text-zinc-500 transition-all duration-300 text-sm opacity-80">
              Enter your gaming email...
            </span>
          )}
          {email.length > 0 && (
            <button 
              type="button" 
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              onClick={() => {
                setEmail('');
                inputRef.current?.focus();
              }}
              aria-label="Clear email input"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 hover:opacity-100 transition-opacity">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="rainbow"
          className="w-full sm:w-auto md:w-[164px] h-14 sm:h-16 md:h-[68px] text-base sm:text-lg font-semibold mt-2 sm:mt-0 rounded-full"
        >
          <span className="text-black font-bold z-10 relative">
            {isSubmitting ? "Submitting..." : "Get notified"}
          </span>
        </Button>
      </div>

      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-red-400 text-sm font-sans flex items-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </motion.p>
      )}

      {success && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-emerald-400 text-sm font-unbounded flex items-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Thank you! You'll be notified of updates.
        </motion.p>
      )}
    </form>
  );
}
