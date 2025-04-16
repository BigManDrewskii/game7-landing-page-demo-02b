
import React, { useState } from "react";

export function NotificationForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
        <input
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-[350px] md:w-[400px] lg:w-[465px] h-14 sm:h-16 md:h-[68px] border border-zinc-700 bg-[#0D0D0D] shadow-[0_0_0_1px_#262626_inset] text-zinc-200 text-base p-5 rounded-full border-solid transition-all focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 hover:border-zinc-600"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto md:w-[164px] h-14 sm:h-16 md:h-[68px] bg-white shadow-[0_0_25px_rgba(255,255,255,0.15)] text-base sm:text-lg font-semibold text-[#0D0D0D] px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all disabled:opacity-70 mt-2 sm:mt-0 group-hover:scale-[1.02] origin-center transition-transform duration-300"
        >
          {isSubmitting ? "Submitting..." : "Get notified"}
        </button>
      </div>

      {error && <p className="mt-3 text-red-400 text-sm font-unbounded animate-shake">{error}</p>}

      {success && (
        <p className="mt-3 text-emerald-400 text-sm font-unbounded animate-fade-in">
          Thank you! You'll be notified of updates.
        </p>
      )}
    </form>
  );
}
