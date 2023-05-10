import { createSlice, nanoid } from "@reduxjs/toolkit";
import { MIN_GROUP_COUNT } from "../../utils/constant";

const initialState = {
  data: [],
  groupCount: MIN_GROUP_COUNT,
  groups: [],
}
const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addMembers: {
      reducer(state, action) {
        // TODO : check for same string in array and remove similar strings
        state.data.push(...action.payload.data);
      },
      prepare(payload) {
        const members = payload.split(",").filter(name => !!name).map(val => {
          return {
            id: nanoid(),
            name: val.trim(),
          }
        })

        return {
          payload: {
            data: members,
          }
        }
      }
    },
    removeMember(state, action) {
      state.data = state.data.filter(member => member.id !== action.payload.id);
    },
    reset() {
      return initialState
    },
    changeGroupCount(state, { payload }) {
      const newGroupCount = payload;
      const totalGroups = +newGroupCount ? +newGroupCount : MIN_GROUP_COUNT;
      if (state?.data?.length >= totalGroups) {
        state.groupCount = totalGroups
      } else {
        state.groupCount = MIN_GROUP_COUNT;
      }
    },
    shuffleGroups(state) {
      const _players = [...state.data]; // array of players
      const noOfGroups = state.groupCount;
      let groups = [];
      let groupId = 0;
      const totalPlayers = state?.data?.length;
      for (let x = 0; x < totalPlayers; x++) {
        const randomPlayerIndex = Math.floor(Math.random() * _players.length);
        const randomPlayer = _players[randomPlayerIndex];
        if (groupId === noOfGroups) {
          // restart the people count from 1st group
          groupId = 0;
        }
        groups[groupId] = groups[groupId] ? [...groups[groupId], randomPlayer] : [randomPlayer]; // whole player details
        _players.splice(randomPlayerIndex, 1); // remove from array
        groupId++;
      }
      state.groups = groups
    }
  }
});

export const { addMembers, reset, removeMember, changeGroupCount, shuffleGroups } = groupSlice.actions;
export default groupSlice.reducer;