import './styles/Loading.css'

const Loading = () => {
return (
    <div className="container">
        <div className="cubo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="loading">
            <h1 className='text'>Waiting for location</h1>
        </div>
    </div>
) 
}

export default Loading