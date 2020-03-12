import HTTP from "../utils/http.js"
import apis from '../servers/api.js'
class Panel extends HTTP {
  getHotDetail(params = {}) {
    let result = Object.assign({ count: 10, start: 0 }, params)    
    return this.request({ url: apis.in_theaters, data: result})
  }
  getUncomingDetail(params = {}) {
    let result = Object.assign({ count: 10, start: 0 }, params) 
    return this.request({ url: apis.coming_soon, data: result })
  }
}

export default Panel