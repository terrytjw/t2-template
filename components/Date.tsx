import { parseISO, format } from "date-fns";

type DateProps = {
  dateString: string;
};
const Date = ({ dateString }: DateProps) => {
  // parseISO parses the date string into a Date object
  const date = parseISO(dateString);
  return (
    <time style={{ color: "gray" }} dateTime={dateString}>
      {format(date, "d LLLL")}
    </time>
  );
};

export default Date;
