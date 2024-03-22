import React from "react";
import classNames from "classnames";

interface Props {
    icon: React.ReactNode;
    backgorundColor?: "WHITE" | "GRAY";
}

export default function BoxIcon({ icon, backgorundColor }: Props) {
    const bgColor = backgorundColor
        ? backgorundColor === "WHITE"
            ? "bg-white text-black"
            : "bg-[#222222] text-white"
        : "bg-transparent";

    return (
        <div
            className={classNames(
                "w-[40px] h-[40px] rounded-md flex justify-center items-center",
                bgColor
            )}
        >
            {icon}
        </div>
    );
}
