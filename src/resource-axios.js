/**
 * create vue-resource's resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   query: {method: 'GET'}
 *   save: {method: 'POST'}
 *   update: {method: 'PUT'}
 *   delete: {method: 'DELETE'}
 *
 * @param {String} path the resource path
 * @param  {Object} actions custom actions to overwrite or to add
 * @returns {Object} the resource object
 */

import axios from 'axios';
// console.log(axios)

export default (path, actions) => {
  const resource = {
    get: id => axios.get(`${path}/${id}`),
    query: params => axios.get(path, { params }),
    save: data => axios.post(path, data),
    update: (id, data) => axios.put(`${path}/${id}`, data),
    delete: id => axios.delete(`${path}/${id}`),
  };
  return Object.assign(resource, actions);
};

