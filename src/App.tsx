import styles from './App.module.css';
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
import FlightCard from './components/FlightCard';

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
      <ul className={styles.flightsList}>
        {outboundFlights?.map((flight, index) => (
          <li className={styles.flightsListItem} key={index}>
            <FlightCard flight={flight} />
          </li>
        ))}
      </ul>

      <h1>InBoundFlights</h1>
      <ul className={styles.flightsList}>
        {inboundFlights?.map((flight, index) => (
          <li className={styles.flightsListItem} key={index}>
            <FlightCard flight={flight} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
