import { useEffect, useState } from "@lynx-js/react";
import "./BibleCard.css"
import type { BibleBook } from "../../BibleMapping.js";

const style = {
    "background-color": {
        default: "#ffa7a7",
        clicked: "blue"
    }
}

// props = { chapters: String, verses: String, abbr: String, name: String }
export function BibleCard(props: BibleBook) {
    const [cardColor, setCardColor] = useState(style["background-color"].default)
    useEffect(() => {}, [cardColor])

    const onTap = () => {
        cardColor === style["background-color"].default ? 
            setCardColor(style["background-color"].clicked) :
            setCardColor(style["background-color"].default);
    }

    return (
        <view className="Card" bindtap={onTap} style={{backgroundColor: cardColor}}>
            <text>
                {props.name}
            </text>
        </view>
    )
}