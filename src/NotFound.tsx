
import gambar from './assets/img/notfound2.png'

export const Notfound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex-row justify-center">
        <img src={gambar} alt="" className='h-96'/>
        <h1 className='text-center font-bold text-4xl text-primary'>Page Not Found</h1>
      </div>
    </div>

  )
}
