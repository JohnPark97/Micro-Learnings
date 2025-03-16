import './Card.css'

export type CardType = {
    name: string
    description: string
}

export function Card(props: CardType) {
    return (
        <view>
            <view className='Card'>
                <view className='Card-header'>
                    <text>{props.name}</text>
                </view>
                <view className='Card-content'>
                    <text>{props.description}</text>
                </view>
            </view>
        </view>
    )
}