import type { Topic } from "@/types/topic";

export const topics: Topic[] = [
  {
    id: 1,
    title: "React",
    description: "A JavaScript library for building user interfaces",
    category: "coding",
    markdownFile: "topic-1.md",
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
    id: 2,
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs",
    category: "both",
    markdownFile: "topic-2.md",
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
    id: 3,
    title: "Next.js",
    description: "The React framework for production",
    category: "coding",
    markdownFile: "topic-3.md",
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
    id: 4,
    title: "TypeScript",
    description: "JavaScript with syntax for types",
    category: "coding",
    markdownFile: "topic-4.md",
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
    id: 5,
    title: "HTML & CSS",
    description: "The building blocks of the web",
    category: "both",
    markdownFile: "topic-5.md",
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
    id: 6,
    title: "UI/UX Design Principles",
    description: "Fundamental concepts for creating effective user interfaces and maintaining a good user experience.",
    category: "design",
    markdownFile: "topic-6.md",
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
    id: 7,
    title: "Color Theory",
    description: "Understanding how colors work together in design",
    category: "design",
    markdownFile: "topic-7.md",
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
    id: 8,
    title: "Typography",
    description: "The art and technique of arranging type",
    category: "design",
    markdownFile: "topic-8.md",
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
];
