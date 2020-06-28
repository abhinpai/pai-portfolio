module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction"
    },
    {
      type: "category",
      label: "Javascript",
      items: [
        "javascript/js_index",
        {
          Modules:[
            "javascript/modules/module1_basic",
            "javascript/modules/module3_object",
            "javascript/modules/module4_datatypes",
            "javascript/modules/module8_destruct"
          ]
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Typescript",
    //   items: ["ts_index"],
    // },
    // {
    //   type: "category",
    //   label: "Web / Browser",
    //   items: ["web_index"],
    // },
    {
      type: "category",
      label: "💎 Gem Box 💎",
      items: ["ui_res"],
    },
    {
      type: 'doc',
      id: 'misc/credits',
    }
  ],
};
