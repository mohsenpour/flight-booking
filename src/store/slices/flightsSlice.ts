import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFlight } from '../../services/flightSchedule';

interface IFightSlice {
  outboundFlights: IFlight[];
  inboundFlights: IFlight[];
}

const initialState: IFightSlice = { outboundFlights: [], inboundFlights: [] };

let flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    initializeOutboundFlights: (state, action: PayloadAction<IFlight[]>) => {
      state.outboundFlights = action.payload;
    },
    initializeInboundFlights: (state, action: PayloadAction<IFlight[]>) => {
      state.inboundFlights = action.payload;
    },
  },
});

export const { initializeInboundFlights, initializeOutboundFlights } =
  flightsSlice.actions;

export default flightsSlice.reducer;
