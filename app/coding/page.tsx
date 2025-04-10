import { topics } from "@/data/topics"
import { TopicList } from "@/components/topic-list"

export default function CodingPage() {
  const codingTopics = topics.filter((topic) => topic.category === "coding" || topic.category === "both")

  return (
    <main className="min-h-screen bg-white">
      <TopicList
        topics={codingTopics}
        title="Coding Topics"
        description="Discover programming languages, frameworks, and development tools."
      />
    </main>
  )
}
