
import './banner.css'
const Banner = () => {
    return (
        <div>
            <div className="background h-[70vh] w-full flex justify-center items-center mt-9">
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className='text-base text-[#fff] my-3 font-normal'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p> 
                    <div className=''>
                        <button className='bg-[#0be58a] rounded-full py-4 px-5 mr-4'>Explore Now</button>
                        <button className='py-4 border rounded-full px-5'>Our Feedback</button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Banner;