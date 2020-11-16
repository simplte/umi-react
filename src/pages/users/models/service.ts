import {request }  from "umi"

export const getRemoteList = async params => {
  let res = await request('http://public-api-v1.aspirantzhang.com/users', {
    method: 'get'
  })
  debugger
   return res.data
}