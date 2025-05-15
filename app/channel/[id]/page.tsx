import Layout from "@/components/layout"
import ChannelHeader from "@/components/channel-header"
import ChannelTabs from "@/components/channel-tabs"

export default function ChannelPage({ params }: { params: { id: string } }) {
  return (
    <Layout hideHeader>
      <ChannelHeader />
      <div className="p-4 md:p-6">
        <ChannelTabs />
      </div>
    </Layout>
  )
}
