/** @jsx h */
import { h } from "preact"
import { useState } from "preact/hooks"
import { tw } from "@twind"
import { CardProps } from "../models.ts"

export default function Card(props: CardProps) {
    const [viewed, setViewed] = useState(props.viewed)
    const [tip, setTip] = useState(props.tip)
    const toggleView = () => setViewed(!viewed)

    return (
        <div
            class={tw`flex justify-center items-center flex-col justify-evenly p-4 overflow-hidden bg-black text-white h-screen ${
                viewed ? "hidden" : ""
            }`}
        >
            <div
                class="content"
                style={{ "font-family": "Assistant", "font-size": "22px", }}
                dangerouslySetInnerHTML={{ __html: tip }}
            />
            {/* <button
                onClick={toggleView}
                class={tw`mt-4 self-end inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100`}
            >
                Got it
            </button> */}
            <p>You can help us save the world. <u><a href="mailto:zeroheromonday@gmail.com">send your tips!</a></u></p>
        </div>
    )
}
