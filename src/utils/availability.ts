export interface Availability {
  articleId: string;
  date: string;
  isAvailable: boolean;
}

const availabilityData: Availability[] = [];

export const checkAvailability = (
  articleId: string,
  startDate: string,
  endDate: string
): boolean => {
  const isAvailable = availabilityData.every((availability) => {
    return (
      availability.articleId !== articleId ||
      new Date(availability.date) < new Date(startDate) ||
      new Date(availability.date) > new Date(endDate)
    );
  });
  return isAvailable;
};

export const updateAvailability = (
  articleId: string,
  date: string,
  isAvailable: boolean
): void => {
  const index = availabilityData.findIndex(
    (availability) =>
      availability.articleId === articleId && availability.date === date
  );
  if (index !== -1) {
    availabilityData[index].isAvailable = isAvailable;
  } else {
    availabilityData.push({ articleId, date, isAvailable });
  }
};
