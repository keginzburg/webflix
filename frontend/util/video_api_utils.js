export const getAllVideos = () => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
  })
}

export const getVideo = (videoId) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`
  })
}