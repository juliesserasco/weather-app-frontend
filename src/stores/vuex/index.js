import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
    state: () => ({
        selectedComponent: '', 
        filteredData: [],
        inputHasChanged: false,
        countries: [], 
        regions: [], 
        states: [],
        towncities: [], 
        barangays: [],
      }),
      mutations: mutations,
      actions: actions,
      getters: getters
});
  
export default store;