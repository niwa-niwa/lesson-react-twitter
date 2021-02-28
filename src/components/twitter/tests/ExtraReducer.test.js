import reducer, { fetchAsyncGet, fetchAsyncPost, fetchAsyncDelete } from "../tweetSlice"


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
        id: "4cd2",
        userId: "aaa",
        content: "ddd",
        createdAt: "hhh",
        updateAt: "hhh",
      },
    ]
  }
  it("test reducer get tweet", () => {
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


  it("post Tweet", async () => {

    const post_tweet = {
      id: "zzzzz",
      userId: "aaa",
      content: "ddd",
      createdAt: "hhh",
      updateAt: "hhh",
    }
  
    const action = {
      type: fetchAsyncPost.fulfilled.type,
      payload: {...post_tweet}
    }
    const state = await reducer(testState,action)
    expect(state.tweets[0].id).toEqual(post_tweet.id)
    expect(state.tweets[0].userId).toEqual(post_tweet.userId)
    expect(state.tweets[0].createdAt).toEqual(post_tweet.createdAt)
    expect(state.tweets[0].updateAt).toEqual(post_tweet.updateAt)
  })

  it("delete a Tweet ", ()=>{
    const action = {
      type:fetchAsyncDelete.fulfilled.type,
      payload: "4cd2"
    }
    const state = reducer(testState, action)
    expect(state.tweets).toEqual([])
  })
})
