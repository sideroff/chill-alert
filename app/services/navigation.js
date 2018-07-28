let instance


export const initialize = navigationRef => {
  instance = navigationRef
}

export const navigate = route => {
  instance.navigate(route)
}