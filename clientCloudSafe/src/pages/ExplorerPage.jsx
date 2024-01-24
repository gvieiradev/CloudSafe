import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import { useExplorer } from "../context/explorerContext.jsx";

function ExplorerPage() {
 const { selectImages } = useExplorer();

useEffect(() =>{
  function dataImage(){
    const res = selectImages()
    console.log(res)
  }
  dataImage();
});

  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-3">
        <div className="pb-4 bg-white dark:bg-gray-300 p-3 rounded">
          <div className="relative">
            <button type="button" className=" hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 dark:hover:bg-gray-500 ">
                <img width="24" height="24" src="https://img.icons8.com/pulsar-line/48/000000/rotate-right.png" alt="rotate-right"/>
            </button>
            <p className="inline-block ml-4 text-gray-700">Showing 6 files</p>
            <button type="button" className="text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 dark:hover:bg-red-300  float-right hover:text-red-800">
            <img className="mr-2" width="24" height="24" src="https://img.icons8.com/pulsar-line/48/FA5252/waste.png" alt="waste"/>
                Delete
            </button>
            <button type="button" className="text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 dark:hover:bg-gray-500  float-right hover:text-white">
            <img className="mr-2" width="24" height="24" src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png" alt="plus-math"/>
                New Folder
            </button>
            <button type="button" className=" hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 dark:hover:bg-gray-500 top-r float-right">
                <img width="24" height="24" src="https://img.icons8.com/pulsar-line/48/000000/month-view.png"  alt="rotate-right"/>
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td>prueba</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExplorerPage;
