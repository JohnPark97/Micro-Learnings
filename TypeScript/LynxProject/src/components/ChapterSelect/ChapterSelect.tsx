import { useEffect } from "@lynx-js/react";
import { bibleBooks, books, type BibleBook } from "../../BibleMapping.js";
import { useParams } from "react-router";

export function ChapterSelect() {
    useEffect(() => {
    }, [])

    const { key } = useParams();

    return (
        <view>
            <list 
                list-type="flow"
                span-count={5}
                scroll-orientation="vertical"
            >
                {Array.from({ length: 3 }).map((_item, index) =>(
                    <list-item item-key={"" + index}>
                        <text>
                            {"asdfasdfaindex"}
                        </text>
                    </list-item>
                ))}
            </list>
        </view>
    )
}