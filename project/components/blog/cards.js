import Card from "./card";

export default function Cards(props) {
  const posts =
    typeof props.posts === "string" ? JSON.parse(props.posts) : props.posts;
  if (posts.length === 0) {
    return <p>There are no posts.</p>;
  }
  return (
    <>
      {posts.map((post) => (
        <Card
          title={post.title}
          id={post._id}
          key={post._id}
          summary={post.summary}
        />
      ))}
    </>
  );
}
