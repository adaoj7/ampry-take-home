import { Section, Container } from "@/components/craft";
import Link from "next/link";

export const Content = () => {
  return (
    <Section>
      <Container>
        <h1>Ampry</h1>
        <h2>Take Home Test</h2>
        <p className="p-2 border rounded-md bg-accent/30 mb-12">
          <Link href="/form">Visit the form page to get started</Link>
        </p>

        <p>This project uses:</p>
        <ul>
          <li>
            <Link href="https://react.dev" className="text-muted-foreground">
              React
            </Link>
            <p className="text-sm text-muted-foreground">
              A JavaScript library for building user interfaces with reusable
              components and a virtual DOM for efficient rendering.
            </p>
          </li>
          <li>
            <Link href="https://tailwindcss.com">Tailwind</Link>
            <p className="text-sm text-muted-foreground">
              A utility-first CSS framework that provides low-level classes to
              build custom designs directly in your markup, enabling rapid
              development without leaving your HTML.
            </p>
          </li>
          <li>
            <Link href="https://nextjs.org">Next.js</Link>
            <p className="text-sm text-muted-foreground">
              A React framework for building web applications that provides
              features like server-side rendering, static site generation, and
              API routes with built-in performance optimizations.
            </p>
          </li>
          <li>
            <Link href="https://www.typescriptlang.org">TypeScript</Link>
            <p className="text-sm text-muted-foreground">
              A strongly typed programming language that builds on JavaScript by
              adding static type definitions, enabling better tooling, error
              detection, and code maintainability.
            </p>
          </li>
          <li>
            <Link href="https://ui.shadcn.com">shadcn/ui</Link>
            <p className="text-sm text-muted-foreground">
              A collection of reusable components built with Radix UI and
              Tailwind CSS that provides accessible, customizable UI components
              with a modern design system approach.
            </p>
          </li>
          <li>
            <Link href="https://github.com/brijr/craft">
              Craft Design System
            </Link>
            <p className="text-sm text-muted-foreground">
              An open-source design system built internally by Bridger Tower.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
