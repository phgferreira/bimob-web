import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleTest from 'components/ExampleTest.vue';

describe('Teste de exemplo', () => {
  it('teste', () => {
    const wrapper = mount(ExampleTest);
    expect(wrapper.findComponent({ name: 'q-input' }).exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
