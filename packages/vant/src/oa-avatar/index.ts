import { withInstall } from '../utils';
import _OaAvatar from './OaAvatar';

export const OaAvatar = withInstall(_OaAvatar);
export default OaAvatar;
declare module 'vue' {
  export interface GlobalComponents {
    VanOaAvatar: typeof OaAvatar;
  }
}
