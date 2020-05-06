
// start - rows to be displayed initially
// pace = rows to be added
// call let infiniteScroll = useInfiniteScroll(); wherever imported
// slice(0, infiniteScroll) data object prior map

import { useState } from "react"

export const useInfiniteScroll = (start = 30, pace = 10) => {

  const [limit, setLimit] = useState(start)

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit(limit + pace)
    }
  }
  return limit
}

