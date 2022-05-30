const studentsModal = require("../modals/studentsModal")

exports.addStudents = async (req, res)  => {

      //  excel file Fetch Data
        const Data = req.body.data;
        console.log(Data);

        for (let i = 0; i < Data.length; i++) {
            const result = Data[i];
            const RollNumber = Data[i].RollNumber
            const fullName = Data[i].fullName
            const fatherName = Data[i].fatherName
            const CNICNumber = Data[i].CNICNumber
            console.log(result);
            console.log(RollNumber);
            console.log(fullName);
            console.log(fatherName);
            console.log(CNICNumber);

        try {
            const StudentData = new studentsModal({
                 fullName: fullName ,
                  fatherName: fatherName ,
                  RollNumber : RollNumber ,
                  CNICNumber : CNICNumber
                });
            const result = await StudentData.save();
            console.log(result);
        } catch (err) {
            console.log(err);
            res.send("Error")
        }

        }

       
    }















// Requiring the module
// https://www.geeksforgeeks.org/how-to-read-and-write-excel-file-in-node-js/


// const reader = require('xlsx')

// // Reading our test file
//  const file = reader.readFile('./test.xlsx')

// exports.addStudents = (req, res) => {

//     let data = []

//     const sheets = file.SheetNames;

//     for (let i = 0; i < sheets.length; i++) {
//         const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[i]])
//         temp.forEach((res) => {
//             data.push(res)
//         })
//     }

//     // Printing data
//     console.log(data)

// }




// // Node.js program to demonstrate the 
// // fs.readFileSync() method
 
// // Include fs module
// const fs = require('fs');
  
// // Calling the fs.readFile() method
// // for reading file 'input1.txt'
// fs.readFile('./input1.txt',
//         {encoding:'utf8', flag:'r'},
//         function(err, data) {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// });