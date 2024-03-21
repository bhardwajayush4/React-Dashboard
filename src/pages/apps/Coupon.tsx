import AdminSidebar from '../../components/AdminSidebar'
import { FormEvent, useState } from 'react'

const Coupon = () => {
  const [size, setSize] = useState<number>(8)
  const [prefix, setPrefix] = useState<string>('')
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [coupon, setCoupon] = useState<string>("")


  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const allNumbers = "1234567890";
  const allSymbols = "!@#$%^&*()_+";


  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon)
    setIsCopied(true)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!includeNumbers && !includeCharacters && !includeSymbols) {
      return alert('Please select atleast one')
    }

    let result: string = prefix || ""

    const loopLength: number = size - result.length

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = '';

      if (includeNumbers) {
        entireString += allNumbers
      }
      if (includeCharacters) {
        entireString += allLetters
      }
      if (includeNumbers) {
        entireString += allNumbers
      }
      if (includeSymbols) {
        entireString += allSymbols
      }

      const randomNumber: number = ~~(Math.random() * entireString.length)

      result += entireString[randomNumber]
    }
    setCoupon(result)
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className='coupon-form' onSubmit={submitHandler}>
            <input
              type="text"
              placeholder='Type to text'
              value={prefix}
              maxLength={size}
              onChange={(e) => setPrefix(e.target.value)}
            />

            <input
              type="number"
              value={size}
              min={8}
              maxLength={25}
              onChange={(e) => setSize(Number(e.target.value))}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(prev => !prev)}
              />
              <span>Numbers</span>

              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters(prev => !prev)}
              />
              <span>Characters</span>

              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(prev => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type='submit'>Generate</button>
          </form>

          {coupon && <code> {coupon}{' '}
            <span onClick={() => copyText(coupon)}>{isCopied ? 'Copied' : 'Copy'}</span>
          </code>}
        </section>
      </main>
    </div>
  )
}

export default Coupon