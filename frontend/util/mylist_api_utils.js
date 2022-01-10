export const getMylistedVideos = (profileId) => {
  
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}/mylists`,
  })
}

export const postMylistedVideo = (mylist) => {
  
  return $.ajax({
    method: 'POST',
    url: `/api/mylists`,
    data: { mylist }
  })
}

export const deleteMylistedVideo = (mylistId) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/mylists/${mylistId}`
  })
}