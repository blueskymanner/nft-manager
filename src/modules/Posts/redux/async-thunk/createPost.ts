import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { APIMapping } from '../../services';
import { sleep } from 'utils';

export const createPost = createAsyncThunk<any, any, ThunkAPIConfig>(
  'post/createPost',
  async (args, thunkAPI) => {
    const { postService } = get(thunkAPI, 'extra') as APIMapping;
    console.log(postService);

    const response = await postService.create(args);
    await sleep(2000);
    return response;
  }
);
