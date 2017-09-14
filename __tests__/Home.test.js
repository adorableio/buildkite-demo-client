import React from 'React';
import axios from 'axios';
import Home from 'components/Home';
import { shallow } from 'enzyme';
import { generateResponseFromSchema } from 'api-contracts';
import { resolve } from 'path';

axios.defaults.adapter = require('axios/lib/adapters/http');

describe('Home', () => {
  it('has content', async () => {
    const rootPath = resolve(__dirname, '..', '__contracts__', 'buildkite-demo-server');
    const state = await generateResponseFromSchema(rootPath, 'index.get.contract.js');

    const wrapper = shallow(<Home />);
    wrapper.setState(state);

    expect(wrapper.text()).toContain(state.name);
    expect(wrapper.text()).toContain(state.description);
    expect(wrapper.text()).toContain(state.updated_at);
  });
});
