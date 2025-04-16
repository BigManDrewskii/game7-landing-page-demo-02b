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
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <div className="flex items-center gap-5 w-full flex-wrap justify-center">
        <input
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[465px] h-[68px] border border-zinc-500 bg-[#0D0D0D] shadow-[0_0_0_1px_#262626_inset] text-[#CCC] text-base opacity-65 p-5 rounded-[50px] border-solid max-md:w-[400px] max-sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-[164px] h-[68px] bg-white shadow-[0_0_35px_rgba(255,255,255,0.20)] text-lg font-bold text-[#0D0D0D] capitalize px-[29px] py-3.5 rounded-[40px] max-md:w-[150px] max-sm:w-[120px] hover:bg-gray-100 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Get notified"}
        </button>
      </div>

      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

      {success && (
        <p className="mt-2 text-green-500 text-sm">
          Thank you! You'll be notified of updates.
        </p>
      )}
    </form>
  );
}
