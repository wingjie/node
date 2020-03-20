let input = [
  { "id": "17", "caption": "颜色", "types": ["黑", "棕"] },
  { "id": "23", "caption": "材质", "types": ["牛皮"] },
  { "id": "24", "caption": "尺码", "types": ["40", "41", "42"] }
]
// let output = [
//   { "17": "黑", "23": "牛皮", "24": "40" },
//   { "17": "黑", "23": "牛皮", "24": "41" },
//   { "17": "黑", "23": "牛皮", "24": "42" },
//   { "17": "棕", "23": "牛皮", "24": "40" },
//   { "17": "棕", "23": "牛皮", "24": "41" },
//   { "17": "棕", "23": "牛皮", "24": "42" }
// ]

// const trans = input => {
//   return input.reduce((ret, outterItem) => {
//     if (!ret.length) {
//       ret = outterItem.types.map(type => {return { [outterItem.id]: type }})
//       return ret
//     }
//     console.log(ret)
//     let newResult = []
//     outterItem.types.map(type => {
//       console.log(ret)
//       newResult = newResult.concat(ret.map(innerItem => {
//         return {
//           ...innerItem,
//           [outterItem.id]: type
//         }
//       }))
//     })
//     return newResult
//   }, [])
// }
function fn(input) {
  let arr = []
  for(let i = 0; i<input.length; i++) {
    console.log(input)
    if(i === 0) {
      arr =arr.concat(input[i].types.map(val =>{
        return {[input[i].id] : val}
      }))
    }else {
      input[i]['types'].forEach(element => {
        console.log(i)
        arr = arr.concat(arr.map(val =>{
            return {...val, [input[i].id]:element}
          }))
        });
    
    }
}
console.log(arr)

}
fn(input)
// console.log(trans(input))