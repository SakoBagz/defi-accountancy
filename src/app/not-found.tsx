import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Head back home or request a consultation.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "brand", size: "lg" })}>
          Go home
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
