import React from "react"
import { FaComment } from "react-icons/fa"
import { MdKeyboardArrowUp } from "react-icons/md"
import "./card.scss"
import { TSuggestion } from "../../types/type"
import Chips from "../Chips"

const Card = (data: TSuggestion) => {
  return (
    <div className="card__main">
      <div className="content">
        <aside>
          <div className="upvote">
            <MdKeyboardArrowUp />
            <p>{data.upvote}</p>
          </div>
          <div className="suggestion">
            <h4>{data.title}</h4>
            <p>{data.lead}</p>
          </div>
        </aside>
        <div className="comments">
          <FaComment />
          <p>{data.comments}</p>
        </div>
      </div>
      <div className="footer">
        <Chips text={data.tag} />
      </div>
    </div>
  )
}

export default Card
