module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Interview Hub',
      items: [
        'questions/js',
        // 'questions/dom',
        // 'questions/web',
        // 'questions/html',
        // 'questions/style',
        // 'questions/package',
        // 'questions/ts',
        // 'questions/react',
        // 'questions/webpack',
      ],
    },
    {
      type: 'category',
      label: 'Javascript',
      items: [
        'javascript/js_index',
        {
          Modules: [
            'javascript/modules/module1_basic',
            'javascript/modules/module2_object',
            'javascript/modules/module3_datatypes',
            'javascript/modules/module4_function',
            'javascript/modules/module5_prototype',
            'javascript/modules/module6_classes',
            'javascript/modules/module7_destruct',
            'javascript/modules/module9_promise',
            'javascript/modules/module10_generator',
            'javascript/modules/module11_module',
            'javascript/modules/module13_set_weakset',
            'javascript/modules/module14_map_weakmap',
            'javascript/modules/module15_async_await',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        'react/react_profile',
        {
          Hooks: [
            'react/hooks/hooks_intro',
            {
              'Built-in Hooks': [
                'react/hooks/hooks_state',
                'react/hooks/hooks_effect',
                'react/hooks/hooks_ctx',
                'react/hooks/hooks_memo',
                'react/hooks/hooks_reducer',
              ],
            },
            'react/hooks/hooks_rules',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💎 Gem Box 💎',
      items: [
        'gemBox/ui_res',
        'gemBox/learning_res',
        'gemBox/hosting_res',
        'gemBox/css_res',
        'gemBox/browser_res',
        'gemBox/react_res',
      ],
    },
    // {
    //   type: 'doc',
    //   id: 'misc/credits',
    // },
  ],
};
