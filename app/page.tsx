import Banner from "@/components/shared/banner";
import Categories from "@/components/shared/categories";
import Navbar from "@/components/shared/navbar";
import Sections from "@/components/shared/sections";
import Tooltip from "@/components/shared/tooltip";

export default function Home() {
  return (
    <div className="w-[1400px] mx-auto">
      <Navbar />
      <Sections />
      <Banner />
      <Tooltip />
      <Categories />
    </div>
  );
}
