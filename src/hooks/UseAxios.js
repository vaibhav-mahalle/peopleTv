import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (apiURL) => {
    const [loadingData, setLoading] = useState(false);
    const [responseData, setResponseData] = useState({});
    const [errorData, setError] = useState("");
    const getData = async () => {
        try{
            setLoading(true);
            const res = await axios.get(apiURL);
            setResponseData(res.data);
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    };

    useEffect(()=>{getData(apiURL)}, [apiURL]);

    return {loadingData, responseData, errorData};
}