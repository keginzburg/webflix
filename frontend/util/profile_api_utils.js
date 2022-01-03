export const getUserProfiles = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/profiles`,
  })
}

