import React from 'react';
import Brand1 from './images/Brand Logos/brand-1.png';
import Brand2 from './images/Brand Logos/brand-2.png';
import Brand3 from './images/Brand Logos/brand-3.png';
import Brand4 from './images/Brand Logos/brand-4.png';
import Brand5 from './images/Brand Logos/brand-5.png';
import Brand6 from './images/Brand Logos/brand-6.png';
import Brand7 from './images/Brand Logos/brand-7.png';
import Brand8 from './images/Brand Logos/brand-8.png';
import Brand9 from './images/Brand Logos/brand-9.png';
import Brand10 from './images/Brand Logos/brand-10.png';
import Brand11 from './images/Brand Logos/brand-11.png';
import Brand12 from './images/Brand Logos/brand-12.png';
import Brand13 from './images/Brand Logos/brand-13.png';
import Brand14 from './images/Brand Logos/brand-14.png';
import Brand15 from './images/Brand Logos/brand-15.png';
import Brand16 from './images/Brand Logos/brand-16.png';
import Brand17 from './images/Brand Logos/brand-17.png';
// import Brand18 from './images/Brand Logos/brand-1.png';
import Brand19 from './images/Brand Logos/brand-19.png';












// import Brand1 from './images/brand1.jpg';
// import Banner from './images/banner1.jpg';

function HomePage() {
  return (
    <>
        <div className="banner" id="banner">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner banner">
                    <div className="carousel-item active item-bg bkg-banner">
                {/* <img className="d-block w-100 h-100" src={Banner} alt="banner"/> */}
                        <div className="carousel-content container banner-info bi-2 bi-3">
                            <div className="text-center">
                            <h2 className='h2-font-banner wt-txt-color'>Get On Road Price of your Dream Car</h2>
                            <p className="p-text wt-txt-color">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                            {/* banner content */}
                            <div className="inline-search-area isa-2 ml-auto mr-auto">
                            <div className="row row-3">
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields bnr-slt-pd" name="select-brand">
                                            <option>Select Brand</option>
                                            <option>Audi</option>
                                            <option>BMW</option>
                                            <option>Honda</option>
                                            <option>Nissan</option>
                                        </select>
                                        {/* <button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown"   aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select Brand">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Brand</div>
                                                </div> 
                                            </div>
                                        </button> */}
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields bnr-slt-pd" name="select-make">
                                            <option>Select Make</option>
                                            <option>BMW</option>
                                            <option>Honda</option>
                                            <option>Lamborghini Huracán</option>
                                            <option>Sports Car</option>
                                        </select>
                                        {/* <button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown"   aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select Make">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Make</div>
                                                </div> 
                                            </div>
                                        </button> */}
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-2" tabindex="-1">
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields bnr-slt-pd" name="select-location">
                                            <option>Select Location</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                        </select>
                                        {/* <button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown"   aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Select Location">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                <div className="filter-option-inner-inner">Select Location</div>
                                                </div> 
                                            </div>
                                        </button> */}
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-3" tabindex="-1">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields bnr-slt-pd" name="select-year">
                                            <option>Select Year</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                        </select>
                                        {/* <button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown"   aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" title="Select Year">
                                        <div className="filter-option">
                                            <div className="filter-option-inner">
                                                <div className="filter-option-inner-inner">Select Year</div>
                                            </div> 
                                        </div>
                                        </button> */}
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-4" tabindex="-1">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields bnr-slt-pd" name="select-type">
                                            <option>Select Type Of Car</option>
                                            <option>New Car</option>
                                            <option>Used Car</option>
                                        </select>
                                        {/* <button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown"  aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" title="Select Type Of Car">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Type Of Car</div>
                                                </div> 
                                            </div>
                                        </button> */}
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-5" tabindex="-1">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                    <button className="btn button-theme btn-search btn-block bnr-slt-pd global-theme-color wt-txt-color">
                                        <i className="fa fa-search"></i><strong>&nbsp;&nbsp;Find</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                            {/* banner content ends */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Find the car for your choice section */}
        <div  className="featured-car content-area slide-box-2 background-for-sec">
    <div  className="container text-center py-5">
        <div  className="main-title pb-5">
            <h1 className='h3-font-size'>Find the cars <span className='global-text-color'>of your choice</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>

        <div  className="faq-box">
            <div  className="faq-info">
                <ul  className="nav nav-tabs border-0 mb-4" id="myTab" role="tablist">
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">By Brand</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#budget" type="button" role="tab" aria-controls="budget" aria-selected="false">Budget</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#body" type="button" role="tab" aria-controls="body" aria-selected="false">Body Type</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#fuel" type="button" role="tab" aria-controls="fuel" aria-selected="false">Fuel Type</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#trasmission" type="button" role="tab" aria-controls="trasmission" aria-selected="false">Trasmission</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#seating" type="button" role="tab" aria-controls="seating" aria-selected="false">Seating Capacity</button>
                    </li>
                    <li  className="nav-item" role="presentation">
                        <button  className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#offers" type="button" role="tab" aria-controls="offers" aria-selected="false">Offers</button>
                    </li>
                </ul>
                <div  className="tab-content" id="myTabContent2">
                    <div  className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                        <div  className="row">
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand1} alt="brand-1" />
                                    <h5>Alfa Romeo</h5>
                                    <p>3 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand2} alt="brand-2"/>
                                    <h5>Audi</h5>
                                    <p>0 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand3} alt="brand-3"/>
                                    <h5>Aston Martin</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand4} alt="brand-4"/>
                                    <h5>Bugatti</h5>
                                    <p>0 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand6} alt="brand-6"/>
                                    <h5>Bentley</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand5} alt="brand-5"/>
                                    <h5>BMW</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand7} alt="brand-7"/>
                                    <h5>Chevrolet</h5>
                                    <p>3 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand8} alt="brand-8"/>
                                    <h5>Cadillac</h5>
                                    <p>1 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand9} alt="brand-9"/>
                                    <h5>Ford</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand10} alt="brand-10"/>
                                    <h5>Ferrari</h5>
                                    <p>0 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand11} alt="brand-11"/>
                                    <h5>Fiat</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand12} alt="brand-12"/>
                                    <h5>Honda</h5>
                                    <p>1 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand13} alt="brand-13"/>
                                    <h5>Jaguar</h5>
                                    <p>3 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand14} alt="brand-14"/>
                                    <h5>Land Rover</h5>
                                    <p>1 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand15} alt="brand-15"/>
                                    <h5>Lamborghini</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img className='unq-width' src={Brand16} alt="brand-16"/>
                                    <h5>Mini</h5>
                                    <p>3 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand17} alt="brand-17"/>
                                    <h5>Mercedes-Benz</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>
                            <div  className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <a href="/"  className="brand-box">
                                    <img src={Brand19} alt="brand-19"/>
                                    <h5>Nissan</h5>
                                    <p>2 Listings</p>
                                </a>
                            </div>                            
                        </div>
                    </div>
                    <div  className="tab-pane fade" id="budget" role="tabpanel" aria-labelledby="profile-tab">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis.</p>

                    </div>
                    <div  className="tab-pane fade" id="body" role="tabpanel" aria-labelledby="contact-tab">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wre eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        {/* Find the car for your choice section over */}
    </>
  )
}

export default HomePage