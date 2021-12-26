import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

import './ListPhoto.css'
import { useState, useEffect } from 'react'

const ListPhoto = (props) => {
  const [listPhoto, setListPhoto] = useState([])
  const [loading, setLoading] = useState(true)
  const searched = props.searched

  useEffect(async () => {
    if (searched == '') {
      let res = await axios.get('https://api.unsplash.com/photos?page=2&client_id=KzZi9AOl79gAuzNp33fHtcCyMRDFfxvnVKj3ixM-maQ')
      let data = res && res.data ? res.data : [];
      setListPhoto(data)

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 400)

    } else {
      let res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searched}&client_id=KzZi9AOl79gAuzNp33fHtcCyMRDFfxvnVKj3ixM-maQ`)
      let data = res && res.data.results ? res.data.results : [];
      setListPhoto(data)

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 400)
    }
  }, [searched]);

  return (
    <div>
      {console.log(loading)}
      {loading ?
        (<ReactBootStrap.Spinner animation="border" />) :
        (listPhoto && listPhoto.length > 0 && listPhoto.map(item => {
          return (
            < img src={item.urls.small} alt="" className='image' key={item.id} />
          )
        }))
      }
    </div>
  )
}

export default ListPhoto