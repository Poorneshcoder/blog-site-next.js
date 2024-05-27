// Import global CSS styles
import '../styles/globals.css';

// Define the MyApp component which wraps around all pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render the specific page component with its props
}

// Export the MyApp component as the default export
export default MyApp;

