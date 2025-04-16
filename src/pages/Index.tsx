import React from "react";
import { Logo } from "@/components/ui/logo";
import { NotificationForm } from "@/components/notification-form";

export default function Index() {
  return (
    <main className="max-w-none flex flex-col justify-center items-center w-full h-screen bg-[#0D0D0D] box-border mx-auto px-0 py-20 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <section className="flex flex-col items-center gap-10">
        <header className="flex items-center justify-center">
          <Logo />
        </header>

        <h1 className="text-[80px] font-medium leading-[92px] text-center bg-clip-text text-white max-md:text-6xl max-md:leading-[70px] max-sm:text-[40px] max-sm:leading-[50px]">
          Be the first to know.
        </h1>

        <p className="text-xl font-normal leading-7 text-center text-zinc-400 max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5 max-w-2xl">
          Game7 Lorem ipsum dolor sit amet changes and updates. Sign up to get
          notified instantly.
        </p>

        <NotificationForm />
      </section>
    </main>
  );
}
