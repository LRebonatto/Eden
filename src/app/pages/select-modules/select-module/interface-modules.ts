import { AnimationItem } from "lottie-web";
import { AnimationOptions } from "ngx-lottie";

export interface IModules {
  active: boolean;
  animation?: AnimationItem;
  branch_id: string;
  created_at?: Date;
  description: string;
  id?: string;
  module_img_base64: string;
  module_img_path: string;
  name: string;
  order_number: number;
  title: string;
  updated_at?: Date;
  user_active: number;
  options?: AnimationOptions;
}

