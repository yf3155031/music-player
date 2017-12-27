/**
 * Created by liruihan on 17/12/27.
 */
import originJSONP from 'jsonp'

export default function jsonp (url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + _param(data)
  return new Promise(function (resolve, reject) {
    originJSONP(url, options, function (err, data) {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function _param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
