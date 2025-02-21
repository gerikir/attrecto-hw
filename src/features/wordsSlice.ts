import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordsState {
  words: string[];
}

const initialState: WordsState = {
  words: [
    "reward", "island", "finance", "frighten", "orchestra", "prevalence",
    "pedestrian", "destruction", "announcement", "consideration", "responsibility",
    "shiver", "impound", "control", "observer", "executive", "background",
    "unfortunate", "presentation", "presidential", "comprehensive", "constitutional",
    "regret", "extreme", "collapse", "classify", "fireplace", "particular",
    "charismatic", "manufacturer", "inappropriate", "communication", "discrimination",
    "carbon", "inspire", "medicine", "monstrous", "essential", "attraction",
    "institution", "interference", "embarrassment", "representative", "recommendation"
  ],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      state.words.push(action.payload);
    },
  },
});

export const { addWord } = wordsSlice.actions;
export default wordsSlice.reducer; 