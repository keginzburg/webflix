export const getMylistedVideos = (profileId) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}/mylists`,
  })
}