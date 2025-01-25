import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'
import { register } from 'swiper/element';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, image, _id} = useLoaderData();

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
          const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount > 0){
            // Show success popup
            // reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} updated successfully`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log('With image url', res.data);
      };

  return (
   <>
    <SectionTitle heading="Update Product Details">
    </SectionTitle>

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input defaultValue={name}
              type="text"
              placeholder="Recipe Name"
              {...register('name', {required: true})}
              
              className="input input-bordered w-full" />
          </label>

          <div className='flex gap-6'>
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue={category} {...register('category', {required: true})}
                className="select select-bordered w-full">
                <option disabled value="default">Select a Category</option>
                <option value="vegetables">Vegetables</option>
                <option value="fish">Fish</option>
                <option value="meats">Meats</option>
                <option value="medicine">Medicine</option>
                <option value="clothes">Clothes</option>
                <option value="wooden">Wooden</option>
                {/* <option value="dessert">Dessert</option> */}
              </select>

            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input defaultValue={price}
                type="text"
                placeholder="Price"
                {...register('price', {required: true})}
                className="input input-bordered w-full" />

            </label>
          </div>
          {/* Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Product Quantity</span>
            </div>
            <textarea defaultValue={recipe} {...register('recipe', {required: true})}
              className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
          </label>

          <div className='mt-6 text-center w-48'>
            <img src={image} alt="" />
          </div>

          <div className='form-control w-full my-6 border rounded-lg'>
            <input {...register('image', {required: true})}
              type="file" className="file-input w-full" />
          </div>

          <button className='btn bg-gradient-to-r bg-amber-600 text-white'>
            Update Product Details
          </button>
        </form>
      </div>
   </>
  )
}

export default UpdateItem