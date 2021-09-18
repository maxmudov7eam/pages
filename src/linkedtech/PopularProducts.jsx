import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const PopularProducts = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
      <div className="popularProducts">
          <div className="container">
              <div className="row text-center">
                  <div className="col-12">
                      <h5 className="light">New Products</h5>
                      <h2 className="semibold">Popular Products</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                    <div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <Nav tabs className=''>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Recent arrival
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            best sellers
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            special offers
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            featured in
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                            <Row>
                                <div className="col-4 mb-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 20% off Today Only!</p>
                                            <span><img src="/assets/image/product1.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black iPhone Mouse</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 50% off Today Only!</p>
                                            <span><img src="/assets/image/product2.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 10% off Today Only!</p>
                                            <span><img src="/assets/image/product3.png" className='w-100 klava' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iOS Keyboard</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 25% off Today Only!</p>
                                            <span><img src="/assets/image/product4.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Mackbook Pro</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0">
                                        <div className="card-header bg-white p-0 border-0 h-100">
                                            <p className="light">Get up to 30% off Today Only!</p>
                                            <span><img src="/assets/image/product5.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black Headphone</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 20% off Today Only!</p>
                                            <span><img src="/assets/image/product6.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                            <TabPane tabId="2" className='   '>
                            <Row>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 25% off Today Only!</p>
                                            <span><img src="/assets/image/product4.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Mackbook Pro</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0">
                                        <div className="card-header bg-white p-0 border-0 h-100">
                                            <p className="light">Get up to 30% off Today Only!</p>
                                            <span><img src="/assets/image/product5.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black Headphone</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 20% off Today Only!</p>
                                            <span><img src="/assets/image/product6.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                            <TabPane tabId="3" className='   '>
                            <Row>
                                <div className="col-4 mb-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 50% off Today Only!</p>
                                            <span><img src="/assets/image/product2.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 10% off Today Only!</p>
                                            <span><img src="/assets/image/product3.png" className='w-100 klava' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iOS Keyboard</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                            <TabPane tabId="4" className='   '>
                            <Row>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 25% off Today Only!</p>
                                            <span><img src="/assets/image/product4.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Mackbook Pro</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0">
                                        <div className="card-header bg-white p-0 border-0 h-100">
                                            <p className="light">Get up to 30% off Today Only!</p>
                                            <span><img src="/assets/image/product5.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black Headphone</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 20% off Today Only!</p>
                                            <span><img src="/assets/image/product6.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mt-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 20% off Today Only!</p>
                                            <span><img src="/assets/image/product1.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black iPhone Mouse</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mt-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 50% off Today Only!</p>
                                            <span><img src="/assets/image/product2.png" className='w-100' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">Black iPhone Speaker</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mt-4">
                                    <div className="card border-0 p-0 h-100">
                                        <div className="card-header bg-white p-0 border-0">
                                            <p className="light">Get up to 10% off Today Only!</p>
                                            <span><img src="/assets/image/product3.png" className='w-100 klava' alt=""/></span>
                                        </div>
                                        <div className="card-body position-relative">
                                            <div className="myColors">
                                                <span><img src="/assets/icon/colors.svg" alt=""/></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between myIcons">
                                                <span className='myBtn'><img src="/assets/icon/p-karzinka.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-search.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-heard.svg" alt=""/></span>
                                                <span className='myBtn'><img src="/assets/icon/p-oborot.svg" alt=""/></span>
                                            </div>
                                            <h2 className="semibold">iOS Keyboard</h2>  

                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="semibold mr-1">$ 249.99</h3>
                                                <h4 className="light">/ <span>$ 449.99</span></h4>
                                            </div>
                                            <div className='stars'>
                                                <span><img src="/assets/icon/big-gold.svg" alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>

                            <h6 className="regular myBtn">view all <span className='ml-2'><img src="/assets/icon/right.svg" alt=""/></span></h6>
                        
                        </TabContent>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default PopularProducts;

