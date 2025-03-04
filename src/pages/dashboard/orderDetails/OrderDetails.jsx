import { useParams } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../../redux/features/orders/ordersApi";

const OrderDetails = () => {
  const { id } = useParams();
  const { data: orders, isLoading, isError, error } = useGetAllOrdersQuery();
  // Filter Single Order
  const order = orders.find((o) => o._id === id);
  if (!order)
    return (
      <div className="text-center text-xl text-red-500">Order Not Found</div>
    );

  if (isLoading)
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-xl text-red-500">
        Error: {error?.message}
      </div>
    );
  if (!orders || orders.length === 0)
    return (
      <div className="text-center text-xl text-gray-500">No Orders Found</div>
    );

  //  Print Function
  const handlePrint = () => {
    const printContent = document.getElementById("printable-area").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload page to restore UI
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Order Details</h2>
        <button
          onClick={handlePrint}
          className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          🖨️ Print
        </button>
      </div>

      {/* Printable Section */}
      <div id="printable-area" className="space-y-6">
        {/* Customer Information */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Customer Information
          </h3>
          <p>
            <strong className="font-medium">Customer Name:</strong>{" "}
            {order?.name || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Email:</strong>{" "}
            {order?.email || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Phone:</strong>{" "}
            {order?.phone || "N/A"}
          </p>
        </div>

        {/* Shipping Address */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Shipping Address
          </h3>
          <p>
            <strong className="font-medium">City:</strong>{" "}
            {order?.address?.city || "N/A"}
          </p>
          <p>
            <strong className="font-medium">State:</strong>{" "}
            {order?.address?.state || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Country:</strong>{" "}
            {order?.address?.country || "N/A"}
          </p>
          <p>
            <strong className="font-medium">Zipcode:</strong>{" "}
            {order?.address?.zipcode || "N/A"}
          </p>
        </div>

        {/* Order Summary */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <p>
            <strong className="font-medium">Total Price:</strong> $
            {order?.totalPrice ? order.totalPrice.toFixed(2) : "0.00"}
          </p>
          <p>
            <strong className="font-medium">Status:</strong>{" "}
            {order?.status || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
