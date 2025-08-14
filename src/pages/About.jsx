import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eum sit cupiditate velit corrupti natus tempore dolor quisquam perferendis? Sunt temporibus numquam maiores officia perferendis? Est alias pariatur nemo mollitia.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda molestiae, facere aut quo quae fuga, enim vel officia magnam quisquam amet. Necessitatibus hic quam dolores omnis sint labore alias placeat?</p>
        <b>Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt necessitatibus ipsum recusandae inventore dolor veniam expedita voluptatem deleniti eligendi nesciunt rem aliquam consectetur corrupti voluptate maiores vel, cumque nemo?</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fuga quisquam perspiciatis voluptatibus.</p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fuga quisquam perspiciatis voluptatibus.</p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Execptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fuga quisquam perspiciatis voluptatibus.</p>
        </div>
      </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About
