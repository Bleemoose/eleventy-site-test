module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin"); // Ensure admin folder is copied
    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_includes"
      }
    };
  };
  