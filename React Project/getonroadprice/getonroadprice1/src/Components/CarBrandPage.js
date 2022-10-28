import React from 'react';
// import Banner from './images/car-1.jpg';

function CarBrandPage() {
  return (
    <>
    {/* Banner */}
        <div className="sub-banner">
            <div className="container breadcrumb-area">
                <div className="breadcrumb-areas">
                    <h1>Hyundai Cars</h1>
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Hyundai Cars</li>
                    </ul>
                </div>
            </div>
        </div>
    {/* Banner */}

    {/* Brand Name and Description  */}
    <div className="mt-5 mb-5">
        <div className="container">
            <div className="main-title text-l mb-0">
                <h1 className="mb-0">Hyundai <span>Cars</span></h1>
                <div className="ratings days top-review">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span>(65 Reviews)</span>
                </div>
                <p className="mt-3">Hyundai car price starts at Rs 4.89 Lakh for the cheapest model which is Santro and the price of most expensive model, which is Tucson starts at Rs 27.70 Lakh. Hyundai offers 12 car models in India, including 4 cars in SUV category, 1 car in Sedan category, 4 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category. Hyundai has 4 upcoming cars in India, New Verna, Creta Facelift, Ioniq 5 and New Kona.</p>
            </div>
        </div>
    </div>
    {/* Brand Name and Description Ends */}


    </>
  )
}

export default CarBrandPage
