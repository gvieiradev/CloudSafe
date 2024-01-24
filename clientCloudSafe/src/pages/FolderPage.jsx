import Navbar from "../components/navbar";

function FolderPage() {
    return(
        <div>
            <Navbar/>
            <div className="p-6">
            <div className="bg-gray-100 border-2 border-gray-300 w-96 mt-3 rounded-xl pb-1 float-left">
                <div className="w-1/4 ml-16 inline-grid m-auto mt-12 font-sans font-bold">
                    <label className="my-5" htmlFor="name">Name:</label>
                    <label className="mt-6" htmlFor="description">Description:</label>
                    <label className="my-11" htmlFor="date">Date:</label>
                </div>
                <div className="w-1/2 inline-grid m-auto font-sans font-semibold">
                    <input className="my-4 py-2 rounded-md" type="text" name="name"/>
                    <input className="my-4 py-2 rounded-md" type="text" name="description" id=""/>
                    <input className="mt-2 py-2 rounded-md" type="date" name="date" id="date" min="1990-01-01" max="2023-10-25"/>
                </div>
                <button type="button" className="ml-16 mt-10 h-8 mb-5 w-9/12 pr-24 text-gray-900 border-dashed border-2 border-blue-600 font-medium rounded-lg text-sm text-center hover:bg-blue-100">
                    Add folder
                    <span className="float-left pr-4 ml-20">
                        <img className="align-top" width="18" height="18" src="https://img.icons8.com/android/48/1A1A1A/plus.png"/>
                    </span>
                </button>
            </div>

            <div className=" bg-gray-100 mt-3 border-2 border-gray-300 rounded-xl pb-1 float-right w-2/3 h-[372px] p-3">
                <p className="font-sans font-bold uppercase">Folder List</p>
                <div className="flex flex-wrap">
                    <div className="rounded-md mt-4 mb-2">
                        <button className="bg-gray-300 rounded-md border-2 border-gray-400 text-justify hover:bg-white mr-4">
                            <img className="float-left m-3" width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/228be6/folder-invoices--v1.png" alt="folder-invoices--v1"/>
                            <p className="text-lm mt-6 font-semibold w-48">Folder name</p>
                        </button>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default FolderPage;