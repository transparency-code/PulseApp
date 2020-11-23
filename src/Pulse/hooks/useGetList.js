import {useState, useEffect } from 'react';

//https://reactjs.org/docs/hooks-custom.html

export default function useGetList(getListFunc) {

    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //await should be inside
            setCurrentList(await getListFunc())
        }
        fetchData();

        //removing the dependency aray causes unlimited rerender
    }, [getListFunc]);

    
    return currentList
}
