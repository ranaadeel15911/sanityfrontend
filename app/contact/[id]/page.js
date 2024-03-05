import React from 'react'
import client, { urlFor } from '../../sanity/client'

const page =async (context) => {
    const id = context.params.id
    console.log(id)
    const res = await client.fetch(`*[_type == "blogs" && _id=="${id}"]`)
console.log(res)
  return (
    <div>{
        res.map((item)=>
        {
        return (
          <>
          <h1> {item.title}</h1>
          <p>{item.comment}</p>
          <img width={100} height={100} src={urlFor(item.image).url()}></img>
          {/* <Link href={`/contact/${item._id}`}>Click</Link> */}
          </>
          )
        }
        )
            }</div>
  )
}

export default page