module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: ["introduction"],
    },
    {
      type: "category",
      label: "Javascript",
      items: [
        "js_index",
        {
          Fundamentals: ["polyfill", "lodash"],
        },
        "debounce",
        "throttling",
        "js_function",
      ],
    },
    {
      type: "category",
      label: "Typescript",
      items: ["ts_index"],
    },
    {
      type: "category",
      label: "HTML",
      items: ["html_index"],
    },
    {
      type: "category",
      label: "Web / Browser",
      items: ["web_index"],
    }
  ],
};
