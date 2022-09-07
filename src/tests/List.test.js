import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'

import List from '../components/List'
import Paragraph from '../components/Paragraph'

Enzyme.configure({adapter: new Adapter() })

describe('List', () => {
  it('should render `This list is empty` inside a Paragraph component if items is an empty array', () => {
    const wrapper = shallow(<List items={[]} />)
    const paragraph = wrapper.find(Paragraph)
    expect(paragraph.props().children).toEqual('This list is empty')
  })

  it('should render a list with the body of each item inside a div', () => {
    const itemsArray = [{ id: 1, body: 'Shopping' }, { id: 2, body: 'Exercise' }, { id: 3, body: 'Cook' }]
    const wrapper = shallow(<List items={itemsArray} />)

    const items = wrapper.find('div[className="item"]')
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().text()).toEqual('Shopping')
  })
})