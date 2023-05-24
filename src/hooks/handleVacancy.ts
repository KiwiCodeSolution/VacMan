import { useNavigate } from "react-router-dom";
import {
  IVacancy,
  useAddVacancyMutation,
  useDeleteVacancyMutation,
  useUpdateVacancyMutation,
} from "redux/VacancyQueries";
import { useAppDispatch } from "./reduxHooks";
import { setMessage, setType, setShowNotification } from "redux/notificationsSlice";
import { setIsLoading } from "redux/userSlice";

const useHandleVacancy = () => {
  const [updateVacancy] = useUpdateVacancyMutation();
  const [addVacancy] = useAddVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleArchive = (_id: string, arch: boolean) => {
    updateVacancy({ _id, archived: arch })
      .unwrap()
      .then(res => {
        dispatch(setMessage(res.message));
        dispatch(setType("success"));
      })
      .catch(res => {
        dispatch(setMessage(res.message));
        dispatch(setType("error"));
      })
      .finally(() => dispatch(setShowNotification(true)));
    navigate("/", { replace: true });
  };
  const addNewVacancy = (data: Partial<IVacancy>) => {
    addVacancy(data)
      .unwrap()
      .then(payload => {
        dispatch(setMessage(payload.message));
        dispatch(setType("success"));
        navigate(-1);
      })
      .catch(error => {
        dispatch(setMessage(error.data.message));
        dispatch(setType("error"));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
        dispatch(setShowNotification(true));
      });
  };
  const editVacancy = ({ _id, data, goBack }: { _id: string; data: Partial<IVacancy>; goBack: boolean }) => {
    updateVacancy({ ...data, _id })
      .unwrap()
      .then(payload => {
        dispatch(setMessage(payload.message));
        dispatch(setType("success"));
        if (goBack) navigate(-1);
      })
      .catch(error => {
        dispatch(setMessage(error.data.message));
        dispatch(setType("error"));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
        dispatch(setShowNotification(true));
      });
  };
  const removeVacancy = (_id: string): void => {
    deleteVacancy({ _id })
      .unwrap()
      .then(res => {
        dispatch(setMessage(res.message));
        dispatch(setType("success"));
      })
      .catch(res => {
        dispatch(setMessage(res.message));
        dispatch(setType("error"));
      })
      .finally(() => dispatch(setShowNotification(true)));
  };

  return { handleArchive, editVacancy, addNewVacancy, removeVacancy };
};
export default useHandleVacancy;
