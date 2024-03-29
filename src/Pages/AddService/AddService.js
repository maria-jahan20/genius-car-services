import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();
     const onSubmit = (data) =>{ 
        console.log(data)
        const url = `https://genius-car-db.up.railway.app/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };
    return (
      <div className='w-50 mx-auto'>
        <h1>Please add a service</h1>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3' placeholder='Enter Name' {...register("name")} />
          <input className='mb-3' placeholder='Enter description' {...register("description", { required: true })} />
          <input className='mb-3' placeholder='Enter Price' type='number' {...register("price")} />
          <input className='mb-3' placeholder='photo url' type='text' {...register("img")} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='' type="submit" value='Add Service' />
        </form>
      </div>
    );
};

export default AddService;