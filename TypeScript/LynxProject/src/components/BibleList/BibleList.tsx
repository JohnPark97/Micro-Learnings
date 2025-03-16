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
            {Array.from({ length: 300 }).map((item, index) => <BibleCard {...bibleBooks[books[index]]}></BibleCard>)}
            </scroll-view>
        </view>
    )
}