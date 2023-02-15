export default {
    setComponent(context, payload) {
      context.commit('component', payload);
    },
    setFilteredData(context, payload) {
      context.commit('filteredData', payload);
    },
    checkInputHasChanged(context, payload) {
      context.commit('inputHasChanged', payload);
    },
    setCountries(context, payload) {
      context.commit('countries', payload);
    },
    setRegions(context, payload) {
      context.commit('regions', payload);
    },
    setStates(context, payload) {
      context.commit('states', payload);
    },
    setTowncities(context, payload) {
      context.commit('towncities', payload);
    },
    setBarangays(context, payload) {
      context.commit('barangays', payload);
    }
};