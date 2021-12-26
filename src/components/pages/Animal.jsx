import { useState, useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

const Animal = () => {
  const searched = 'Animal'
  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    let res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searched}&client_id=KzZi9AOl79gAuzNp33fHtcCyMRDFfxvnVKj3ixM-maQ`)
    let data = res && res.data.results ? res.data.results : []
    setPhoto(data)

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [])
  return (
    <div>
      {loading ?
        (<ReactBootStrap.Spinner animation="border" />) :
        photo && photo.length > 0 && photo.map((item) => {
          return (
            <img
              src={item.urls.small}
              alt="" className="img"
              key={item.id}
              style={{ 'margin': '5px' }}
            />
          )
        })}
    </div>
  )
}

export default Animal