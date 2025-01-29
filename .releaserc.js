const { promisify } = require("util");
const dateFormat = require("dateformat");
const { join, resolve } = require("node:path");
const readFileAsync = promisify(require("fs").readFile);

const releaseNotesTemplatePath = resolve(__dirname, "build/release-notes.hbs");
const commitTemplateDir =
  "node_modules/semantic-release-gitmoji/lib/assets/templates";

const releaseNotesTemplate = readFileAsync(releaseNotesTemplatePath);
const commitTemplate = readFileAsync(
  join(commitTemplateDir, "commit-template.hbs")
);

module.exports = {
  branches: [
    "main",
    "+([0-9])?(.{+([0-9]),x}).x",
    "next",
    "next-major",
    {
      name: "alpha",
      prerelease: true,
    },
    {
      name: "beta",
      prerelease: true,
    },
  ],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [":bug:", ":ambulance:", ":lock:", ":lipstick:", "arrow_up"],
        },
        releaseNotes: {
          template: releaseNotesTemplate,
          partials: { commitTemplate },
          helpers: {
            datetime: function (format = "UTC:yyyy-mm-dd") {
              return dateFormat(new Date(), format);
            },
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://github.com",
            source: "github.com",
            removeFromCommit: false,
            regex: /#\d+/g,
          },
        },
      },
    ],
    ["@semantic-release/npm", { pkgRoot: "./dist" }],
    [
      "@semantic-release/github",
      {
        assets: [
          "package.json",
          "README.md",
          "dist/**/*.{ts}",
          {
            path: "dist/muc-patternlab-vue.es.js",
            label: "JS distribution",
          },
          {
            path: "dist/assets/temporary/muenchende-style.css",
            label: "CSS distribution",
          },
          {
            path: "dist/assets/temporary/muenchende-fontfaces.css",
            label: "CSS fontface distribution",
          },
          {
            path: "dist/assets/temporary/muc-icons.svg",
            label: "SVG sprite distribution",
          },
        ],
      },
    ],
  ],
};
