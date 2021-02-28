import reducer, { fetchAsyncGet } from "../tweetSlice"


describe("extraReducers", () => {

  const initialState = {
    tweets: [
      {
        id: "",
        userId: "",
        content: "",
        createdAt: "",
        updateAt: "",
      },
    ]
  }
  const testState ={
    tweets: [
      {
        id: "qqq",
        userId: "aaa",
        content: "ddd",
        createdAt: "hhh",
        updateAt: "hhh",
      },
    ]
  }
  it("test reducer", () => {

    const action = {
      type: fetchAsyncGet.fulfilled.type,
      payload: testState.tweets,
    }

    const state = reducer(initialState, action)
    expect(state.tweets[0].id).toEqual(testState.tweets[0].id)
    expect(state.tweets[0].userId).toEqual(testState.tweets[0].userId)
    expect(state.tweets[0].createdAt).toEqual(testState.tweets[0].createdAt)
    expect(state.tweets[0].updateAt).toEqual(testState.tweets[0].updateAt)
  })
})
