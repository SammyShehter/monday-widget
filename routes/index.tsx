/** @jsx h */
import { h } from "preact"
// import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts"
import Card from "../islands/Card.tsx"
import { tips, todaysTip } from "../utils/tips.ts"

export const handler: Handlers<{ tip: string }> = {
    GET(req, ctx) {
        const indexProps: { tip: string } = {
            tip: tips.get(todaysTip) as string,
        }
        return ctx.render(indexProps)
    },
    // deno-lint-ignore no-explicit-any
    POST(req, ctx): any {
        return Response.json({ message: "got it!" })
    },
}

export default function Index(props: { data: { tip: string } }) {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css?family=Assistant:wght@600&display=swap"
                rel="stylesheet"
            />
            <Card viewed={false} tip={props.data.tip}></Card>
        </div>
    )
}
