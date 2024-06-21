import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   

    const postData = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.post(url, data, {
              headers: {
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
              }
            });
            setData(response.data);
          } catch (error) {
            setError(error);
            throw error; // re-throw the error so it can be caught and handled by the caller
          } finally {
            setIsLoading(false);
          }
        };
      
        return [postData, data, error, isLoading];

};

export default usePost;