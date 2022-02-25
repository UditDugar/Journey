import React, { Component } from 'react';
import { processResponse } from '../ApiLogic/Api.Components';
import { API_TYPE, APP_APIS } from '../ApiLogic/API_URL';

export const ApiCall=(URL,method='GET',token)=>{
  // const url = 'https://bingehq.com/journey-app/api/activities';
    return fetch(URL, {
      method: method,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
       return data
      })
      .catch(error => {
        console.error('Error:', error);
        return error
      });
}


export const PostApiCallWithBody=(URL,method='POST',token,body)=>{
    return fetch(URL, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
       return data
      })
      .catch(error => {
        console.error('Error:', error);
        return error
      });
}


export const LoginApi=(URL,method='POST',body)=>{
  
  return fetch(URL, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => {
     return data
    })
    .catch(error => {
      console.error('Error:', error);
      return error
    });
}
