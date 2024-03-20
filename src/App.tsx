import { useEffect, useState } from 'react';
import {
  getOutboundFlights,
  getInboundFlights,
  IFlights,
} from './services/flightSchedule';

const App = () => {
  const [outboundFlights, setOutboundFlights] = useState<IFlights>();
  const [inboundFlights, setInboundFlights] = useState<IFlights>();

  useEffect(() => {
    getOutboundFlights().then((flights) => setOutboundFlights(flights));
    getInboundFlights().then((flights) => setInboundFlights(flights));
  }, []);

  return (
    <>
      <h1>OutBoundFlights</h1>
      <ul>
        {outboundFlights?.flights.map((flight, index) => (
          <li key={index}>
            flight duration: {flight.duration} flight price:
            {flight.ticketPrice}
          </li>
        ))}
      </ul>

      <h1>InBoundFlights</h1>
      <ul>
        {inboundFlights?.flights.map((flight, index) => (
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
