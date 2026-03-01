"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

/* ─── Input ─── */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/* ─── Textarea ─── */

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[120px] ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
export default Input;
