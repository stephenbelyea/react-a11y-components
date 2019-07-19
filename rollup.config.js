import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const config = {
  input: "src/index.js",
  output: {
    name: "react-a11y-patterns",
    file: "dist/bundle.js",
    format: "umd",
    globals: {
      react: "React",
      "prop-types": "PropTypes"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      extensions: [".js", ".jsx", ".json"]
    })
  ],
  external: ["react", "prop-types"]
};
export default config;
