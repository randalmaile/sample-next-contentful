import Image from 'next/image'

const UpperHeroBar = () => {
  return (
    <div className='pt-12 relative xs:h-24 lg:h-40' id='upper-hero-bar'>
      <h2 className='absolute bottom-0 left-0 z-10'>Sharp Health News</h2>
      <Image
        className='z-0'
        src='/newsroom.jpg'
        alt='Sharp Newsroom'
        height={140}
        width={1263}
        layout='responsive'
      />
    </div>
  )
}

export default UpperHeroBar
