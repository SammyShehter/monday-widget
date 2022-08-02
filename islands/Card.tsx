/** @jsx h */
import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import { tw } from "@twind"
import { CardProps } from "../models.ts"

import { Tip } from "../routes/index.tsx";

export default function Card(props: CardProps) {
    const [viewed, setViewed] = useState(props.viewed)
    const toggleView = () => {
      const tempView = !viewed
      setViewed(tempView)
    }
    
    
    return (
            <div
                class={tw`flex justify-center items-center flex-col rounded-md p-4 overflow-hidden bg-white ${viewed ? 'hidden': ''}`}
            >
              <Tip/>
                <button
                    onClick={toggleView}
                    class={tw`mt-4 self-end inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100`}
                >
                    Got it
                </button>
            </div>
    )
}
