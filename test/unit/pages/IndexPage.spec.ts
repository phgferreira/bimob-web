import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexPage from 'pages/IndexPage.vue';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';

installQuasarPlugin();

describe('IndexPage', () => {
  it('deve renderizar', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.findComponent({ name: 'q-page' }).exists()).toBeTruthy();
  });
});
