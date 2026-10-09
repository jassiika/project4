export default function PostCard({ image }) {
  return (
    <article className="card post">
      {image && <img className="post-img" src={image} alt="post" />}
      <div className="post-body">
        <h3 className="post-title">TITLE HEADING</h3>
        <p className="post-sub">
          Title description, <span>April 7, 2014</span>
        </p>
        <p className="post-text">
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue
          gravida diam non fringilla.
        </p>
        <div className="post-footer">
          <button className="btn-outline">READ MORE »</button>
          <span className="comments">
            Comments <b className="badge">0</b>
          </span>
        </div>
      </div>
    </article>
  );
}