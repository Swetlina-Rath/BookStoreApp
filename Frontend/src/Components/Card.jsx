import React from 'react'

function Card({item}) {
    console.log(item)
  return (<>
    <div>
      <div className="mx-4 my-4 card bg-base-100 w-76 shadow-xl px-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure>
        <img
        src={item.image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
    </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Card
