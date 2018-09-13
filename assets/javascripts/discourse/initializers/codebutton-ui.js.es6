import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.codebutton_ui) {
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        trimLeading: true,
        id: "codebutton_ui_button",
        group: 'insertions',
        icon: "file-code-o",
        title: 'codebutton_ui_title',
        perform: e => e.applySurround('```cpp\n', '\n```', 'codebutton_ui_default_text')
      });
    });
  }
}

export default
{
  name: 'codebutton-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
