function ScheduleList({data}) {

  return (
    <>
      {data && (
        <>
          {data.map((schedule) => (
            <li key={schedule.id} className="d-grid gap-3 p-2 m-2 bg-light border">
              <div>{schedule.startPoint } - { schedule.endPoint}</div>
              <div><span className="text-primary">departure </span>{schedule.departure} - {schedule.arrival}<span className="text-primary"> arrival</span></div>
              <div>{schedule.date }</div>
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default ScheduleList;