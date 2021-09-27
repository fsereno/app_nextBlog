import Card from "./card";

export default function Cards(props) {
  const posts =
    typeof props.posts === "string" ? JSON.parse(props.posts) : props.posts;
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
