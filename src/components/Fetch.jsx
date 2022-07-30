import {useState,useEffect} from 'react'

import axios from 'axios'

function Fetch({url}) {
    const [fetchedData, setFetchedData] = useState("");
    useEffect(() => {
        axios.get(url).then(result => setFetchedData(result.data))
    }, [])
    
    return (
        <div>{console.log(fetchedData)}</div>
    )
}

export default Fetch