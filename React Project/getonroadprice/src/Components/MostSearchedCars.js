import React from 'react';
import car1 from './images/Most Searched Car/car-2.jpg';
import car2 from './images/Most Searched Car/car-3.jpg';
import car3 from './images/Most Searched Car/car-4.jpg';


function MostSearchedCars() {
  return (
    <>
    <div class="featured-car content-area slide-box-2 bg-grea-4 background-for-sec">
    <div class="container">
        <div class="main-title text-center pb-5">
            <h1 className='h3-font-size'>The Most <span className='global-text-color'>Searched Cars</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>

        <div class="faq-box">
            <div class="faq-info">
                <ul class="nav nav-tabs pb-3 border-0" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="hatchback" data-bs-toggle="tab" data-bs-target="#hatchback" type="button" role="tab" aria-controls="hatchback" aria-selected="true">Hatchback</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="sedan" data-bs-toggle="tab" data-bs-target="#sedan" type="button" role="tab" aria-controls="sedan" aria-selected="false">Sedan</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="suv" data-bs-toggle="tab" data-bs-target="suv" type="button" role="tab" aria-controls="suv" aria-selected="false">SUV</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-ta" data-bs-toggle="tab" data-bs-target="#fuel" type="button" role="tab" aria-controls="fuel" aria-selected="false">MUV</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-t" data-bs-toggle="tab" data-bs-target="#trasmission" type="button" role="tab" aria-controls="trasmission" aria-selected="false">Electric</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-" data-bs-toggle="tab" data-bs-target="#seating" type="button" role="tab" aria-controls="seating" aria-selected="false">Luxury</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent2">
                    <div class="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="car-box">
                                    <div class="car-thumbnail">
                                        <a href="/" class="car-img">
                                            {/* <div class="tag">For Rent</div> */}
                                            <img class="d-block w-100" src={car1} alt="car"/>
                                        </a>
                                    </div>
                                    <div class="detail">
                                        <h1 class="title">
                                            <a href="/">Lexus GS Red Car</a>
                                        </h1>
                                        <div class="location">
                                            <a href="/">
                                                <i class="fa fa-rupee"></i> 4.25 - 5.65 Lakhs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="car-box">
                                    <div class="car-thumbnail">
                                        <a href="/" class="car-img">
                                            {/* <div class="tag">For Sale</div> */}
                                            <img class="d-block w-100" src={car2} alt="car"/>
                                            
                                        </a>
                                    </div>
                                    <div class="detail">
                                        <h1 class="title">
                                            <a href="/">2015 Porsche Cayenne</a>
                                        </h1>
                                        <div class="location">
                                            <a href="/">
                                                <i class="fa fa-rupee"></i> 4.25 - 5.65 Lakhs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="car-box">
                                    <div class="car-thumbnail">
                                        <a href="/" class="car-img">
                                            {/* <div class="tag">For Sale</div> */}
                                            <img class="d-block w-100" src={car3} alt="car"/>
                                        </a>
                                    </div>
                                    <div class="detail">
                                        <h1 class="title">
                                            <a href="/">Toyota Corolla</a>
                                        </h1>
                                        <div class="location">
                                            <a href="/">
                                                <i class="fa fa-rupee"></i> 4.25 - 5.65 Lakhs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* hello */}
                    


                    {/* over */}
                    <div class="tab-pane fade" id="sedan" role="tabpanel" aria-labelledby="sedan">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis.</p>

                    </div>
                    <div class="tab-pane fade" id="suv" role="tabpanel" aria-labelledby="suv">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default MostSearchedCars