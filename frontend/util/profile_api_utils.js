export const getUserProfiles = (userId) => {
  
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/profiles`,
  })
}

export const postUserProfile = (profile) => {
  
  return $.ajax({
    method: 'POST',
    url: `/api/users/${profile.user_id}/profiles`,
    data: { profile },
  })
}
