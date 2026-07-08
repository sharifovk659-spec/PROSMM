import type { ReactNode } from "react";

export function ContactWormLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="contact-worm-link group block"
    >
      <span className="contact-worm-spin" aria-hidden />
      <span className="contact-worm-face">{children}</span>
    </a>
  );
}
