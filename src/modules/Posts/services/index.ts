import { postService } from './post.service';

export const apiMapping = {
  postService
};
export { postService };

export type APIMapping = typeof apiMapping;
