import Link from "next/link"
import type { Topic } from "@/types/topic"
import { ArrowRight } from "lucide-react"

interface TopicCardProps {
  topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`} className="block">
      <div className="h-full border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 bg-white">
        <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
        <p className="text-gray-600 mb-4">{topic.description}</p>
        <div className="flex items-center text-gray-800 font-medium">
          <span>View details</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
