import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://factory-pal.vercel.app/",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
