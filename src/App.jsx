
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import { FiCheckCircle, FiClock, FiUsers, FiXCircle } from 'react-icons/fi';

const branchData = {
  'Branch 1': {
    tokenData: [
      { name: 'In Queue', value: 25, icon: <FiUsers />, color: 'bg-blue-500' },
      { name: 'Issued', value: 245, icon: <FiClock />, color: 'bg-purple-500' },
      { name: 'Served', value: 198, icon: <FiCheckCircle />, color: 'bg-green-500' },
      { name: 'Rejected', value: 12, icon: <FiXCircle />, color: 'bg-red-500' },
    ],
    serviceData: [
      { name: 'Bill Payment', value: 45 },
      { name: 'Cash Deposit', value: 32 },
      { name: 'Account Opening', value: 18 },
      { name: 'Loan Inquiry', value: 5 },
    ],
    topServiceData: {
      Daily: [
        { name: 'Cash Deposit', value: 10 },
        { name: 'Bill Payment', value: 8 },
        { name: 'Loan Inquiry', value: 4 },
      ],
      Weekly: [
        { name: 'Bill Payment', value: 32 },
        { name: 'Cash Deposit', value: 28 },
        { name: 'Account Opening', value: 14 },
      ],
      Monthly: [
        { name: 'Bill Payment', value: 100 },
        { name: 'Cash Deposit', value: 86 },
        { name: 'Account Opening', value: 55 },
      ],
    },
  },
  // You can define similar data for Branch 2, Branch 3, and Branch 4
  'Branch 2': {
    tokenData: [
        { name: 'In Queue', value: 15, icon: <FiUsers />, color: 'bg-blue-500' },
        { name: 'Issued', value: 245, icon: <FiClock />, color: 'bg-purple-500' },
        { name: 'Served', value: 198, icon: <FiCheckCircle />, color: 'bg-green-500' },
        { name: 'Rejected', value: 12, icon: <FiXCircle />, color: 'bg-red-500' },
      ],
      serviceData: [
        { name: 'Bill Payment', value: 45 },
        { name: 'Cash Deposit', value: 32 },
        { name: 'Account Opening', value: 18 },
        { name: 'Loan Inquiry', value: 5 },
      ],
      topServiceData: {
        Daily: [
          { name: 'Cash Deposit', value: 10 },
          { name: 'Bill Payment', value: 8 },
          { name: 'Loan Inquiry', value: 4 },
        ],
        Weekly: [
          { name: 'Bill Payment', value: 32 },
          { name: 'Cash Deposit', value: 28 },
          { name: 'Account Opening', value: 14 },
        ],
        Monthly: [
          { name: 'Bill Payment', value: 100 },
          { name: 'Cash Deposit', value: 86 },
          { name: 'Account Opening', value: 55 },
        ],
      },
   },
  'Branch 3': { /* similar structure with different values */ },
  'Branch 4': { /* similar structure with different values */ },
};

function App() {

 
  
 

  return (
  <div className='space-y-8'>
  <div className='border-4 py-8 border-red-800 w-full mx-auto'>
    <Navbar  context={branchData}></Navbar>
  </div>

<main className='max-w-10/12 border-4  border-red-800 mx-auto py-36'>
<Outlet  context={branchData} ></Outlet>
</main>
<footer className='py-8 w-full border-4 border-red-800  mx-auto'>
  footer
</footer>
  </div>
  )
}

export default App
