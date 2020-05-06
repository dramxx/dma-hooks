import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

const InfiniteScroll = () => {

  let infiniteScroll = useInfiniteScroll()

  const [data, setData] = useState({})

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    return response.json()
  }

  useEffect(() => {
    setData(fetchData().then(json => setData(json)).catch(errors => console.error(errors)))
  }, [])

  return (
    <Layout>
      <h1>useInfiniteScroll</h1>
      {
        data.length
          ? <table>
            <tbody>        {
              data.slice(0, infiniteScroll).map(item =>
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? "true" : "false"}</td>
                </tr>
              )
            }
            </tbody>
          </table>
          : <div>fetch error</div>
      }
      <Link to="/">index</Link>
    </Layout>
  )
}

export default InfiniteScroll
