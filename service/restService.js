import React from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

class RestService {

    post(url, body) {
        return new Promise(async (resolve, reject) => {
            const token = await SecureStore.getItemAsync('userToken');
            const headers = {
                'Authorization': token ? token : null,
            };
            axios.post('http://localhost:8080/' + url, body, {headers})
                .then(response => resolve(response.data));
        })
    }

    get(url) {
        return new Promise(async (resolve, reject) => {
            const token = await SecureStore.getItemAsync('userToken');
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token ? token : null,
            };
            axios.get('http://localhost:8080/' + url, {headers})
                .then(response => resolve(response.data));
        })
    }


}

export var restService = new RestService();