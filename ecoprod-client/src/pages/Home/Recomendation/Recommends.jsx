import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Recommends = () => {
  return (
    <>
      <section>
        <SectionTitle
          heading={"Customer Recommends"}
          subHeading={"----Should Try----"}>
        </SectionTitle>
        <div className="card bg-base-100 w-96 shadow-xl">

          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recommends;