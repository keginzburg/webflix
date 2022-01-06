export const filterActionVideos = (state) => {
  let actionVideos = Object.values(state.entities.videos);
  return actionVideos.filter(video => video["genre"]["genre"] === "Action");
} 

export const filterHorrorVideos = (state) => {
  let horrorVideos = Object.values(state.entities.videos);
  return horrorVideos.filter(video => video["genre"]["genre"] === "Horror");
} 

export const filterComedyVideos = (state) => {
  let comedyVideos = Object.values(state.entities.videos);
  return comedyVideos.filter(video => video["genre"]["genre"] === "Comedy");
} 