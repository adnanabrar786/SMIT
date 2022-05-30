import React from 'react'
import * as XLSX from "xlsx";
import axios from 'axios';

const AddStudent = () => {

      //  excel file Fetch Data
    let data;

    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // const
            data = XLSX.utils.sheet_to_json(ws);
            //  console.log(data);
        };
        reader.readAsBinaryString(file);
    };



    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            console.log('You clicked submit.');

            console.log(data);

            await axios.post("http://localhost:5000/admin/addstudent",
                { data: data },
                // { headers: { 'Content-Type': 'multipart/form-data' } }
            )


        } catch (err) {
            console.log(err);
            console.log("axios error hy bhai");
        }

    }


    return (
        <div>

            <form onSubmit={handleSubmit} method='POST'>

                <input type="file" onChange={onChange} name="upload_file" />
                <button>send</button>

            </form>

        </div>
    )
}

export default AddStudent








// import React , {useState} from 'react'
// // import axios from 'axios'

// const AddStudent = () => {

//     const [state, setState] = useState({
//         loading: true,
//         data: [],
//         selectedFile: null,
//     });
//     // const [data, setData] = useState([]);
//     // const [selectFile, setselectFile] = useState(null);


//     const handleChange = (e) => {
//         setState({
//             ...state ,
//              selectedFile : e.target.files[0]
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         formData.append(
//             'file',
//             state.selectedFile,
//             state.selectedFile.name
//           );

//           console.log(formData.append);

//         //   await  axios.post("" , {formData})
//     }



//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <p>
//                     <strong>Upload a .xlsx file:</strong>
//                 </p>
//                 <input onChange={handleChange} type="file" />
//                 <button type="submit">Upload</button>
//             </form>
//         </div>
//     )
// }

// export default AddStudent



