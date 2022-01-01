export const postNewUser = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)

export const postUser = (user) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
}

export const deleteUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)