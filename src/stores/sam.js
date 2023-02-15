import { defineStore } from "pinia";
import {
  addPillar,
  getPillars,
  updatePillar,
  deletePillar,
  getSubPillars,
  addSubPillar,
  updateSubPillar,
  deleteSubPillar,
  getMenuHeading,
  addMenuHeading,
  updateMenuHeading,
  deleteMenuHeading
} from "../api/sam";

export const useSamStore = defineStore("sam", {
  state: () => ({
    formData: null,
    response: null,
    pillars: [],
    subpillars: [],
    menuheadings: [],
    pillarLinks: [],
    subpillarLinks: [],
    menuheadingsLinks: []
  }),
  actions: {
    async addPillar(data) {
      const response = await addPillar(data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async getPillars(currentPage) {
      const response = await getPillars(currentPage);
      if (response.data.success) {
        this.pillars = response.data.data.data;
        this.pillarLinks = response.data.data.links;
        // console.log("this.pillarLinks", this.pillarLinks);
      }
      return response;
    },
    async updatePillar(id, data) {
      const response = await updatePillar(id, data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async deletePillar(id) {
      const response = await deletePillar(id);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async getSubPillars(currentPage) {
      const response = await getSubPillars(currentPage);
      if (response.data.success) {
        this.subpillars = response.data.data.data;
        this.subpillarLinks = response.data.data.links;
      }
      return response;
    },
    async addSubPillar(data) {
      const response = await addSubPillar(data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async updateSubPillar(id, data) {
      const response = await updateSubPillar(id, data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async deleteSubPillar(id) {
      const response = await deleteSubPillar(id);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async getMenuHeading(currentPage) {
      const response = await getMenuHeading(currentPage);
      if (response.data.success) {
        this.menuheadings = response.data.data.data;
        this.menuheadingsLinks = response.data.data.links;
      }
      return response;
    },
    async addMenuHeading(data) {
      const response = await addMenuHeading(data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async updateMenuHeading(id, data) {
      const response = await updateMenuHeading(id, data);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    async deleteMenuHeading(id) {
      const response = await deleteMenuHeading(id);
      if (response.data.success) {
        this.response = response.data;
      }
      return response;
    },
    goToPage(urlString) {
      if (urlString) {
        let paramString = urlString.split("?")[1];
        let queryString = new URLSearchParams(paramString);
        for (let pair of queryString.entries()) {
          const currentPage = parseInt(pair[1]);
          return currentPage;
        }
      }
    }
  },
  getters: {
    pillarOptions(state) {
      if (!state.pillars) {
        return {
          id: 0,
          value: ""
        };
      }

      return state.pillars.map((item) => {
        return {
          id: item.id,
          value: item.description
        };
      });
    },
    subPillarOptions(state) {
      if (!state.subpillars) {
        return {
          id: 0,
          value: ""
        };
      }

      // return state.subpillars.map((item) => {
      //   return {
      //     id: item.id,
      //     value: `${item.description} | ${item.pillar.description}`
      //   };
      // });
      return state.subpillars
        .filter((sub) => sub.pillar.isactive == 1)
        .map((item) => {
          return {
            id: item.id,
            value: `${item.description} | ${item.pillar.description}`
          };
        });
    },
    sub_pillars(state) {
      if (!state.subpillars) {
        return {
          id: 0,
          description: "",
          datecreated: "",
          pillar_name: ""
        };
      }

      return state.subpillars.map((item) => {
        let isDeleted = "";
        if (item.pillar.isactive == 0) {
          isDeleted = "<deleted>";
        }
        return {
          id: item.id,
          description: item.description,
          datecreated: item.datecreated,
          pillar_name: `${item.pillar.description} ${isDeleted}`,
          pillar_id: item.pillar.id
        };
      });
    },

    menu_headings(state) {
      if (!state.menuheadings) {
        return {
          id: 0,
          description: "",
          datecreated: "",
          sub_pillar_name: "",
          pillar_name: ""
        };
      }

      return state.menuheadings.map((item) => {
        let isDeleted = "";
        if (item.subpillar.pillar.isactive == 0) {
          isDeleted = "<deleted>";
        }
        let isDeleted2 = "";
        if (item.subpillar.isactive == 0) {
          isDeleted2 = "<deleted>";
        }
        return {
          id: item.id,
          description: item.description,
          datecreated: item.datecreated,
          sub_pillar_id: item.subpillar.id,
          sub_pillar_name: `${item.subpillar.description} ${isDeleted}`,
          pillar_name: `${item.subpillar.pillar.description} ${isDeleted}`,
          pillar_id: item.subpillar.pillar.id
        };
      });
    }
  }
});
