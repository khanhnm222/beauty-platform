import AffiliatePanel from "@/components/features/affiliate/affiliate";
import Banner from "@/components/features/banner/banner";
import Blog from "@/components/features/blog/blog";
import Collection from "@/components/features/collection/collection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Collection />
      <AffiliatePanel type={1}/>
      <Blog />
    </main>
  );
}
