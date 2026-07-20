"use client";

import { useId, useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { NativeButton } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { categories } from "@/lib/products";

type QuoteFormProps = {
  defaultProduct?: string;
  compact?: boolean;
};

export function QuoteForm({ defaultProduct = "", compact = false }: QuoteFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="rounded-[var(--radius-md)] border border-brand/30 bg-brand-soft p-6"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 text-brand" aria-hidden />
          <div>
            <h3 className="display text-xl text-ink">Solicitud recibida</h3>
            <p className="mt-2 text-ink-muted">
              Gracias. Nuestro equipo revisará tu información y te contactará
              con un presupuesto estimativo en horario hábil.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-[var(--radius-md)] border border-line bg-surface-elevated p-6 shadow-[var(--shadow-soft)] md:p-8",
        compact && "p-5 md:p-5",
      )}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${formId}-nombre`} label="Nombre" name="nombre" required />
        <Field id={`${formId}-apellido`} label="Apellido" name="apellido" required />
        <Field
          id={`${formId}-email`}
          label="Email"
          name="email"
          type="email"
          required
          className="sm:col-span-2"
        />
        <Field
          id={`${formId}-asunto`}
          label="Asunto"
          name="asunto"
          required
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-producto`}
            className="mb-2 block text-sm font-semibold text-ink"
          >
            ¿Qué producto necesitas?
          </label>
          <div className="relative">
            <select
              id={`${formId}-producto`}
              name="producto"
              defaultValue={defaultProduct}
              required
              className="h-12 w-full appearance-none rounded-[var(--radius-sm)] border border-line bg-white px-3 pr-10 text-ink outline-none transition focus:border-brand"
            >
              <option value="" disabled>
                Selecciona una categoría o producto
              </option>
              {categories.map((category) => (
                <optgroup key={category.slug} label={category.name}>
                  <option value={category.name}>{category.name} (general)</option>
                  {category.products.map((product) => (
                    <option key={product.slug} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden
            />
          </div>
        </div>
        <Field
          id={`${formId}-ubicacion`}
          label="¿Dónde se realizará tu proyecto?"
          name="ubicacion"
          required
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-detalle`}
            className="mb-2 block text-sm font-semibold text-ink"
          >
            Detalle adicional (opcional)
          </label>
          <textarea
            id={`${formId}-detalle`}
            name="detalle"
            rows={4}
            className="w-full rounded-[var(--radius-sm)] border border-line bg-white px-3 py-3 text-ink outline-none transition focus:border-brand"
            placeholder="Cantidades, normas, fechas o referencias del proyecto"
          />
        </div>
      </div>
      <NativeButton
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando…" : "Obtener cotización"}
      </NativeButton>
      <p className="mt-3 text-sm text-ink-muted">
        Te enviaremos un presupuesto estimativo. Respuesta en horario de
        atención.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  className,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-[var(--radius-sm)] border border-line bg-white px-3 text-ink outline-none transition focus:border-brand"
      />
    </div>
  );
}
