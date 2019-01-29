import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
require('../setupTest');

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id:1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@mail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
