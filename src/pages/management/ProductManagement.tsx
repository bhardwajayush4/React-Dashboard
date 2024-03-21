import { useState, ChangeEvent, FormEvent } from 'react'
import AdminSidebar from '../../components/AdminSidebar'


const url = 'https://source.unsplash.com/random/1920x1080/?wallpaper,landscape'

const ProductManagement = () => {
  const [name, setName] = useState<string>('Puma Shoes')
  const [price, setPrice] = useState<number>(2000)
  const [stock, setStock] = useState<number>(10)
  const [photo, setPhoto] = useState<string>(url)

  const [nameUpdate, setNameUpdate] = useState<string>(name)
  const [priceUpdate, setPriceUpdate] = useState<number>(price)
  const [stockUpdate, setStockUpdate] = useState<number>(stock)
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo)

  const ChangeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const file: File | undefined = e.target.files?.[0]

    const reader: FileReader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUpdate(reader.result)
        }
      }
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(nameUpdate)
    setPrice(priceUpdate)
    setStock(stockUpdate)
    setPhoto(photoUpdate)
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>Id-14878978</strong>
          <img src={photo} alt='Product-Image' />
          <p>{name}</p>
          {stock > 0 ? (
            <span className='green'>{stock} Avalaible</span>) :
            <span className='red'>Not-Avalaible</span>}

          <h3>${price}</h3>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input type="text" required placeholder='Name' value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
            </div>
            <div>
              <label>Price</label>
              <input type="number" required placeholder='Price' value={priceUpdate} onChange={(e) => setPriceUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label>Stock</label>
              <input type="number" required placeholder='Stock' value={stockUpdate} onChange={(e) => setStockUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label>photo</label>
              <input type="file" onChange={ChangeImageHandler} />
            </div>

            {photoUpdate && <img src={photoUpdate} alt='New Image' />}

            <button type='submit'>Update</button>
          </form>
        </article>
      </ main>
    </div >
  )
}
export default ProductManagement
