import { topics } from "@/data/topics"
import { TopicList } from "@/components/topic-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopicList
        topics={topics}
        title="All Topics"
        description="Search for topics and click on a card to view more information, resources, and links."
      />
    </main>
  )
}
