/* eslint-disable linebreak-style */
const {
  menyimpanBuku,
  menampilkanSeluruhBuku,
  menampilkanDetailBuku,
  mengubahDataBuku,
  menghapusBuku,
} = require('./handler.cjs');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: menyimpanBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: menampilkanSeluruhBuku,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: menampilkanDetailBuku,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: mengubahDataBuku,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: menghapusBuku,
  },
];

module.exports = routes;
