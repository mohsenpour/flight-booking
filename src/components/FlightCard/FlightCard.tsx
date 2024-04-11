import styles from './FlightCard.module.css';
import { IFlight } from '../../services/flightSchedule';
import logo from './../../assets/logos/airLogo_AC.webp';

interface FlightCardProps {
  flight: IFlight;
}
const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className={styles.flightCard}>
      <div className={styles.scheduleInfo}>
        <div className={styles.scheduleSummary}>
          <div className={styles.stopsCountInfo}>
            {flight.stopsCount} {flight.stopsCount > 1 ? 'Stops' : 'Stop'}
          </div>
          <div className={styles.durationInfo}>{flight.duration}</div>
        </div>
        <div className={styles.scheduleDetails}>
          <div className={styles.airlineLogo}>
            <img src={logo} alt='' />
          </div>
          <div className={styles.departureDetails}>
            <div className={styles.departureTime}>{flight.departureTime}</div>
            <div>{flight.departureAirportCode}</div>
          </div>
          <div className={styles.layoverDetails}>
            <div className={styles.layoverDuration}>
              {flight.layoverDuration}
            </div>
            <div>{flight.layoverAirportCode}</div>
          </div>
          <div className={styles.arrivalDetails}>
            <div className={styles.arrivalTime}>{flight.arrivalTime}</div>
            <div>{flight.arrivalAirportCode}</div>
          </div>
        </div>
      </div>
      <div className={styles.priceInfo}></div>
    </div>
  );
};

export default FlightCard;
