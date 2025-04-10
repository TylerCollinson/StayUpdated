import type { Topic } from "@/types/topic"

export const topics: Topic[] = [
  {
    id: "react",
    title: "React",
    description: "A JavaScript library for building user interfaces",
    category: "coding",
    content: `
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p>
      <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links below will help you get started.</p>
    `,
    links: [
      {
        title: "Official React Documentation",
        url: "https://react.dev/",
      },
      {
        title: "React GitHub Repository",
        url: "https://github.com/facebook/react",
      },
      {
        title: "React Tutorial for Beginners",
        url: "https://react.dev/learn",
      },
    ],
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs",
    category: "both",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.</p>
      <p>Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
    `,
    links: [
      {
        title: "Tailwind CSS Documentation",
        url: "https://tailwindcss.com/docs",
      },
      {
        title: "Tailwind CSS GitHub Repository",
        url: "https://github.com/tailwindlabs/tailwindcss",
      },
      {
        title: "Tailwind UI Components",
        url: "https://tailwindui.com/",
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js",
    description: "The React framework for production",
    category: "coding",
    content: `
      <p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
      <p>Next.js is used by some of the world's largest companies including Netflix, GitHub, Uber, Ticketmaster, and Starbucks to build their web applications.</p>
    `,
    links: [
      {
        title: "Next.js Documentation",
        url: "https://nextjs.org/docs",
      },
      {
        title: "Learn Next.js",
        url: "https://nextjs.org/learn",
      },
      {
        title: "Next.js GitHub Repository",
        url: "https://github.com/vercel/next.js",
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "JavaScript with syntax for types",
    category: "coding",
    content: `
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
      <p>TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.</p>
      <p>TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.</p>
    `,
    links: [
      {
        title: "TypeScript Documentation",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        title: "TypeScript Playground",
        url: "https://www.typescriptlang.org/play",
      },
      {
        title: "TypeScript GitHub Repository",
        url: "https://github.com/microsoft/TypeScript",
      },
    ],
  },
  {
    id: "html-css",
    title: "HTML & CSS",
    description: "The building blocks of the web",
    category: "both",
    content: `
      <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.</p>
      <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
    `,
    links: [
      {
        title: "MDN Web Docs - HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        title: "MDN Web Docs - CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        title: "CSS-Tricks",
        url: "https://css-tricks.com/",
      },
    ],
  },
  {
    id: "ui-design",
    title: "UI Design Principles",
    description: "Fundamental concepts for creating effective user interfaces",
    category: "design",
    content: `
      <p>User Interface (UI) design is the process of making interfaces in software or computerized devices with a focus on looks or style. Designers aim to create designs users will find easy to use and pleasurable.</p>
      <p>Good UI design considers visual hierarchy, typography, color theory, and layout to create interfaces that are both functional and aesthetically pleasing.</p>
    `,
    links: [
      {
        title: "Nielsen Norman Group - UI Design Principles",
        url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
      },
      {
        title: "Material Design Guidelines",
        url: "https://material.io/design",
      },
      {
        title: "Apple Human Interface Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
      },
    ],
  },
  {
    id: "color-theory",
    title: "Color Theory",
    description: "Understanding how colors work together in design",
    category: "design",
    content: `
      <p>Color theory is both the science and art of using color. It explains how humans perceive color, how colors mix, match or contrast with each other, and the messages colors communicate.</p>
      <p>The color wheel is a visual representation of color theory, showing the relationship between primary, secondary, and tertiary colors. Understanding color harmony helps designers create visually appealing interfaces.</p>
    `,
    links: [
      {
        title: "Color Theory for Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
      },
      {
        title: "Adobe Color Wheel",
        url: "https://color.adobe.com/create/color-wheel",
      },
      {
        title: "Coolors - Color Schemes Generator",
        url: "https://coolors.co/",
      },
    ],
  },
  {
    id: "typography",
    title: "Typography",
    description: "The art and technique of arranging type",
    category: "design",
    content: `
      <p>Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. It involves font selection, point size, line length, line-spacing, and letter-spacing.</p>
      <p>Good typography establishes a strong visual hierarchy, provides a graphic balance to the page, and sets the product's overall tone. Typography is a fundamental element in design that can make or break the user experience.</p>
    `,
    links: [
      {
        title: "Practical Typography",
        url: "https://practicaltypography.com/",
      },
      {
        title: "Google Fonts",
        url: "https://fonts.google.com/",
      },
      {
        title: "Typography Handbook",
        url: "https://typographyhandbook.com/",
      },
    ],
  },
]
