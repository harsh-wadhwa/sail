export type Booking = {
  id: string;
  userId?: string;
  articleName: string;
  renterName: string;
  startDate: Date;
  endDate: Date;
};
