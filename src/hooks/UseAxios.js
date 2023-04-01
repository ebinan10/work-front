
import axios from 'axios'

const Url = '/'
export const UseAxios = axios.create({
  headers: {'Content-Type':'application/json'},
  baseURL: Url,
  withCredentials:true,
  credentials: 'include'
 });
          