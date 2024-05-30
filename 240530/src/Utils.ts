export const makeImagePath = (id: string, format?: string) => {
  //여기서 format은 필수값이 아니기 때문에 필수값인 id보다 타입정의가 뒤에 되어야한다.
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};
