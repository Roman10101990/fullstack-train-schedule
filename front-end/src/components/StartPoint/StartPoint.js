import { Formik, Form } from "formik";
import { useEffect } from "react";
import {getSchedule} from "../../store/scheduleThunkAndSlice/scheduleThunk";
import {useDispatch} from "react-redux";

function StartPoint() {
  const dispatch = useDispatch();

  useEffect(() => {
    }, [])

    return (
      <div className="mb-4">
        <Formik
            initialValues={{ startCityName: '', endCityName: '' }}
            onSubmit={async (values) => {
              dispatch(getSchedule(values))
            }}

        >
            {({
                values,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="From"
                        name="startCityName"
                        onChange={handleChange}
                        value={values.startCityName}
                        className="mr"
                    />
                    <input
                        type="text"
                        placeholder="To"
                        name="endCityName"
                        onChange={handleChange}
                        value={values.endCityName}
                        className="mr"
                    />
                    <button type="submit" className="btn btn-primary">
                        Find
                    </button>
                </form>
            )}
        </Formik>
      </div>
    );
}

export default StartPoint;