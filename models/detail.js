import HTTP from "../utils/http.js"
import apis from '../servers/api.js'
class Detail extends HTTP {
  getDetail(id) {
    return this.request({ url: `${apis.subject}/${id}` })
  }
}

export default Detail