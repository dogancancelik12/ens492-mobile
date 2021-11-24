import {useEffect, useState} from 'react';
import {restService} from '../service/restService';

class Colors {

    isDarkModeEnabled

    getUserInfo() {
        restService.get('user/getUserInfo')
            .then(response => {
                this.isDarkModeEnabled = response.data.isDarkModeEnabled
            })
    }

    COLORSLIGHT = {
        colorPrimaryLight: "#5C9EAD",
        colorPrimary: "#326273",
        colorPrimaryDark: "#224552",
        colorSecondary: "#E39774",
        colorWhite: "#FFFFFF",
        colorWhiteDark: "#e1e0e0",
        colorGrey: "#989393"
    }

    COLORSDARK = {
        colorPrimaryLight: "#a5a09a",
        colorPrimary: "#ec4a00",
        colorPrimaryDark: "#454545",
        colorSecondary: "#E39774",
        colorWhite: "#FFFFFF",
        colorWhiteDark: "#e1e0e0",
        colorGrey: "#989393"
    }

    getColor() {
        if (this.isDarkModeEnabled) {
            return this.COLORSDARK
        } else {
            return this.COLORSLIGHT
        }
    }

}

export var colors = new Colors();
