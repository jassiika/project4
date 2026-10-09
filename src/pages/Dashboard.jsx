import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="layout layout-reverse">
      <Sidebar />
      <section className="content">
        <PostCard image="https://picsum.photos/seed/skate/1200/700" />
      </section>
    </div>
  );
}