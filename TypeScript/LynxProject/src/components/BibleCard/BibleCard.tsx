import { useEffect, useState } from "@lynx-js/react";
import "./BibleCard.css"
import { bibleBooks, type BibleBook } from "../../BibleMapping.js";
import { useNavigate } from "react-router";

const style = {
    "background-color": {
        default: "#ffa7a7",
        clicked: "blue"
    }
}

// key = "gen", "exo", etc...
export function BibleCard(props: { key: string}) {
    const nav = useNavigate();
    const [cardColor, setCardColor] = useState(style["background-color"].default)

    useEffect(() => {}, [cardColor])

    const book: BibleBook = bibleBooks[props.key]

    const onTap = () => {
        cardColor === style["background-color"].default ? 
            setCardColor(style["background-color"].clicked) :
            setCardColor(style["background-color"].default);
        
        nav('books/' + props.key);
    }

    return (
        <view className="Card" bindtap={onTap} style={{backgroundColor: cardColor}}>
            <text>
                {book.name}
            </text>
        </view>
    )
}