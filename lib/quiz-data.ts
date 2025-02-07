export const quizData = [
  {
    question: "Question 1: What is the purpose of the _app.js file in Next.js?",
    options: [
      "To define API routes",
      "To initialize Redux store",
      "To override the default App component and add",
      "To handle server-side rendering for specific pages"
    ],
    correctAnswer: 2,
    explanation: "The _app.js file is a custom App component in Next.js. It allows you to override the default App component and add global styles, persist layout between page changes, or inject additional data into pages."
  },
  {
    question: " Which of the following is true about Static Site Generation (SSG) in Next.js?",
    options: [
      "SSG generates pages at build time and serves them as static files.",
      "SSG generates pages on every request.",
      "SSG is not supported in Next.js",
      "SSG requires a server to render pages dynamically"
    ],
    correctAnswer: 0,
    explanation: "Static Site Generation (SSG) pre-renders pages at build time. The generated HTML is served as a static file, making it fast and efficient for pages that don’t change frequently."
  },
  {
    question: "How do you fetch data for a page that uses Static Site Generation (SSG)?",
    options: [
      "Using getServerSideProps",
      "Using getStaticProps",
      "Using useEffect in a React component",
      "Using getInitialProps"
    ],
    correctAnswer: 1,
    explanation: "getStaticProps is used to fetch data at build time for SSG pages. It runs on the server during the build process and passes the data as props to the page."
  },
  {
    question: "What is the purpose of getStaticPaths in Next.js?",
    options: [
      "To fetch data from an API",
      "To define dynamic routes for SSG pages",
      "To handle server-side rendering for all pages",
      "To optimize images in Next.js"
    ],
    correctAnswer: 1,
    explanation: "getStaticPaths is used in dynamic routes to specify which paths should be pre-rendered at build time. It works with getStaticProps to generate static pages for dynamic routes."
  },
  {
    question: " Which hook is used to programmatically navigate between pages in Next.js?",
    options: [
      "useHistory",
      "useRouter",
      "useNavigate",
      "TuseLink"
    ],
    correctAnswer: 1,
    explanation: "The useRouter hook from next/router allows you to programmatically navigate between pages, access query parameters, and manage routing in Next.js."
  },
  {
    question: "What is the purpose of the public folder in Next.js?",
    options: [
      "To store API route handlers",
      "To store server-side code",
      "To store environment variables",
      "To store static assets like images and fonts",
    ],
    correctAnswer: 3,
    explanation: "The public folder is used to store static assets such as images, fonts, and files. These assets can be accessed directly via /filename in your application."
  },
  {
    question: "How do you enable CSS Modules in Next.js?",
    options: [
      "By naming your CSS files with the .module.css extension",
      "By importing CSS files directly in _app.js",
      "By using the styled-jsx library",
      " By configuring next.config.js"
    ],
    correctAnswer: 0,
    explanation: "CSS Modules are enabled by naming your CSS files with the .module.css extension. This ensures that class names are scoped locally to avoid conflicts."
  },
  {
    question: "What is the purpose of next/image in Next.js?",
    options: [
      "To optimize and lazy-load images",
      "To create image carousels",
      "To store images in the public folder",
      "To generate dynamic images"
    ],
    correctAnswer: 0,
    explanation: "The next/image component optimizes images by resizing, compressing, and lazy-loading them. It improves performance and reduces page load times."
  },
  {
    question: " How do you create a dynamic route in Next.js?",
    options: [
      "By using the useRouter hook",
      "By creating a file with square brackets, e.g., [id].js",
      "By configuring next.config.js",
      "By creating a folder with square brackets, e.g., [id]/index.js"
    ],
    correctAnswer: 1,
    explanation: "Dynamic routes are created by naming files with square brackets, e.g., [id].js. The value inside the brackets is accessible as a query parameter."
  },
  {
    question: "What is the purpose of getServerSideProps?",
    options: [
      "To fetch data at build time",
      "To define static paths",
      "To fetch data on every request",
      "To optimize images"
    ],
    correctAnswer: 2,
    explanation: "getServerSideProps fetches data on every request, making it ideal for pages that require up-to-date data or server-side rendering (SSR)."
  },
  {
    question: ": How do you access query parameters in a Next.js page?",
    options: [
      "Using useRouter from next/router",
      "Using getStaticProps",
      "Using getInitialProps",
      "Using useQuery"
    ],
    correctAnswer: 0,
    explanation: "The useRouter hook provides access to query parameters via router.query. This is useful for dynamic routes and handling URL parameters."
  },
  {
    question: "What is the purpose of next/head?",
    options: [
      "To create a navigation menu",
      "To optimize server-side rendering",
      "To add metadata to the HTML <head> section",
      "To handle API requests"
    ],
    correctAnswer: 2,
    explanation: "allows you to add metadata, such as title, description, and OpenGraph tags, to the <head> section of your page."
  },
  {
    question: " How do you create an API route in Next.js?",
    options: [
      "By creating a file in the pages/api directory",
      "By configuring next.config.js",
      "By using getStaticProps",
      "By using getServerSideProps"
    ],
    correctAnswer: 0,
    explanation: "API routes are created by adding files to the pages/api directory. These routes can handle server-side logic and respond to HTTP requests."
  },
  {
    question: "What is the purpose of next/link?",
    options: [
      "To create external links",
      "To navigate between pages without a full page reload",
      "To handle API requests",
      "To optimize images"
    ],
    correctAnswer: 1,
    explanation: "next/link enables client-side navigation between pages, avoiding full page reloads and improving performance."
  },
  {
    question: "How do you enable TypeScript in a Next.js project?",
    options: [
      "By creating a tsconfig.json file",
      "By installing @types/react and @types/node",
      "By renaming files to .tsx",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "To enable TypeScript, you need to create a tsconfig.json file, install type definitions, and rename files to .tsx."
  },
  {
    question: " What is the purpose of next/config?",
    options: [
      "To access environment variables",
      "To define build-time configurations",
      "To handle API routes",
      "To configure runtime settings"
    ],
    correctAnswer: 3,
    explanation: "next/config allows you to access runtime configuration settings defined in next.config.js."
  },
  {
    question: "How do you handle 404 errors in Next.js?",
    options: [
      "By creating a 404.js file in the pages directory",
      "By using getStaticProps",
      "By configuring next.config.js",
      "By using getServerSideProps"
    ],
    correctAnswer: 0,
    explanation: "A custom 404 page can be created by adding a 404.js file in the pages directory. This page is displayed when a route is not found."
  },
  {
    question: "What is the purpose of next/dynamic?",
    options: [
      "To lazy-load components",
      "To create dynamic routes",
      "To handle API requests",
      "To optimize images"
    ],
    correctAnswer: 0,
    explanation: "next/dynamic allows you to lazy-load components, improving performance by loading them only when needed."
  },
  {
    question: "How do you deploy a Next.js application to Vercel?",
    options: [
      "By pushing the code to a GitHub repository connected to Vercel",
      "By manually uploading the build files to Vercel",
      "By using the vercel CLI",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Next.js apps can be deployed to Vercel using GitHub integration, the Vercel CLI, or by manually uploading build files."
  },
  {
    question: " What is the purpose of next/script?",
    options: [
      "To load third-party scripts efficiently",
      "To create custom scripts for API routes",
      "To handle server-side rendering",
      "To optimize images"
    ],
    correctAnswer: 0,
    explanation: "next/script optimizes the loading of third-party scripts by allowing you to control when and how they are loaded."
  }
];