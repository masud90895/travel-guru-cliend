import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';

const Blog = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <>
        {
            user?.emailVerified ? <div className="container mx-auto px-4">
            <div className="pt-14 xl:px-0 px-4">
            <h1 className="text-5xl text-center f-m-w text-[#F9A51A] font-bold pt-0 mb-20">Our Blogs</h1>
                <div className="w-full lg:flex">
                    <div className="lg:w-1/2">
                        <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png" className="w-full" />
                        <div className="mt-8 lg:mb-0 mb-8">
                            <h1 className="f-m-m text-2xl font-semibold leading-7">Beautiful Italy, Travel Blog</h1>
                            <p className="text-base f-m-m leading-loose mt-2">Italy is the country that captures my heart every time I visit. It is one of the main inspirations behind this travel blog.
                            <br />

From its vibrant cities to the gorgeous Italian lakes and coast, the landscapes will get you first. And then there’s the food and culture. There is truly something to enchant everyone.</p>
                            <div className="mt-6">
                                <a   >
                                    <p className="text-[#F9A51A] underline text-base font-semibold f-m-m">Read More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:ml-8">
                        <div className="lg:flex items-start mb-8">
                            <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png" className="w-full" />
                            <div className="lg:ml-6">
                                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">A Broken Backpack</h1>
                                <p className="text-base f-m-m leading-loose mt-2">Melissa Giroux, from Quebec, Canada, is a "random backpacker" and the brains behind the well-known bilingual travel blog, She shares her travel adventures both in English and French and has been on the road since 2014 after leaving everything behind. Melissa has travelled across Europe four times and has been to America, Australia, Japan and Mexico.</p>
                                <div className="mt-4">
                                    <a   >
                                        <p className="text-[#F9A51A] underline text-base font-semibold f-m-m">Read More</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex items-start mb-8">
                            <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png" className="w-full" />
                            <div className="lg:ml-6">
                                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">My life’s a Movie</h1>
                                <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="mt-4">
                                    <a   >
                                        <p className="text-[#F9A51A] underline text-base font-semibold f-m-m">Read More</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex items-start mb-8">
                            <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png" className="w-full" />
                            <div className="lg:ml-6">
                                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">Lilii’s Travel Plans</h1>
                                <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="mt-4">
                                    <a   >
                                        <p className="text-[#F9A51A] underline text-base font-semibold f-m-m">Read More</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-16 w-full">
                <button className=" hover:bg-gray-200 border border-[#F9A51A] border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-[#F9A51A] focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">Browse More</button>
            </div>
            <div />
        </div> : <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="  https://i.ibb.co/Pj4hngp/3828537.jpg" alt="" />
                <img className="hidden md:block lg:hidden" src="  https://i.ibb.co/Pj4hngp/3828537.jpg" alt="" />
                <img className="md:hidden" src="  https://i.ibb.co/Pj4hngp/3828537.jpg" alt="" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">OOPS! Email Not Verified</h1>
                <p className="py-4 text-base text-gray-800 text-2xl">Please Verify Your Email.</p>
                <p className="py-2 text-base text-gray-800 text-2xl">Verification Link Has Been Sent to Your Email Address</p>
                <Link to='/'>
                <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 text-white bg-[#F9A51A] hover:bg-white hover:border-2 hover:border-[#F9A51A] hover:text-[#F9A51A] focus:outline-none focus:ring-2 focus:ring-[#F9A51A] focus:ring-opacity-50">Go back to Homepage</button></Link>
            </div>
        </div>
        }
    </>
    );
};

export default Blog;