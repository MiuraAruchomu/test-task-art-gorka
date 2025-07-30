export interface ISomeCustomSwiperSlide {
  imgPath: string;
  title: string;
  description: string;
  linkName: string;
  linkPath: string;
}

export interface ISomeCustomSwiperProps {
  config: ISomeCustomSwiperSlide[];
}
