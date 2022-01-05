import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostsBuilder, createPost } from './async-thunk';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'posts',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {
    fetchPostsBuilder(builder);
  }
});

const extraActions = {
  ...actions,
  fetchPosts,
  fetchPostsBuilder,
  createPost
};

export * from './select-hooks';
export { extraActions as actionsPost, reducer };
