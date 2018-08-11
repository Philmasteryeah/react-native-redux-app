export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import {decode as atob, encode as btoa} from 'base-64'
import Data from '../instructions.json'; // sample data for 

export const getData = () => {
    return (dispatch) => {
        // local testing
        // setTimeout(() => {
        //     var data = Data.instructions;
        //     dispatch({ type: DATA_AVAILABLE, data: data });
        // }, 2000);

        // remote
        fetch('http://192.168.0.106:9090/rest/meals',
            {
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa('sa:test'), // base 64 TODO from inputs
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: DATA_AVAILABLE, data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
