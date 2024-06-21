import { useState } from "react";
import axios from "axios";

const useUpdate = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   

    const updateData = async (id, data) => {
        setIsLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.put(`${url}/${id}`, data, {
              headers: {
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
              }
            });
            setData(response.data);
          } catch (error) {
            setError(error);
            throw error; 
          } finally {
            setIsLoading(false);
          }

        }
      
        return [updateData, data, error, isLoading];

};

export default useUpdate;