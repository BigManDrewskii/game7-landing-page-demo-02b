
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSubmitting?: boolean;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, isSubmitting = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "uiverse relative cursor-pointer border-none rounded-[24px] p-0 m-0 text-center font-semibold text-base tracking-[0.02em] leading-[1.5] text-white",
          "bg-gradient-to-r from-gray-600 to-gray-500 shadow-[0_0_14px_rgba(128,128,128,0.5)] hover:shadow-[0_0_20px_rgba(128,128,128,0.8)] transition-shadow",
          isSubmitting ? "opacity-70 pointer-events-none" : "",
          className
        )}
        {...props}
      >
        <div className="wrapper relative overflow-hidden rounded-[24px] min-w-[132px] py-3 px-4">
          <span className="relative z-[1]">{isSubmitting ? "Submitting..." : children}</span>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
          <div className="circle circle-9"></div>
          <div className="circle circle-10"></div>
          <div className="circle circle-11"></div>
          <div className="circle circle-12"></div>
        </div>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
