import AffiliatePanel from "@/components/features/affiliate/affiliate";
import Banner from "@/components/features/banner/banner";
import Blog from "@/components/features/blog/blog";
import Collection from "@/components/features/collection/collection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:pt-20 lg:p-20 md:p16 sm:p-5">
      <Banner />
      <Collection />
      <AffiliatePanel type={1}/>
      <Blog />
    </main>
  );
}
