import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSchedule} from "../../store/scheduleThunkAndSlice/scheduleThunk";
import ScheduleList from "./ScheduleList.js";
import Loading from "./../Loading/Loading.js";

function Schedule() {
  const dispatch = useDispatch();
  const schedules = useSelector((state) => state.schedules.schedules);
  const loading = useSelector((state) => state.schedules.loading);

  useEffect(() => {
    dispatch(getSchedule());
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <ScheduleList data={schedules} className="mt-4" />
        </>
      ) : <Loading type='cubes' color='#67BCF7'/>}
    </>
  );
}

export default Schedule;