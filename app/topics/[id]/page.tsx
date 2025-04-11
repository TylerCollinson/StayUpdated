import { topics } from "@/data/topics";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdownContent } from '@/lib/markdown';

export function generateStaticParams() {
  return topics.map((topic) => ({
    id: topic.id.toString(), // Next.js route params must be strings
  }));
}




export default async function TopicPage({ params }: { params: { id: string } }) {
  const topic = topics.find((t) => t.id === Number(params.id));

  if (!topic) {
    notFound();
  }


  const markdownData = await getMarkdownContent(topic.markdownFile);
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
            ← Back to Topics
          </Link>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{topic.description}</p>

            <div className="prose max-w-none mb-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownData.content}
            </ReactMarkdown>

          </div>

            {/* Render links */}
            {topic.links && topic.links.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <ul className="space-y-3">
                  {topic.links.map((link, index) => (
                    <li key={index} className="flex items-start">
                      <ExternalLink className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
