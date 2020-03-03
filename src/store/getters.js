const getters = {
  /* app module */
  size: state => state.app.size,
  device: state => state.app.device,
  language: state => state.app.language,
  /* user module */
  user: state => state.user.user,
  status: state => state.user.status,
  usersOnline: state => state.user.usersOnline,
  roles: state => state.user.roles,
  /* masterdata module */
  masterdata: state => state.data.masterdata,
  /* notification module */
  notification: state => state.notify.notification,
  /* permission module */
  permission_routes: state => state.permission.routes,
}
export default getters
