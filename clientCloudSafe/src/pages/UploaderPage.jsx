import { useState } from "react";
import Navbar from "../components/navbar";
import { useUpload } from "../context/uploadContext.jsx";

function UploaderPage() {
  const { saveImage, image} = useUpload();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("Error");
    };
  };

  const uploadImage = async (data) => {
    try {
      saveImage(data);
      setFileInputState("");
      // setPreviewSource("");
    } catch (error) {
      console.log(error);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <Navbar />
      <div className="p-3 ">
        <div className="inline-flex w-full">
          <p className="border-2 border-gray-300 rounded-xl p-2 w-full h-11 text-xl font-sans font-semibold">
            {image != null && (
              <a href={image.url} rel="noopener noreferrer">
                {image.url}
              </a>
            )}
          </p>
        </div>

        {/* SECCION DATA */}
        <div className="bg-gray-100 border-2 border-gray-300 w-96 mt-3 rounded-xl pb-1 float-left">
          <div className="w-1/4 ml-16 inline-grid m-auto mt-12 font-sans font-bold">
            <label className="my-5" htmlFor="name">Format:</label>
            <label className="my-4" htmlFor="type">Type:</label>
            <label className="my-4" htmlFor="date">Date:</label>
          </div>
          <div className="w-1/2 inline-grid m-auto font-sans font-semibold">
            <input className="my-4 py-2 rounded-md" type="text" name="format" value={image && image.format} readOnly/>
            <input className="my-4 py-2 rounded-md" type="text" name="type" value={image && image.type} readOnly/>
            <input className="mt-2 py-2 rounded-md" type="text" name="date" value={image && image.createdAt} readOnly/>
          </div>
        </div>

        {/* SECCION FILE UPLOADER */}
        <div className="block bg-gray-100 mt-3 border-2 border-gray-300 rounded-xl pb-1 float-right w-2/3  h-[372px] p-3">
          <p className="font-sans font-bold uppercase">File uploader</p>
          <form onSubmit={handleSubmitFile}>
            <div className="mt-5 border-dashed border-2 border-gray-400 rounded-md h-64 hover:bg-gray-300">
              <input onChange={handleFileInputChange} value={fileInputState} className="outline-none opacity-0 w-full h-[15.8rem] cursor-pointer hover:cursor-pointer" type="file" name="image" accept="image/*" ></input>
              <div className="z-0 text-center">
                {previewSource && (
                  <img className="ml-80 -mt-60 w-1/5 h-3/6" src={previewSource} alt="chosen"></img>
                )}
                {previewSource ? (<h3></h3>) : (<h3 className="font-medium uppercase -mt-150px text-gray-400 p-5">DRAG AND DROP FILE</h3>)}
              </div>
            </div>
            <button type="submit" className="mt-3 h-10 w-full text-gray-900 border-dashed border-2 border-blue-600 font-medium rounded-lg text-base text-center hover:bg-blue-100">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploaderPage;
