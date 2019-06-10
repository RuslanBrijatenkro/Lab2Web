import React from 'react';
import axios from 'axios';

export function getData() {
  return axios.get(`http://localhost:5000/login`).then(({ data }) => data);
}