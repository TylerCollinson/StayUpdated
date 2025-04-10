import { topics } from "@/data/topics"
import { TopicList } from "@/components/topic-list"

export default function DesignPage() {
  const designTopics = topics.filter((topic) => topic.category === "design" || topic.category === "both")

  return (
    <main className="min-h-screen bg-white">
      <TopicList
        topics={designTopics}
        title="Design Topics"
        description="Explore topics related to design principles, UI/UX, and visual aesthetics."
      />
    </main>
  )
}
