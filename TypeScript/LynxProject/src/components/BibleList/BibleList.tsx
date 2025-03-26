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
            <list
                list-type="flow"
                scroll-orientation="vertical"
                span-count={2}
                style={scrollStyle}
            >
            {books.map((book, index) => (
                <list-item item-key={"" + index}>
                    <BibleCard { ...{ key: book }}></BibleCard> 
                </list-item>
            ))}
            </list>
        </view>
    )
}