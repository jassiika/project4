const popular = [
  { title: "Lorem", sub: "Sed mattis nunc", img: "https://picsum.photos/seed/a/60/50" },
  { title: "Ipsum", sub: "Praes tinci sed", img: "https://picsum.photos/seed/b/60/50" },
  { title: "Dorum", sub: "Ultricies congue", img: "https://picsum.photos/seed/c/60/50" },
  { title: "Mingsum", sub: "Lorem ipsum dipsum", img: "https://picsum.photos/seed/d/60/50" },
];

const tags = [
  "Travel", "New York", "London", "IKEA", "NORWAY", "DIY",
  "Ideas", "Baby", "Family", "News", "Clothing", "Shopping", "Sports", "Games",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="card">
        <img
          className="profile-img"
          src="https://picsum.photos/seed/pencil/400/260"
          alt="profile"
        />
        <div className="card-body">
          <h4>My Name</h4>
          <p className="small">
            Just me, myself and I, exploring the universe of uknownment. I have
            a heart of love and a interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="light">Popular Posts</h4>
        </div>
        <ul className="popular">
          {popular.map((p) => (
            <li key={p.title}>
              <img src={p.img} alt={p.title} />
              <div>
                <div>{p.title}</div>
                <div className="small">{p.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="light">Tags</h4>
          <div className="tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}