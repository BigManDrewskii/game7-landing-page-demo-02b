
import React from "react";
import { Logo } from "@/components/ui/logo";
import { NotificationForm } from "@/components/notification-form";

export default function Index() {
  return (
    <main className="max-w-none flex flex-col justify-center items-center w-full min-h-screen bg-[#0D0D0D] box-border mx-auto px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">
      <section className="flex flex-col items-center gap-8 sm:gap-10 max-w-3xl w-full">
        <header className="flex items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <Logo />
        </header>

        <h1 className="font-unbounded text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-[1.15] text-center text-white tracking-[-0.02em] animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Be the first to know.
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center text-zinc-400 max-w-xl px-4 animate-fade-in opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          Game7 Lorem ipsum dolor sit amet changes and updates. Sign up to get
          notified instantly.
        </p>

        <div className="w-full animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <NotificationForm />
        </div>
      </section>
    </main>
  );
}
