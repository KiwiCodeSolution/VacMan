import { ChangeEvent, useState } from 'react';

/* eslint-disable */
const InputFileForm = () => {
  const [file, setFile] = useState<any>();
  const [previewSource, setPreviewSource] = useState<any>('');
  const URL = "http://localhost:3030/profile/uploadAva";

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if(target.files) {
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

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!previewSource) return;
    // send image (previewSource as base64EncodedImage) to server 
    try {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({data: previewSource}),
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjcyYmUxM2U4NDk1N2JlYzBiYjgwMiIsImlhdCI6MTY3NzI1NDMzN30.TTtTK8qDlah-fuzRktV9Y127_tYFhOVN0ho5C_tP0Ok'
        }
      })
    } catch (error) {
      console.error(error);
    }
  };

  return ( 
    <>
      <h2 className="mt-4">Input the file to upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" className="m-2 p-1 border-2" name="image" onChange={handleChange}/>
        <button type="submit" className="m-2 p-1 border-2">Upload file</button>
      </form>
      {previewSource && (
        <div>
          <img src={previewSource} alt=""/>
        </div>
      )}
    </>
  )
};

export default InputFileForm;