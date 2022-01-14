export const filterPopularVideos = state => {
  let popularVideos = [];
  let likes = Object.values(state.entities.likes);
  let likedVideosHash = {};
  likes.forEach(like => {
    let videoId = like["video_id"];
    if (!likedVideosHash[videoId]) likedVideosHash[videoId] = 0;
    likedVideosHash[videoId] += 1;
  })
  
  let sortedArray = [];
  for (let key in likedVideosHash) {
    sortedArray.push([key, likedVideosHash[key]]);
  }

  sortedArray.sort(function(first, next) {
    return first[1] - next[1];
  });

  for (let i = sortedArray.length-1; i >= 0; i--) {
    let id = sortedArray[i][0];
    popularVideos.push(state.entities.videos[id]);
  }
  
  if (popularVideos.length > 6) {
    return popularVideos.slice(0, 6);
  } else if (popularVideos.length > 0 && popularVideos.length < 7) {
    return popularVideos;
  }
}

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