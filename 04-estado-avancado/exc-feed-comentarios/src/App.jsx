import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000),
      author: author,
      content: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);

    setAuthor("");
    setContent("");
  };

  return (
    <>
      <h1>Feed Comentários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          id="author"
          className="border"
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <br />
        <label htmlFor="content">Comentário</label> <br />
        <textarea
          id="content"
          cols="30"
          rows="6"
          className="border"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <br />
        <button type="submit" className="border">
          Enviar comentário
        </button>
      </form>{" "}
      <br /> <br />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>{comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </>
  );
}
