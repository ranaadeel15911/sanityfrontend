import React from 'react'
import client, { urlFor } from "../sanity/client"
import Link from 'next/link'

export default async function contact() {
  // const res = await client.fetch(`*[_type == "tutorial"]`)
  const res = await client.fetch(`*[_type == "blogs"]`)
  // const res = await client.fetch(`*[_type == "blogs" && description == "Recusandae Perferen"]`)
  const abc = res.map((item)=>{
return item.title
  })
  console.log(res)
  console.log(abc)
  return (
    <div >
      {
res.map((item)=>
{
return (
  <>
<div className='mt-3'>
  <h1> {item.title}</h1>
  <p>{item.comment}</p>
  <img width={100} height={100} src={urlFor(item.image).url()}></img>
  <br />
  <Link className='bg-black text-white p-2 ' href={`/contact/${item._id}`}>Click</Link>
</div>
  </>
  )
}
)
    }</div>
  )
}



