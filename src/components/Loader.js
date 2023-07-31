import spinner from './Spinner-1s-200px.gif'

const Loader = () => {
  return (
    <div className='loader'>
          <img src={spinner} alt='loading' />
          <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
