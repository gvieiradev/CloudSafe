// import { useEffect} from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import { useExplorer } from "../context/explorerContext.jsx";

function ExplorerPage() {
  const { getImages, image, deleteImages } = useExplorer();
  const [isChecked, setisChecked]=useState([]);

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlecheckbox=(e)=>{
    const {value, checked} = e.target;
    const r = value.split("/")

    if(checked){
      setisChecked([...isChecked, r[1]]);
    }else{
      setisChecked(isChecked.filter((e)=>e!==value))
    }
  };

  const alldelete= async()=>{
    try {
      const r = await deleteImages(isChecked);
      getImages(r)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-3">
        <div className="pb-4 bg-white dark:bg-gray-300 p-3 rounded">
          <div className="relative">
            <button
              type="button"
              className=" hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 dark:hover:bg-gray-500 "
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/48/000000/rotate-right.png"
                alt="rotate-right"
              />
            </button>
            <p className="inline-block ml-4 text-gray-700">Showing {image.length} files</p>
            <button
              onClick={alldelete}
              className="text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 dark:hover:bg-red-300  float-right hover:text-red-800"
            >
              <img
                className="mr-2"
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/48/FA5252/waste.png"
                alt="waste"
              />
              Delete
            </button>
            <button
              type="button"
              className="text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 dark:hover:bg-gray-500  float-right hover:text-white"
            >
              <img
                className="mr-2"
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png"
                alt="plus-math"
              />
              New Folder
            </button>
            <button
              type="button"
              className=" hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 dark:hover:bg-gray-500 top-r float-right"
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/pulsar-line/48/000000/month-view.png"
                alt="rotate-right"
              />
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Public ID
              </th>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>
              <th scope="col" className="px-6 py-3">
                Resource Type
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Last Modified
              </th>
            </tr>
          </thead>
          <tbody>
            {image.map((images, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value={images.public_id}
                      checked={images.isChecked}
                      onChange={(e)=>handlecheckbox(e)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4"><img className="w-6" src={images.secure_url}/></td>
                <td className="px-6 py-4">{images.public_id}</td>
                <td className="px-6 py-4">{images.format}</td>
                <td className="px-6 py-4">{images.resource_type}</td>
                <td className="px-6 py-4">{images.created_at}</td>
                <td className="px-6 py-4">{images.last_modified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExplorerPage;
