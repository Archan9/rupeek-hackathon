import React,{useState} from 'react'
import {Link} from 'react-router-dom';
const TrackBankLoan = () => {
    const [name, setname] = useState("");
    const [Bankname, setbankname] = useState("");
    const [Account, setaccount] = useState("");
    const [IFCE, setIFCE] = useState("");
    const [date, setdate] = useState("");
    const [emi, setemi] = useState("");
    const [loan,setloan]=useState("")
    const handleAdd=()=>{

    }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Track Bank Loans</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Bank name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Bank Name
            </label>
            <input
              type="text"
              value={Bankname}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setbankname(e.target.value)}
              placeholder="Bank Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Acccount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Account Number
            </label>
            <input
              type="text"
              value={Account}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setaccount(e.target.value)}
              placeholder="Account Number"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Ifsc code"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              IFSC code
            </label>
            <input
              type="text"
              value={IFCE}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setIFCE(e.target.value)}
              placeholder="IFSC code"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="LoanType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              select Loan type
            </label>
           <select
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"

            name="LoanType" onSelect={(e)=>setloan(e.target.value)} id="LoanType">
            <option value="personel">personel</option>
            <option value="home">Home</option>
            <option value="gold">Gold</option>
            <option value="education">Education</option>
           </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="EMI"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Monthly EMI
            </label>
            <input
              type="text"
              value={Account}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setemi(e.target.value)}
              placeholder="Monthly Emi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Date"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Loan
            </label>
            <input
              type="date"
              value={date}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setdate(e.target.value)}
              placeholder="Loan Date"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="button" onClick={handleAdd} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none">
                Start Tracking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TrackBankLoan