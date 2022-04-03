/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import Example from './test'

const HeroSection = () => {
  return (
    <div>
      <div
        style={{ minHeight: '750px' }}
        className="flex flex-col items-center justify-center bg-Docy-Blue dark:bg-Docy-Midnight"
      >
        <div>
          <div className="">
            <div className="shape-1 absolute top-0 left-0 hidden sm:block">
              <img
                src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap4.png"
                alt=""
              />
            </div>
            <div className="shape-2 absolute top-0 left-0  hidden sm:block">
              <img
                src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap1.png"
                alt=""
              />
            </div>
            {/* <div className="shape-3 absolute bottom-0 right-0  hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap3.png"
              alt=""
            />
          </div> */}
            {/* <div className="shape-4 absolute  top-full right-0 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap2.png"
              alt=""
            />
          </div> */}
            <div className="shape-5 absolute top-60 left-60 hidden sm:block">
              <img
                src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus1.png"
                alt=""
              />
            </div>
            <div className="shape-6 absolute top-60 left-60 hidden sm:block">
              <img
                src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus1.png"
                alt=""
              />
            </div>
            <div className="shape-7 absolute bottom-60 right-96 hidden sm:block">
              <img
                src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus2.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <h1 className="text-center font-sans font-bold text-white">
                  How can we help you?
                </h1>
                <p className="break-words pt-6 text-center text-lg font-bold text-white">
                  Search here to get answers to your questions
                </p>
              </div>
              <div>
                <div className=" py-10 px-2">
                  <div>
                    <div>
                      <div className="md:flex">
                        <div className=" p-3">
                          <div className="relative flex">
                            <div>
                              <i className="fa fa-search absolute top-5 left-5 text-gray-400"></i>
                              <input
                                type="search"
                                name=""
                                id="search"
                                className="w-full bg-white text-black md:w-96"
                              />
                            </div>
                            <div>
                              <Example />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CommunitiesCard></CommunitiesCard>
      </div>
    </div>
  )
}

export default HeroSection
