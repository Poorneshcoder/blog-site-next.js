// Import necessary modules and components
import { useState } from 'react'; // Import the useState hook from React
import Layout from '../components/Layout'; // Import the Layout component
import BlogList from '../components/BlogList'; // Import the BlogList component
import { getSortedPostsData } from '../lib/posts'; // Import the function to get sorted posts data

// Function to fetch static props during build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); // Fetch all sorted posts data
  return {
    props: {
      allPostsData, // Pass the fetched data as props to the component
    },
  };
}

// Home component definition
export default function Home({ allPostsData }) {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  // Event handler for search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  // Filter the posts based on the search query
  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search title post" // Placeholder text for the input field
        value={searchQuery} // Bind the input value to the search query state
        onChange={handleSearchChange} // Handle input changes
        style={{ margin: '1rem 0', padding: '0.5rem', width: '80%' }} // Inline styles for the input field
      />
      <BlogList posts={filteredPosts} /> {/* Render the filtered blog posts */}
    </Layout>
  );
}
