import { render, screen } from '@testing-library/react';
import {configure, shallow, assert,mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TableExample from './TableExample';
import birds from './bird.json';

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
describe('Test if there is enought rown and columns', () => {
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


describe('Test that birds are sorted by finnish ascending', () => {
    //sort the birds
    function compare( a, b ) {
        if ( a.finnish < b.finnish ){
          return -1;
        }
        if ( a.finnish > b.finnish ){
          return 1;
        }
        return 0;
      }      
    birds.sort(compare);
    //console.log(JSON.stringify(birds))
    const wrapper = mount(<TableExample />);
   // Loop through each row and check the content
   const table = wrapper.find('table');
   expect(table).toHaveLength(1);
   const tbody = table.find('tbody');
   const rows = tbody.find('tr');
   rows.forEach((tr, rowIndex) => {
        const cells = tr.find('td');
        expect(cells).toHaveLength(4);
        //In test the language order follows the original
        expect(cells.at(0).text()).toEqual(birds[rowIndex].english);
        expect(cells.at(1).text()).toEqual(birds[rowIndex].swedish);
        expect(cells.at(2).text()).toEqual(birds[rowIndex].short);
    });
});