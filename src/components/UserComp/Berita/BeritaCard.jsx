import React, { useState, useEffect } from 'react'


const BeritaCard = ({ image, title, desc, date}) => {
    return (
        <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray rounded-lg overflow-hidden font-poppins w-full max-w-[350px] shadow-lg">
        <img
            src={image}
            alt=""
            className="w-full h-[200px] object-cover"
        />
        <div className="p-4 rounded-t-lg">
            <h3 className="text-lg font-bold mb-2 text-justify">
                {title}
            </h3>
            <p className="text-gray-700 text-sm mb-4 text-justify line-clamp-4">
                {desc}
            </p>
            <div className="flex items-center justify-end text-cust-blue font-semibold text-sm">
                {date}
            </div>
        </div>
    </div>
    )
}

export default BeritaCard;