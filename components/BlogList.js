// Import necessary modules and styles
import Link from 'next/link'; // Import the Link component from Next.js for navigation
import styles from '../styles/Home.module.css'; // Import CSS module for styling

// Define the BlogList component which receives posts as a prop
export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(({ slug, title, summary }) => ( // Iterate over the posts array
        <li key={slug}> {/* Unique key for each post */}
          {/* Link component for client-side navigation, legacyBehavior ensures the anchor tag is wrapped properly */}
          <Link href={`/${slug}`} legacyBehavior>
            <a className={styles.link}> {/* Anchor tag styled with CSS module */}
              <h2 className={styles.title}>{title}</h2> {/* Post title styled with CSS module */}
              <p>{summary}</p> {/* Post summary */}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
