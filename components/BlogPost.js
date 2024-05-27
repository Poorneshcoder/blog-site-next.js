
// Define the BlogPost component which receives a post object as a prop
export default function BlogPost({ post }) {
  return (
    <article>
      
      {/* <h1>{post.title}</h1> */}
      
      {/* Render the HTML content of the post */}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

