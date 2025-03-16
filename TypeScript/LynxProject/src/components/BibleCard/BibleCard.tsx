import { useEffect } from "@lynx-js/react";
import "./BibleCard.css"

// props = { chapters: String, verses: String, abbr: String, name: String }
export function BibleCard(props) {
    useEffect(() => {}, [])

    return (
        <view className="Card">
            <text>
                {props.name}
            </text>
        </view>
    )
}