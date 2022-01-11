// export const filterPopularVideos = state => {
//   let popularVideos = [];

//   let allVideos = Object.values(state.entities.videos);
//   allVideos.map(video => {
//     {[video.id]: [video.likes]}
//   })

//   while (popularVideos.length < 7) {

//   }
// }

export const filterMylistVideos = (state) => {
  let mylistVideos = [];
  let mylistArray = Object.values(state.entities.mylists);

  mylistArray.forEach(mylist => {
    let video = state.entities.videos[mylist['video_id']]
    mylistVideos.push(video)
  })

  return mylistVideos;
}

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

export const filterDramaVideos = (state) => {
  let dramaVideos = Object.values(state.entities.videos);
  return dramaVideos.filter(video => video["genre"]["genre"] === "Drama");
} 