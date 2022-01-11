export const getLikes = (profileId) => {

  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}/likes`
  })
}

export const postLike = (like) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  })
}

export const deleteLike = (likeId) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${likeId}`
  })
}