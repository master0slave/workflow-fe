// import ObjectRender from "./component/ObjectRender";

// const name = "Nonthiwat";
// const age = 40;
// const alive = true;
// const App = () => {
//   return (<div>
//     <ObjectRender/>
//     Hello, 
//     {name} <br></br>
//     {age}
//     {alive}
//     </div>
//   );
// };

// export default App ;

import { title } from "process";
import Quiz1 from "./component/Quiz1";
import Quiz2 from "./component/Quiz2";
import Quiz3 from "./component/Quiz3";
import Quiz4 from "./component/Quiz4";
import { Anonymous_Pro } from "next/font/google";
const Home = () => {

  return (
    <div>
      <Quiz1 />
      <Quiz2 />
      <Quiz3 />
      <Quiz4 />
      <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Image
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Amount
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="Monitor" className="max-w-full h-28 object-cover rounded"/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        Monitor
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        $2500.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Approve
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Reject
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Hard Disk/SSD" className="max-w-full h-28 object-cover rounded"/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        Hard Disk/SSD
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        $2000.75
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Approve
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Reject
          </button>
        </div>
      </td>
    </tr>
    {
      items.map((item,index) => (
        <TableRow key={index} />
      ))
    }
  </tbody>
</table>

    </div>
  );
}

const items = [{
  image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  title: "Monitor",
  amount: "$2500.00"
},
{
  image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  title: "Hard Disk/SSD",
  amount: "$2000.75"
}];
const TableRow = () => {
  return (
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="Monitor" className="max-w-full h-28 object-cover rounded"/>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      Monitor
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      $2500.00
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <div className="flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Approve
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Reject
        </button>
      </div>
    </td>
  </tr>
  )
}
export default Home;