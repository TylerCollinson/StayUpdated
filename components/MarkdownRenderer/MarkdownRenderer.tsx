import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for GitHub-flavored markdown support
import styles from './MarkdownRenderer.module.css'; // Import the CSS Module

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className={styles['markdown-body']}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}