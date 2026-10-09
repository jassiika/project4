import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="layout">
      <section className="content">
        <PostCard image="https://picsum.photos/seed/forest/1200/700" />
      </section>
      <Sidebar />
    </div>
  );
}