// Import necessary modules and components
import Layout from '../components/Layout'; // Import the Layout component
import BlogPost from '../components/BlogPost'; // Import the BlogPost component
import { getAllPostSlugs, getPostData } from '../lib/posts'; // Import functions to get post slugs and post data

// Function to fetch all possible post slugs and generate static paths
export async function getStaticPaths() {
  const paths = getAllPostSlugs(); // Get all post slugs
  return {
    paths, // Return the paths
    fallback: false, // Return 404 for paths not returned by getStaticPaths
  };
}

// Function to fetch post data for a specific post slug
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug); // Fetch post data based on slug
  return {
    props: {
      postData, // Pass the post data as props to the component
    },
  };
}

// Post component definition
export default function Post({ postData }) {
  return (
    <Layout>
      <BlogPost post={postData} /> {/* Render the BlogPost component with the post data */}
    </Layout>
  );
}
