import { useTheme } from 'next-themes'

export default function Article() {
  const { theme } = useTheme()
  return (
    <>
      <div className='relative mb-2'>
        <div
          className='absolute w-full h-full top-0 left-0 right-0 bottom-0 rounded-lg'
          style={{
            background: `url('https://framerusercontent.com/images/aonjUSd8VqRYZTj9UMIVdwTUAcs.jpg')`,
            opacity: 0.1
          }}
        />
        <div className='rounded-lg h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left hover:bg-white p-2 duration-300'>
          <img
            alt='team'
            className='flex-shrink-0 rounded-lg md:w-36 md:h-24 object-cover object-center sm:mb-0 mb-4'
            src='https://framerusercontent.com/images/aonjUSd8VqRYZTj9UMIVdwTUAcs.jpg'
          />
          <div className='w-full flex-grow sm:pl-6 h-24 overflow-hidden relative'>
            <h2 className='title-font text-sm text-lightText dark:text-darkText font-bold'>出发！</h2>
            {/* <h3 className='text-gray-500 mb-3'>UI Developer</h3> */}
            <p className='my-2 text-xs text-lightText dark:text-darkText overflow-ellipsis line-clamp-2 leading-5'>
              🔥 ✨✨ ✨In exploration, #DAO is the opportunity to discover, gather and create courage. 🤔
            </p>
            <div className={`flex justify-between text-lightIcon dark:text-darkIcon whitespace-nowrap mt-3 text-xs`}>
              <a className='flex items-center text-xs'>
                <i className='iconfont icon-view' />
                <span className='ml-1'>12</span>
              </a>
              <a className='flex items-center'>
                <i className='iconfont icon-comment' />
                <span className='ml-1'>12</span>
              </a>
              <a className='flex items-center text-xs'>
                <i className='iconfont icon-like' />
                <span className='ml-1'>12</span>
              </a>
              <a className='flex items-center text-xs'>
                <i className='iconfont icon-category' />
                <span className='ml-1'>前端</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
