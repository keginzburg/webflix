export const getSearchVideos = (search) => {

  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data: { search }
  })
}