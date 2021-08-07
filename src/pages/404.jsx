import React from "react"
import { Link } from "gatsby"

const NotFound = () => {
    return (
        <div>
        <p>アクセスしたページは存在しません。</p>
        <Link to="/">TOPへ</Link>
        </div>
    )
}

export default NotFound