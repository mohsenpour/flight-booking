export interface IFlight {
  stopsCount: number;
  duration: string;
  arrivalDate: string;
  airlineName: string;
  airlineLogo: string;
  departureTime: string;
  departureAirportCode: string;
  layoverDuration: string;
  layoverAirportCode: string;
  arrivalTime: string;
  arrivalAirportCode: string;
  ticketPrice: string;
}

export interface IFlights {
  flights: IFlight[];
}

const outboundFlights: IFlights = {
  flights: [
    {
      stopsCount: 1,
      duration: '17h 10m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '8:20p',
      departureAirportCode: 'YTZ',
      layoverDuration: '11h 25m',
      layoverAirportCode: 'YUL',
      arrivalTime: '01:30p',
      arrivalAirportCode: 'SJU',
      ticketPrice: '330',
    },
    {
      stopsCount: 1,
      duration: '16h 30m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '5:40p',
      departureAirportCode: 'YTZ',
      layoverDuration: '10h 5m',
      layoverAirportCode: 'YUL',
      arrivalTime: '03:30p',
      arrivalAirportCode: 'SJU',
      ticketPrice: '350',
    },
    {
      stopsCount: 1,
      duration: '15h 10m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '7:10p',
      departureAirportCode: 'YTZ',
      layoverDuration: '9h 20m',
      layoverAirportCode: 'YUL',
      arrivalTime: '04:10p',
      arrivalAirportCode: 'SJU',
      ticketPrice: '370',
    },
    {
      stopsCount: 1,
      duration: '18h 10m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '9:20p',
      departureAirportCode: 'YTZ',
      layoverDuration: '12h 25m',
      layoverAirportCode: 'YUL',
      arrivalTime: '06:30p',
      arrivalAirportCode: 'SJU',
      ticketPrice: '374',
    },
    {
      stopsCount: 1,
      duration: '15h 10m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '8:20p',
      departureAirportCode: 'YTZ',
      layoverDuration: '8h 25m',
      layoverAirportCode: 'YUL',
      arrivalTime: '12:30p',
      arrivalAirportCode: 'SJU',
      ticketPrice: '410',
    },
    {
      stopsCount: 1,
      duration: '14h 10m',
      arrivalDate: 'Sat, Apr 13',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '6:20p',
      departureAirportCode: 'YTZ',
      layoverDuration: '3h 15m',
      layoverAirportCode: 'YUL',
      arrivalTime: '10:30a',
      arrivalAirportCode: 'SJU',
      ticketPrice: '450',
    },
  ],
};

const inboundFlights: IFlights = {
  flights: [
    {
      stopsCount: 1,
      duration: '16h 26m',
      arrivalDate: 'Mon, Apr 15',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '7:30a',
      departureAirportCode: 'SJU',
      layoverDuration: '10h 22m',
      layoverAirportCode: 'ATL',
      arrivalTime: '11:56p',
      arrivalAirportCode: 'YYZ',
      ticketPrice: '0',
    },
    {
      stopsCount: 1,
      duration: '23h 26m',
      arrivalDate: 'Tue, Apr 16',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '5:30p',
      departureAirportCode: 'SJU',
      layoverDuration: '17h 10m',
      layoverAirportCode: 'ATL',
      arrivalTime: '04:54p',
      arrivalAirportCode: 'YYZ',
      ticketPrice: '9',
    },
    {
      stopsCount: 1,
      duration: '28h 25m',
      arrivalDate: 'Tue, Apr 16',
      airlineName: 'Air Canada',
      airlineLogo: '../../assets/logos/airLogo_AC.webp',
      departureTime: '5:30p',
      departureAirportCode: 'SJU',
      layoverDuration: '22h 15m',
      layoverAirportCode: 'ATL',
      arrivalTime: '09:55p',
      arrivalAirportCode: 'YYZ',
      ticketPrice: '9',
    },
  ],
};

export const getOutboundFlights = () =>
  new Promise<IFlights>((resolve) => {
    setTimeout(() => resolve(outboundFlights), 3000);
  });

export const getInboundFlights = () =>
  new Promise<IFlights>((resolve) => {
    setTimeout(() => resolve(inboundFlights), 3000);
  });
