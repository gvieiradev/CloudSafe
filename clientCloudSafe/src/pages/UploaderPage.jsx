import Navbar from "../components/navbar"
function UploaderPage() {
    return(
    <div>
        <Navbar/>
        <div className="p-3 ">
            {/* BARRA DE INFORMACION Y BOTONES */}
            <div className="inline-flex w-full">
                <p className="border-2 border-gray-300 rounded-xl p-2 w-full text-xl font-sans font-semibold">field tricket</p>
                <button type="button" className="ml-10 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl">
                    <img className="p-2" width="48" height="48" src="https://img.icons8.com/pulsar-line/48/228BE6/forward.png"/>
                </button>
                <button type="button" className="ml-4 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl">
                    <img className="p-2" width="48" height="48" src="https://img.icons8.com/pulsar-line/48/FA5252/filled-trash.png"/>
                </button>
                <button type="button" className="ml-4 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl">
                    <img className="p-2" width="48" height="48" src="https://img.icons8.com/pulsar-line/48/12B886/upload-to-ftp.png" alt="upload-to-ftp"/>
                </button>
            </div>

            {/* SECCION DATA */}
            <div className="bg-gray-100 border-2 border-gray-300 w-96 mt-3 rounded-xl pb-1 float-left">
                <div className="w-1/4 ml-16 inline-grid m-auto mt-12 font-sans font-bold">
                    <label className="my-5" htmlFor="name">Name:</label> 
                    <label className="my-4" htmlFor="type">Type:</label>
                    <label className="my-4" htmlFor="description">Description:</label>
                    <label className="my-4" htmlFor="date">Date:</label>
                </div>
                <div className="w-1/2 inline-grid m-auto font-sans font-semibold">
                    <input className="my-4 py-2 rounded-md" type="text" name="name"/>
                    <select className="py-2 rounded-md" name="type" id="">
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                        <option value="docs">Docs</option>
                        <option value="file">File</option>
                    </select>
                    <input className="my-4 py-2 rounded-md" type="text" name="description" id=""/>
                    <input className="mt-2 py-2 rounded-md" type="date" name="date" id="date" min="1990-01-01" max="2023-10-25"/>
                </div>
                <button type="button" className="ml-16 mt-8 h-8 mb-5 w-9/12 pr-24 text-gray-900 border-dashed border-2 border-blue-600 font-medium rounded-lg text-sm text-center hover:bg-blue-100">
                    Add file
                    <span className="float-left pr-4 ml-20">
                        <img className="align-top" width="18" height="18" src="https://img.icons8.com/android/48/1A1A1A/plus.png"/>
                    </span>
                </button>
            </div>

            {/* SECCION FILE UPLOADER */}
            <div className=" bg-gray-100 mt-3 border-2 border-gray-300 rounded-xl pb-1 float-right w-2/3  h-[372px] p-3">
                <p className="font-sans font-bold uppercase">File uploader</p>
                <div className="mt-5 border-dashed border-2 border-gray-400 rounded-md h-64 hover:bg-gray-300">
                    <input className=" outline-none opacity-0 w-full h-[15.8rem] cursor-pointer hover:cursor-pointer" type="file" name="" accept=""/>
                    <div className=" text-center">
                        <h3 className="font-medium uppercase -mt-150px text-gray-400 p-5">DRAG AND DROP FILE</h3>
                    </div>
                </div>
                <button type="button" className=" mt-3 h-10 w-full pr-80 text-gray-900 border-dashed border-2 border-blue-600 font-medium rounded-lg text-sm text-center hover:bg-blue-100">
                    Add file
                    <span className="float-left pr-4 ml-96">
                        <img className="align-top" width="18" height="18" src="https://img.icons8.com/android/48/1A1A1A/plus.png"/>
                    </span>
                </button>
            </div>
        </div>
    </div> 
    )
}

export default UploaderPage