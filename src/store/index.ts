import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from './modules/user'
import { IAppState } from './modules/app'
import { ITagsViewState } from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState,
  user: IUserState,
  tagsView: ITagsViewState
}

// Declare empty store first, dynamically register all modules later.
//export default new Vuex.Store<IRootState>({})

const store = new Vuex.Store<IRootState>({getters});

export default store;