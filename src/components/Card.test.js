import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';
require('../setupTest');

it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1)
})

// console.log(shallow(<Card />));

/**
 * mount : test FULL-DOM/ lifecycle, use headless browser or js-dom
 */

/**
 * render: test static, not FULL-DOM , not like mount
 */

/**
 * shallow: most useful, 90% use case
 */