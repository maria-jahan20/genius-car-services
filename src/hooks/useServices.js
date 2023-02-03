import { useEffect, useState } from "react";

const useServices=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://genius-car-db.up.railway.app/service")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return[services,setServices];
}
export default useServices;
// const [service, setService] = useState([]);
// useEffect(() => {
//   const url = `http://localhost:5000/service/${serviceId}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => setService(data));
// }, []);
    
