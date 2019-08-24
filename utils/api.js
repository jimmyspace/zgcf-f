const BASE_URL = "http://localhost:9000";
// const BASE_URL = "https://www.zhugecunfu.club";

const post = function() {
  const url = BASE_URL + '/api/post';
  const data = {
    username: 'jimmy',
    user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJnfLTEOt9lGGWoaicFyf8Eu9leTHb9AGNsbKQTnMMicUECicOpNqMiapkgEOgtPVjYMTLUPoBiadQuo5Q/132",
    content: 'hello world',
    imgs: []
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject()
      },
      complete() {

      }
    })
  })
}

const uploadFile = function(){
  const url = BASE_URL + '/api/post/upload_file'
  return new Promise((resolve, reject)=>{
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: url, //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          success(res) {
            const data = res.data
          }
        })
      }
    })
  })
}

module.exports = {
  post: post,
  uploadFile: uploadFile
}