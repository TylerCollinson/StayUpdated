import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDirectory = path.join(process.cwd(), 'markdown');

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(markdownDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  // Wrapping the content with a container class
  const wrappedContent = `<div class="markdown">${content}</div>`;

  return {
    content: wrappedContent,
    ...data,
  };
}
