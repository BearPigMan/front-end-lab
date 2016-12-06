import {getBooks} from "./api";
import {failure, success} from './ui'

const onGetBooks = ()=>{
  getBooks()
  .then(success)
  .catch(failure)
}

const addHandlers = ()=>{
  $('input').on('click', onGetBooks);
}


export {addHandlers}
