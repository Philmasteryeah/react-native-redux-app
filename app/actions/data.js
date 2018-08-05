export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../instructions.json'; // sample data

export const getData = () => {
    return (dispatch) => {

        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}