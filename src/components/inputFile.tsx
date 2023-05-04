import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { uploadAvatar } from "redux/userOperations";

/* eslint-disable */
const InputFileForm = () => {
  const [file, setFile] = useState<any>();
  const [previewSource, setPreviewSource] = useState<any>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const serverURL = "http://localhost:3030/profile/uploadAva";
  // const serverURL = "http://kiwicode.tech:5000/profile/uploadAva";
  // const serverURL = "https://vacmanserver-production.up.railway.app/profile/uploadAva";

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      setFile(target.files[0]);
      previewFile(target.files[0]);
    }
  };

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!previewSource) return;
    // send image (previewSource as base64EncodedImage) to server
    dispatch(uploadAvatar({ data: previewSource }));
    navigate(-1);
  };

  return (
    <>
      <h2 className="mt-4">Input the file to upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" className="m-2 p-1 border-2" name="image" onChange={handleChange} />
        <button type="submit" className="m-2 p-1 border-2">Upload file</button>
      </form>
      {previewSource && (
        <div>
          <img src={previewSource} alt="" />
        </div>
      )}
    </>
  )
};

export default InputFileForm;