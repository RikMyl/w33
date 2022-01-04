import { render, screen } from '@testing-library/react';
import {configure, shallow, assert,mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TableExample from './TableExample';

test('Check that table exists', () => {
  render(<TableExample />);
  const linkElement = screen.getByText(/Finnish/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check that header is ok', () => {
  render(<TableExample />);
  const linkElement = screen.getByText(/Finnish/i);
  expect(linkElement).toBeInTheDocument();
});

Enzyme.configure({ adapter: new Adapter() })
describe('test MyComponent', () => {
    const wrapper = mount(<TableExample />);
    const table = wrapper.find('table');
    const row = table.find('tr')
    const node = table.find("td")

    it('table grid', () => {
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(249);
        expect(node).toHaveLength(992);
    });
});
