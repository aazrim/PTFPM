import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          toast.success("Quote request sent", {
            description: "Our corporate desk will respond within 1 business day.",
          });
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company name" name="company" placeholder="PT Contoh Industri" />
        <Field label="Contact person" name="name" placeholder="Full name" />
        <Field label="Work email" name="email" type="email" placeholder="name@company.co.id" />
        <Field label="Phone" name="phone" placeholder="+62 ..." />
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Shipment requirement
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Origin, destination, cargo type, tonnage, frequency..."
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="btn-accent inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest disabled:opacity-70"
      >
        {sending ? "Sending..." : "Request Price Quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}
