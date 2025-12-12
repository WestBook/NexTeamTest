import classNames from "classnames";

export interface ButtonProps {
    label: "Like" | "Dislike";
    active: boolean;
    onClick: () => void;
    initialCount?: number;
}

export default function InteractButton({ label, onClick, active, initialCount = 100 }: ButtonProps) {
    const activeClass = classNames({
        "liked": label === "Like" && active,
        "disliked": label === "Dislike" && active,
    });
    const spanClassName = classNames({
        "likes-counter": label === "Like",
        "dislikes-counter": label === "Dislike",
    });
    return (
        <button className={activeClass} onClick={onClick}>
            <p> {label} | <span className={spanClassName}>{initialCount}</span></p>
        </button>
    );
}