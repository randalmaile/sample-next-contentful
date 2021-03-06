import Link from 'next/link'
import Image from 'next/image'
import DateComponent from './date'

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) => {
  return (
    <div className='mx-4 mb-4 mt-8 z-0 lg:mx-12'>
      <div className=' bg-white rounded-md lg:flex md:flex-none'>
        <div className='flex-1'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]'>
            <a>
              <Image
                src={coverImage.url}
                alt='post image'
                width={469}
                height={263}
              />
            </a>
          </Link>
        </div>
        <div className='flex-1 px-4 pb-4'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]'>
            <a>
              <h2 className='text-brown font-mont text-2xl lg:text-4xl font-hairline antialiased mb-2'>
                {title}
              </h2>
            </a>
          </Link>
          <div className='font-mont text-lg text-black antialiased'>
            {excerpt}
          </div>
          <p className='mt-6 text-black font-mont antialiased'><DateComponent dateString={date} /></p>
        </div>
      </div>
    </div>
  )
}

export default HeroPost
