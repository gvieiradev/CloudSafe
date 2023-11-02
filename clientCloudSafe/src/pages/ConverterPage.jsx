import Navbar from "../components/navbar";

function ConverterPage() {
    return(
        <div>
        <Navbar/>
        <div className="p-3 ">
            {/* BARRA DE INFORMACION Y BOTONES */}
            <div className="inline-flex w-full">
                <p className="border-2 border-gray-300 rounded-xl p-2 w-full text-xl font-sans font-semibold">Biography Nelson Mandela.doc 2.3mb</p>
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
            <div className="bg-gray-100 border-2 border-gray-300 w-96 mt-3 rounded-xl pb-1 content-center flex float-left">
                <div className="w-1/2 inline-grid m-auto font-sans font-semibold mt-5">
                    <button className="bg-gray-300 rounded-md border-2 border-gray-400 text-justify hover:bg-white">
                        <img className="inline-block float-left m-3" width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/228be6/refresh--v1.png" alt="refresh--v1"/>
                        <p className="text-sm pt-2">Word to PDF</p>
                        <p className="text-[10px] text-gray-600 pb-2">Convert any Word file to <br/> PDF instantly</p>
                    </button>
                    <button className="bg-gray-300 rounded-md text-justify border-2 border-gray-400 hover:bg-white mt-5">
                        <img className="inline-block float-left m-3" width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/228be6/refresh--v1.png" alt="refresh--v1"/>
                        <p className="text-sm pt-2">Word to Excel</p>
                        <p className="text-[10px] text-gray-600 pb-2">Convert any Word file to <br/> PDF instantly</p>
                    </button>
                    <button className="bg-gray-300 rounded-md text-justify mt-5 border-2 border-gray-400 hover:bg-white">
                        <img className="inline-block float-left m-3" width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/228be6/refresh--v1.png" alt="refresh--v1"/>
                        <p className="text-sm pt-2">Excel to PDF</p>
                        <p className="text-[10px] text-gray-600 pb-2">Convert any Word file to <br/> PDF instantly</p>
                    </button>
                    <button className="bg-gray-300 rounded-md text-justify mt-5 mb-1 border-2 border-gray-400 hover:bg-white">
                        <img className="inline-block float-left m-3" width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/228be6/refresh--v1.png" alt="refresh--v1"/>
                        <p className="text-sm pt-2">PNG to PDF</p>
                        <p className="text-[10px] text-gray-600 pb-2">Convert any Word file to <br/> PDF instantly</p>
                    </button>
                </div>
            </div>

            {/* SECCION FILE UPLOADER */}
            <div className=" bg-gray-100 mt-3 border-2 border-gray-300 rounded-xl pb-1 float-right w-2/3  h-[372px] p-3">
                <p className="font-sans font-bold uppercase">Word to PDF</p>
                <div className="mt-5 border-dashed border-2 border-gray-400 rounded-md h-64 hover:bg-gray-300">
                    <input className=" outline-none opacity-0 w-full h-[15.8rem] cursor-pointer hover:cursor-pointer" type="file" name="" accept=""/>
                    <div className=" text-center">
                        <h3 className="font-medium uppercase -mt-150px text-gray-400 p-5">DRAG YOUR FILE HERE</h3>
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

export default ConverterPage;