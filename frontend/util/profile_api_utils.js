export const getUserProfiles = (userId) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/profiles`,
  })
}

