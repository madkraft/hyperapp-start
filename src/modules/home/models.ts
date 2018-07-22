export interface HomeModuleState {
  title: string
  starWarsPeople: any[]
}

export interface HomeModuleActions {
  fetchStarWarsPeople(): (
    state: HomeModuleState,
    actions: HomeModuleActions
  ) => void
  setStarWarsPeople(
    data: any
  ): (state: HomeModuleState) => { starWarsPeople: any }
}
