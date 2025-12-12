import { useState } from 'react'
import { ButtonActiveState } from "./buttonType";
import InteractButton from "./interactButton";

export default function InteractPanel() {
    const [likeCount, setLikeCount] = useState<number>(100)
    const [dislikeCount, setDislikeCount] = useState<number>(25)
    const [activeState, setActiveState] = useState<ButtonActiveState>(ButtonActiveState.NONE)

    const ButtonAction = {
        [ButtonActiveState.LIKE]: setLikeCount,
        [ButtonActiveState.DISLIKE]: setDislikeCount,
        [ButtonActiveState.NONE]: () => { },
    }

    const handleToggle = (next: ButtonActiveState) => {
        // 先用當前 activeState 計算要怎麼加減
        if (activeState === next) {
            // 取消同一顆
            ButtonAction[next]((c) => Math.max(0, c - 1))
            setActiveState(ButtonActiveState.NONE)
            return
        }

        if (activeState === ButtonActiveState.NONE) {
            // 從無到選定
            ButtonAction[next]((c) => c + 1)
            setActiveState(next)
            return
        }

        // 在兩顆間切換
        ButtonAction[next]((c) => c + 1)
        ButtonAction[activeState]((c) => Math.max(0, c - 1))
        setActiveState(next)
    }
    return (
        <>
            <div className="card">
                <InteractButton
                    label="Like"
                    onClick={() => handleToggle(ButtonActiveState.LIKE)}
                    active={activeState === ButtonActiveState.LIKE}
                    initialCount={likeCount}
                />
                <InteractButton
                    label="Dislike"
                    active={activeState === ButtonActiveState.DISLIKE}
                    initialCount={dislikeCount}
                    onClick={() => handleToggle(ButtonActiveState.DISLIKE)}
                />
            </div>
        </>
    )
}