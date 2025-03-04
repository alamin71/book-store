// import { useNavigate } from "react-router-dom";
// import {
//   useDeleteOrderMutation,
//   useGetAllOrdersQuery,
// } from "../../../redux/features/orders/ordersApi";

// const ManageOrders = () => {
//   const navigate = useNavigate();
//   const {
//     data: orders,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useGetAllOrdersQuery();
//   // console.log("Orders Data:", orders);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }
//   // Handle deleting a order

//   const [deleteOrder] = useDeleteOrderMutation();
//   const handleDeleteOrder = async (id) => {
//     try {
//       await deleteOrder(id).unwrap();
//       alert("Order deleted successfully!");
//       refetch();
//     } catch (error) {
//       console.error("Failed to delete order:", error.message);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   return (
//     <section className="py-1 bg-blueGray-50">
//       <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//           <div className="rounded-t mb-0 px-4 py-3 border-0">
//             <div className="flex flex-wrap items-center">
//               <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                 <h3 className="font-semibold text-base text-blueGray-700">
//                   All Orders
//                 </h3>
//               </div>
//             </div>
//           </div>

//           <div className="block w-full overflow-x-auto">
//             <table className="items-center bg-transparent w-full border-collapse">
//               <thead>
//                 <tr>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     #
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Customer Name
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Total Amount
//                   </th>
//                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders && orders.length > 0 ? (
//                   orders.map((order, index) => (
//                     <tr key={order._id}>
//                       <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
//                         {index + 1}
//                       </th>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {order.name}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         ${order.totalPrice}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
//                         <button
//                           onClick={() =>
//                             navigate(`/dashboard/order-details/${order._id}`)
//                           }
//                           className="font-medium text-indigo-600 hover:text-indigo-700 mr-2 hover:underline underline-offset-2"
//                         >
//                           View Details
//                         </button>
//                         <button
//                           onClick={() => handleDeleteOrder(order._id)}
//                           className="font-medium bg-red-500 py-1 px-4 rounded-full text-white mr-2"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center py-3">
//                       No orders available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManageOrders;
// import { useNavigate } from "react-router-dom";
// import {
//   useDeleteOrderMutation,
//   useGetAllOrdersQuery,
// } from "../../../redux/features/orders/ordersApi";

// const ManageOrders = () => {
//   const navigate = useNavigate();
//   const {
//     data: orders,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useGetAllOrdersQuery();

//   if (isLoading) {
//     return <div className="text-center py-10 text-lg">Loading...</div>;
//   }

//   if (isError) {
//     return (
//       <div className="text-center py-10 text-red-500">
//         Error: {error.message}
//       </div>
//     );
//   }

//   // Handle deleting an order
//   const [deleteOrder] = useDeleteOrderMutation();
//   const handleDeleteOrder = async (id) => {
//     try {
//       await deleteOrder(id).unwrap();
//       alert("Order deleted successfully!");
//       refetch();
//     } catch (error) {
//       console.error("Failed to delete order:", error.message);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   return (
//     <section className="py-8 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white">
//             <h3 className="text-xl font-semibold">All Orders</h3>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white table-auto">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
//                     #
//                   </th>
//                   <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
//                     Customer Name
//                   </th>
//                   <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
//                     Total Amount
//                   </th>
//                   <th className="py-3 px-24 text-right text-sm font-medium text-gray-600">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders && orders.length > 0 ? (
//                   orders.map((order, index) => (
//                     <tr key={order._id} className="border-t">
//                       <td className="py-4 px-6 text-sm text-gray-700">
//                         {index + 1}
//                       </td>
//                       <td className="py-4 px-6 text-sm text-gray-700">
//                         {order.name}
//                       </td>
//                       <td className="py-4 px-6 text-sm text-gray-700">
//                         ${order.totalPrice}
//                       </td>
//                       <td className="py-4 px-6 text-sm text-gray-700 space-x-10">
//                         <button
//                           onClick={() =>
//                             navigate(`/dashboard/order-details/${order._id}`)
//                           }
//                           className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
//                         >
//                           View Details
//                         </button>
//                         <button
//                           onClick={() => handleDeleteOrder(order._id)}
//                           className="bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center py-4 text-gray-500">
//                       No orders available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManageOrders;
import { useNavigate } from "react-router-dom";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "../../../redux/features/orders/ordersApi";

const ManageOrders = () => {
  const navigate = useNavigate();

  // ✅ Always Call Hooks at the Top
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllOrdersQuery();

  const [deleteOrder] = useDeleteOrderMutation();

  // ✅ Delete Function Should be Outside JSX
  const handleDeleteOrder = async (id) => {
    try {
      await deleteOrder(id).unwrap();
      alert("Order deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to delete order:", error.message);
      alert("Failed to delete order. Please try again.");
    }
  };

  // ✅ Ensure Hooks Are Not Skipped
  if (isLoading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error?.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white">
            <h3 className="text-xl font-semibold">All Orders</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    #
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Customer Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Total Amount
                  </th>
                  <th className="py-3 px-24 text-right text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr key={order._id} className="border-t">
                      <td className="py-4 px-6 text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        {order.name}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        ${order.totalPrice.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700 space-x-10">
                        <button
                          onClick={() =>
                            navigate(`/dashboard/order-details/${order._id}`)
                          }
                          className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(order._id)}
                          className="bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No orders available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
