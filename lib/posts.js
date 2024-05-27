// Import necessary modules
import fs from 'fs'; // Node.js file system module to read files
import path from 'path'; // Node.js path module to work with file and directory paths
import matter from 'gray-matter'; // Gray-matter to parse front matter from markdown files
import { remark } from 'remark'; // Remark for processing markdown content
import html from 'remark-html'; // Remark plugin to convert markdown to HTML

// Define the directory where the markdown files are stored
const postsDirectory = path.join(process.cwd(), 'content/posts');

// Function to get sorted posts data
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory); // Read all file names in the posts directory
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // Remove the .md file extension to get the slug
    const fullPath = path.join(postsDirectory, fileName); // Create the full path to the markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // Read the file contents as a string
    const matterResult = matter(fileContents); // Parse the front matter section of the file

    // Combine the slug with the parsed data
    return {
      slug,
      ...matterResult.data,
    };
  });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Function to get all post slugs
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory); // Read all file names in the posts directory
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''), // Remove the .md file extension to get the slug
    },
  }));
}

// Function to get post data based on slug
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`); // Create the full path to the markdown file
  const fileContents = fs.readFileSync(fullPath, 'utf8'); // Read the file contents as a string

  // Parse the front matter section of the file
  const matterResult = matter(fileContents);

  // Process the markdown content to HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Convert the processed content to a string

  // Combine the slug, contentHtml, and the parsed data
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
