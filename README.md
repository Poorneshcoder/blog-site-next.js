This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Certainly! Here's a guide to set up and run the project locally, along with an explanation of the project structure and key components:

Setting up and Running the Project Locally:

 1.Clone the Repository:

Clone the project repository from GitHub to your local machine using the following command:

`git clone <repository-url>`

 2.Navigate to the Project Directory:

Open a terminal or command prompt and change directory to the project folder:

cd your-project-directory

 3.Install Dependencies:

Once inside the project directory, install the necessary dependencies using npm or yarn:

npm install
or

yarn install

 4.Run the Development Server:

After installing dependencies, start the development server:

npm run dev
or

yarn dev

 5.View the Application:

 Once the server is running, open your web browser and go to http://localhost:3000 to view the application.

Project Structure and Key Components:

 pages Directory:

  Contains Next.js pages for routing.
  index.js: Homepage displaying the list of blog posts.
  [slug].js: Individual blog post page.
  
components Directory:

  Contains reusable React components.
  Layout.js: Layout component used to wrap around other components, providing a common layout structure.
  BlogList.js: Component to display a list of blog posts on the homepage.
  BlogPost.js: Component to display individual blog post content.
  
lib Directory:
  
  Contains utility functions and data fetching methods.
  posts.js: Utility functions to read markdown files, fetch post data, and generate paths for individual blog posts.
  
content/posts Directory:

  Stores Markdown files for blog posts.
  Each Markdown file contains metadata (e.g., title, date, summary) and the content of the blog post.
  
styles Directory:

  Contains CSS files for styling the application.
  globals.css: Global CSS styles applied across the entire application.
  Home.module.css: CSS module for styling specific components or pages.
  
public Directory:

  Contains static assets such as images, fonts, etc.
  
next.config.js File:

  Configuration file for Next.js, allowing customization of webpack, asset optimization, etc.
  
package.json File:

  Manifest file for Node.js projects, containing metadata and dependencies for the project.
  
This project follows a typical Next.js project structure, with pages, components, utility functions, and styling organized into separate directories. Markdown files are used for content management, and Next.js's data fetching methods (getStaticProps, getStaticPaths) are utilized for static generation of blog posts. Styling is done using CSS modules for scoped styling and maintainability.
