/** @jsx h */
import { h } from "preact"
// import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts"
import Card from "../islands/Card.tsx"

// const tips = new Map()
// tips.set("en", Tip)

export function Tip() {
    return (
        <p class="kek">
            Did you know you can make your own hygiene products? your soaps,
            shampoo, face masks and even lipsticks & deodorants! For more
            information follow this <u>
                <a href="https://www.youtube.com/?hl=IW">Youtube channel</a>
            </u>
        </p>
    )
}
export const handler: Handlers<{ tip: string }> = {
    // GET(req, ctx) {
        // const indexProps: { tip: string } = {
        //     tip: tips.get("en"),
        // }
        // return ctx.render(indexProps)
    // },
    // deno-lint-ignore no-explicit-any
    POST(req, ctx): any {
        return Response.json({ message: "got it!" })
    },
}

export default function Index(props: { data: { tip: string } }) {
    return <Card viewed={false} ><Tip /></Card>
}
