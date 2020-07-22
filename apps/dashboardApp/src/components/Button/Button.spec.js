import Button from './Button'
import Spinner from './Spinner/Spinner'
import { mount } from '@vue/test-utils'

describe('Button component', () => {
  it('correctly displays the correct default component', () => {
    const wrapper = mount(Button)
    const htmlString = JSON.stringify(wrapper.html())
    expect(htmlString.includes('buttonWrapper')).toBe(true)
    expect(htmlString.includes('buttonInner')).toBe(true)
    expect(wrapper.text()).toBe('I am Button')
  })

  it('displays the correct button text when the prop is passed', () => {
    const wrapper = mount(Button, {
      slots: {
        buttonText: 'Inner button text'
      }
    })
    expect(wrapper.text()).toBe('Inner button text')
    expect(wrapper.contains(Spinner)).toBe(false)
    const htmlString = JSON.stringify(wrapper.html())
    expect(htmlString.includes('disabled')).toBe(false)
    expect(htmlString.includes('pending')).toBe(false)
  })

  it('correctly handles the click event', () => {
    const wrapper = mount(Button)
    wrapper.trigger('click')
    expect(wrapper.emitted().clicked).toBeTruthy()
  })

  it('correctly deals with the pending prop', () => {
    const wrapper = mount(Button, {
      propsData: {
        pending: true
      }
    })
    expect(wrapper.contains(Spinner)).toBe(true)
    const htmlString = JSON.stringify(wrapper.html())
    expect(htmlString.includes('pending')).toBe(true)
  })

  it('correctly deals with the disabled prop', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.contains(Spinner)).toBe(false)
    const htmlString = JSON.stringify(wrapper.html())
    expect(htmlString.includes('disabled')).toBe(true)
  })

  it('correctly shows secondary button', () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'secondary'
      }
    })
    const htmlString = JSON.stringify(wrapper.html())
    expect(htmlString.includes('secondary')).toBe(true)
  })
})
