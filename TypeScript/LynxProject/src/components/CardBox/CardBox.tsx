import './CardBox.css'
import { Card } from '../Card/Card.jsx'
import type { CardType } from '../Card/Card.jsx'

const exampleCardData: CardType[] = [
    { name: "Card 1", description: "This is the first card."},
    { name: "Card 2", description: "This is the second card."},
    { name: "Card 3", description: "This is the last card."}
]

export function CardBox() {
    return (
        <view className='CardContainer'>
            <list list-type='waterfall'>
                {exampleCardData.map((card: CardType, index: number) => (
                    <list-item item-key={"" + index} key={"" + index}>
                        <Card {...card}>
                        </Card>
                    </list-item>
                ))}
            </list>
        </view>
    )
}