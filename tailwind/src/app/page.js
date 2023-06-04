import React from 'react'

const Home = () => {
  return (
    <div>

      {/* colors */}
      <h1 className="text-2xl text-green-500 bg-slate-300 border-y-2 border-red-500">
        Hello world!
      </h1>
      <h1 className="text-2xl text-newBlue-200 border-y-2 border-newBlue-100">
        Hello world!
      </h1>



      {/* customization */}
      <h1 className="text-sm lg:text-2xl  border-y-2 border-newBlue-100">  {/*lg:text-2xl means on large scree have this text size otherwise another text size */}
        Hello world!
      </h1>
      <h1 className="text-2xl  border-y-2 border-newBlue-100 mb-1 mt-1">  {/*mb-1 means margin-bottom 1 */}
        Hello world!
      </h1>
      <h1 className="text-2xl  border-y-2 border-newBlue-100">
        Hello world!
      </h1>


      {/* Typography */}  {/* Regular styling of h1 h2 p is not done in tailwind */}
      <h1 className='text-3xl mt-3'>Title 1</h1>
      <h2 className='text-2xl lowercase'>Lowercase Title 2</h2>
      <h2 className='text-xl underline decoration-red-400 decoration-dotted underline-offset-4 leading-loose'>decoration-dotted</h2>
      <p className='text-lg italic'>Italic</p>
      <p className='text-base text-decoration-line: line-through'>text-decoration-line: line-through</p> {/* text decoration */}
      <p className='text-sm tracking-widest'>letter spacing</p> {/* letter spacing*/}
      <p className='text-xs note'>para 3</p>
      {/* overflow handling */}
      <p className='truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, culpa quo aliquid libero quos, debitis neque ipsum molestiae aperiam id atque beatae laborum unde quia delectus, deleniti quam facilis aspernatur! Laudantium quidem ipsa ut vel iure iusto quibusdam similique! Impedit.</p>
      <p className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, culpa quo aliquid libero quos, debitis neque ipsum molestiae aperiam id atque beatae laborum unde quia delectus, deleniti quam facilis aspernatur! Laudantium quidem ipsa ut vel iure iusto quibusdam similique! Impedit.</p>
      {/* text ellipsis is used to truncate a bigger word instead of paragraph */}
      {/* text clip is used to cut a bigger word instead of ... */}



      {/* Spaces //margin padding and others */}
      <h1 className="text-sm lg:text-2xl  border-y-2 border-newBlue-100 p-2 pt-4">Padding</h1>
      <h1 className="text-sm lg:text-2xl  border-y-2 border-newBlue-100 m-2 ml-4 my-6">Margin</h1>  {/* x,y means as per axis l,t,b,r means direction */}

      {/* spaces */}
      <div className='flex w-full space-x-4' >
        <div className="w-1/5 h-16 bg-orange-600"></div>
        <div className="w-4/5 h-6 bg-green-500"></div>
      </div>

      {/* Flex box */}
      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-col items-start md:flex-row justify-evenly">
          <div className="basis-1/4 bg-red-500">Side bar</div>
          <div className='basis-3/4 bg-green-400'> <h1>Main content</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum tempore accusamus eligendi distinctio quos? Quos mollitia architecto labore excepturi temporibus assumenda sequi vitae officiis id sapiente eaque accusamus quas commodi vero esse earum, incidunt quod tempore quaerat doloribus quia?</div>  {/*basis is similar to flex grow  */}
        </div>
      </div>

      {/* Grids */}
      <div class="grid grid-cols-4 gap-4">  {/* in each row we have only 4 cols as it is grid-cols 4 */}
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>01</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>02</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg col-span-2'>03</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>04</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>05</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>06</div>
        <div className='bg-red-500 mx-2 my-2 p-4 rounded-lg'>07</div>
      </div>
    </div>

  )
}

export default Home
