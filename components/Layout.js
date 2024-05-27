
// Import the CSS module for styling
import styles from '../styles/Home.module.css';

// Define the Layout component which receives children as a prop
export default function Layout({ children }) {
  return (
    <div className={styles.container}> {/* Apply the container class from the CSS module */}
      <main>{children}</main> {/* Render the children inside the main element */}
    </div>
  );
}
