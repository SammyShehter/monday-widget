/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps, } from "$fresh/server.ts"
import {
  MongoClient, 
  ObjectId
} from "$mongo"
import Counter from "../islands/Counter.tsx";

interface TipsSchema {
  _id: ObjectId;
  text: string
}


const client = new MongoClient();

// Connect using srv url
try {
  await client.connect(
    "mongodb+srv://<user>:<password>@<mongourl>/?authMechanism=SCRAM-SHA-1",
  );
  const db = client.database("ZeroHero")
  const tips = db.collection<TipsSchema>("Tips")
  console.log("mongo connected");
  const data = await tips.findOne({ _id: new ObjectId("62e80fb181aef445285a70f8") });
  console.log(data);
  

} catch (error) {
  console.log(error.message);
  
}


const tips = new Map()

tips.set("en", <p class='kek'>Did you know you can make your own hygiene products? your soaps, shampoo, face masks and even lipsticks & deodorants! For more information follow this <u><a href="https://www.youtube.com/?hl=IW">Youtube channel</a></u>.</p>)


export const handler: Handlers<{tip: string}> = {
  // GET(req, ctx) {
  //     const indexProps: {tip: string} = {
  //         tip: tips.get("en")
  //     }
  //     return ctx.render(indexProps)
  // },
  // deno-lint-ignore no-explicit-any
  POST(req, ctx): any {
    return Response.json({message: "got it!"});
  }
}

export default function Index() {
  const tip = tips.get("en")

  // function updateServer() {
  //   fetch('http://localhost:8000/', {
  //     method: "POST",
  //     body: JSON.stringify({userId: "1"})
  //   })
  // }

  return (
    <div class={tw`flex justify-center items-center`}>
      <div class={tw`flex justify-center items-center flex-col rounded-md p-4 mx-4 max-w-sm bg-white shadow-xl my-24 overflow-hidden`}>
          {tip}
          {/* <form > */}
          <button onClick={() => {console.log('clicked')}} class={tw`mt-4 self-end inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100`}>Got it</button>
          {/* </form> */}
          
      </div>
    </div>

  );
}


// function Card() {
//   async function getTip() {
//       return await fetch("http://localhost:6000/gettip")
//   }

  // async function userSawTip() {
  //     axios.post("/giveTip", {
  //         userId: 1,
  //     })
  // }

//   return (
//       <>
//       <p>"x"</p>
//       </>
//   )
// }

// function App() {
//   return (
//       <div className="App">
//           <Card/>
//       </div>
//   )
// }