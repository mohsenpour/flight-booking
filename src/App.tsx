import { useEffect } from 'react';
import {
  getOutboundFlights,
  getInboundFlights,
} from './services/flightSchedule';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  initializeInboundFlights,
  initializeOutboundFlights,
} from './store/slices/flightsSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const outboundFlights = useAppSelector(
    (state) => state.flights.outboundFlights
  );
  const inboundFlights = useAppSelector(
    (state) => state.flights.inboundFlights
  );

  useEffect(() => {
    getOutboundFlights().then((response) =>
      dispatch(initializeOutboundFlights(response.flights))
    );
    getInboundFlights().then((response) =>
      dispatch(initializeInboundFlights(response.flights))
    );
  }, []);

  return (
    <>
      <h1>OutBoundFlights</h1>
      <ul>
        {outboundFlights?.map((flight, index) => (
          <li key={index}>
            flight duration: {flight.duration} flight price:
            {flight.ticketPrice}
          </li>
        ))}
      </ul>

      <h1>InBoundFlights</h1>
      <ul>
        {inboundFlights?.map((flight, index) => (
          <li key={index}>
            flight duration: {flight.duration} flight price:
            {flight.ticketPrice}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
