module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "Javascript",
      items: [
        "javascript/js_index",
        {
          Modules: [
            "javascript/modules/module1_basic",
            "javascript/modules/module3_object",
            "javascript/modules/module5_function",
            "javascript/modules/module4_datatypes",
            "javascript/modules/module6_prototype",
            "javascript/modules/module7_classes",
            "javascript/modules/module8_destruct",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "React",
      items: ["react/react_profile", {
        Hooks: [
          "react/hooks/hooks_intro",
          {"Build-in Hooks": [
            "react/hooks/hooks_state",
            "react/hooks/hooks_effect",
            "react/hooks/hooks_ctx",
            "react/hooks/hooks_memo",
            "react/hooks/hooks_reducer",
          ]},
          "react/hooks/hooks_rules",
        ]
      }],
    },
    {
      type: "category",
      label: "💎 Gem Box 💎",
      items: [
        "gemBox/ui_res",
        "gemBox/learning_res",
        "gemBox/hosting_res",
        "gemBox/css_res",
        "gemBox/browser_res",
        "gemBox/react_res"
      ],
    },
    {
      type: "doc",
      id: "misc/credits",
    },
  ],
};
