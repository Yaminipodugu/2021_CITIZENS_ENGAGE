import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [];

const qualityType = {
  'good': 'good',
  'bad': 'Bad'

};

// function addProducts(quantity) {
//   const startId = products.length;
//   for (let i = 0; i < quantity; i++) {
//     const id = startId + i;
//     products.push({
//       id: id,
//       name: 'Item name ' + id,
//       quality: i % 3
//     });
//   }
// }

products=[{id:4,name:'1',quality:'good'},{id:5,name:'4',quality:'bad'},{id:6,name:'7',quality:'good'}]
// addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class SelectFilter extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' filterFormatted dataFormat={ enumFormatter } formatExtraData={ qualityType }
          filter={ { type: 'SelectFilter', options: qualityType } }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}