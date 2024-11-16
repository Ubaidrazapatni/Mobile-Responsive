function FeaturedCard() {
    return (

        <div className="flex lg:flex-row flex-col justify-around mt-12 ">

            <div className="md:w-5/12 w-full mb-20 pl-[100px] pt-6">

                <img src="/product 1.jfif" alt="Product 1" width={300} height={300} />

                <p className="text-center pt-10 font-bold text-xl pr-16">PKR 18,000</p>

                <div className="flex justify-center items-center my-3 pr-12">

                    <button className="px-10 py-3 bg-blue-600 text-white rounded-md"> Order Now </button>

                </div>

            </div>

            <div className="md:w-6/12 w-full mt-6 pl-16">

                <img src="/product 2.jfif" alt="Product 2" width={300} height={300} />

                <p className="text-center pt-10 font-bold text-xl pr-[80px]">PKR 31,000</p>

                <div className="flex justify-center items-center my-3 pr-[70px]">

                    <button className="px-10 py-3 bg-blue-600 text-white rounded-md"> Order Now </button>

                </div>



            </div>

            <div className="md:w-6/12 w-full mt-6 pl-9">

                <img src="/product (3).jfif" alt="Product 3" width={300} height={300} />

                <p className="text-center pt-10 font-bold text-xl pr-[100px]">PKR 26,000</p>

                <div className="flex justify-center items-center my-3 pr-[90px]">

                    <button className="px-10 py-3 bg-blue-600 text-white rounded-md"> Order Now </button>

                </div>


            </div>


        </div>



    )




}

export default FeaturedCard