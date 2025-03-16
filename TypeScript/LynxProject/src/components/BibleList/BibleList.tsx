import "./BibleList.css"
import { useEffect } from "@lynx-js/react";
import { bibleBooks, books } from "../../BibleMapping.js";
import { BibleCard } from "../BibleCard/BibleCard.jsx";

const scrollStyle = {
    height: "100vh",
    width: "100vw",
}

export function BibleList() {
    useEffect(() => {}, [])

    return(
        <view className="Container">
            <scroll-view
            scroll-orientation="vertical"
            style={scrollStyle}
            >
            {books.map((book) => (
               <BibleCard {...bibleBooks[book]}></BibleCard> 
            ))}
            </scroll-view>
        </view>
    )
}