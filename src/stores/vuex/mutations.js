export default {
    component(state, payload) {
      state.selectedComponent = payload.value;
    },
    filteredData(state, payload) {
        var key = payload.key;
        var needle = payload.needle;
        var heystack = payload.heystack;
        
        var data = heystack.filter(function (el) {
            return el[key] == needle;
        });
        
        state.filteredData = data;
    },
    inputHasChanged(state, payload) {
        if (JSON.stringify(payload.newVal) == payload.oldVal) {
            state.inputHasChanged = false;
        } else {
            state.inputHasChanged = true;
        }
    },
    countries(state, payload) {
        state.countries = payload.value;
    },
    regions(state, payload) {
        state.regions = payload.value;
    },
    states(state, payload) {
        state.states = payload.value;
    },
    towncities(state, payload) {
        state.towncities = payload.value;
    },
    barangays(state, payload) {
        state.barangays = payload.value;
    }
};