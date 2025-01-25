import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and thenget and url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success){
      // 
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        // Show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('With image url', res.data);
  };
  return (
    <div>
      <SectionTitle heading="add your product" subHeading="What's New?"></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Product Name*</span>
            </div>
            <input
              type="text"
              placeholder="Enter Name"
              {...register('name', {required: true})}
              
              className="input input-bordered w-full" />
          </label>

          <div className='flex gap-6'>
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue="default" {...register('category', {required: true})}
                className="select select-bordered w-full">
                <option disabled value="default">Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="vegetables">Vegetables</option>
                <option value="fishes">Fishes</option>
                <option value="meats">Meats</option>
                <option value="wooden">Wooden</option>
                <option value="clothes">Clothes</option>
                <option value="bamboo">Bamboo</option>
              </select>

            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="text"
                placeholder="Price"
                {...register('price', {required: true})}
                className="input input-bordered w-full" />

            </label>
          </div>
          {/* Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <textarea {...register('recipe', {required: true})}
              className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
          </label>

          <div className='form-control w-full my-6'>
            <input {...register('image', {required: true})}
              type="file" className="file-input w-full" />
          </div>

          <button className='btn bg-gradient-to-r bg-orange-600 text-white'>
            Add Product <FaUtensils className='ml-4' />
          </button>
        </form>
      </div>

    </div>
  )
}

export default AddItems
