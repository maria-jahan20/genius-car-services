import { useEffect, useState } from "react";

const useServiceById=(serviceId)=>{
    const [service, setService] = useState([]);
    useEffect(() => {
      const url = `https://genius-car-db.up.railway.app/service/${serviceId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setService(data));
    },
 
     [serviceId]);
        return [service];
    
}
export default useServiceById;