import{Link} from 'react-router-dom'
export default function Add() {
  return (
    <button className="add" >
        <Link to='/AddCoures'  className="addtext"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg> Add</Link>
    </button>
  )
}
