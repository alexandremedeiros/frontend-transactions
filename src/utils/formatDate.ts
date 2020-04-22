import { parseISO, format } from 'date-fns';

const formatDate = (value: string): string => {
  const date = parseISO(value);
  const formattedDate = format(date, 'dd/MM/yyyy');

  return formattedDate;
};

export default formatDate;
