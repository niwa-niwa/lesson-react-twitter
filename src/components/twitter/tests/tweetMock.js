import { rest } from "msw"
import { setupServer } from "msw/node"
import { BASE_URL, ENDPOINT } from "../tweetSlice"


const handlers = [
  rest.get(BASE_URL + ENDPOINT, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "f2d3d301-3b55-4cd2-9326-00e4aaaaaabf",
          userId: "sHAh8LFuTqTpmOPU77erhXaAf0s2",
          content: "This is a mock message",
          createdAt: "2021-02-21 17:16:27",
          updateAt: "2021-02-21 17:16:27",
        },
      ])
    )
  }),
  rest.post(BASE_URL + ENDPOINT, (req, res, ctx) => {
    // console.log(req)
    return res(
      ctx.status(201),
      ctx.json({
        id: '92a4651b-cccb-40a1-9a65-0d582eac8579',
        userId: "sHAh8LFuTqTpmOPU77erhXaAf0s2",
        content: 'test tweet to me',
        createdAt: '2021-02-27 22:40:38',
        updateAt: '2021-02-27 22:40:38'
      })
    )
  }),
]

export default setupServer(...handlers)