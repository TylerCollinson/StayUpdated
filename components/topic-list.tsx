"use client"

import { useState } from "react"
import { TopicCard } from "@/components/topic-card"
import type { Topic } from "@/types/topic"
import { Search } from "lucide-react"

interface TopicListProps {
  topics: Topic[]
  title: string
  description: string
}

export function TopicList({ topics, title, description }: TopicListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">{title}</h1>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">{description}</p>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => <TopicCard key={topic.id} topic={topic} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No topics found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
