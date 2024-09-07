import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'
import { render } from 'vue';

describe('IndexPage', () => {
    it('should render correct contents', () => {
        const wrapper = shallowMount(IndexPage)
        let header = wrapper.find('.htmlClass h1')
        expect(header.exists()).toBe(true)
        expect(header.text())
            .toBe('Vue is awesome.')
    });

    it('check text content to be as defined in variable', () => {
        const wrapper = shallowMount(IndexPage, {
            data() {
                return {
                    title: 'I love Vue.',
                }
            }
        })
        let header = wrapper.find('.htmlClass h1')
        expect(header.text()).toBe('I love Vue.')
    });
})

test('should show the form element on the user output', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
})

//Check if the form in the template has an input field.
test('should contain input fields in template', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
})

test('should have input fields in template for collect >> Student ID', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('#stdID').exists()).toBe(true)
})

test('should have input fields in template for collect >> Nick name', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('#nickName').exists()).toBe(true)
})

test('should have input fields in template for collect >> First name', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('#firstName').exists()).toBe(true)
})

test('should have input fields in template for collect >> Last name', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('#lastName').exists()).toBe(true)
})

//Check if the template has a submit button.
test('should have button', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
})

test('trigger click event on button ', async () => {
    const wrapper = shallowMount(IndexPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit form')
})