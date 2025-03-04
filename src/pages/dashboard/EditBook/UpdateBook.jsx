// import React, { useEffect } from "react";

// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import {
//   useFetchBookByIdQuery,
//   useUpdateBookMutation,
// } from "../../../redux/features/books/booksApi";
// // import Loading from "../../../components/Loading";
// import Swal from "sweetalert2";
// import axios from "axios";
// // import getBaseUrl from "../../../utils/baseURL";
// import InputField from "../addBokk/InputField";
// import SelectField from "../addBokk/SelectField";
// import getBaseUrl from "../../../utils/baseUrl";

// const UpdateBook = () => {
//   const { id } = useParams();
//   const {
//     data: bookData,
//     isLoading,
//     isError,
//     refetch,
//   } = useFetchBookByIdQuery(id);
//   // console.log(bookData)
//   const [updateBook] = useUpdateBookMutation();
//   const { register, handleSubmit, setValue, reset } = useForm();
//   useEffect(() => {
//     if (bookData) {
//       setValue("title", bookData.title);
//       setValue("description", bookData.description);
//       setValue("category", bookData?.category);
//       setValue("trending", bookData.trending);
//       setValue("oldPrice", bookData.oldPrice);
//       setValue("newPrice", bookData.newPrice);
//       setValue("coverImage", bookData.coverImage);
//     }
//   }, [bookData, setValue]);

//   const onSubmit = async (data) => {
//     const updateBookData = {
//       title: data.title,
//       description: data.description,
//       category: data.category,
//       trending: data.trending,
//       oldPrice: Number(data.oldPrice),
//       newPrice: Number(data.newPrice),
//       coverImage: data.coverImage || bookData.coverImage,
//     };
//     try {
//       await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updateBookData, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       Swal.fire({
//         title: "Book Updated",
//         text: "Your book is updated successfully!",
//         icon: "success",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, It's Okay!",
//       });
//       await refetch();
//     } catch (error) {
//       console.log("Failed to update book.");
//       alert("Failed to update book.");
//     }
//   };
//   // if (isLoading) return <Loading />;
//   if (isError) return <div>Error fetching book data</div>;
//   return (
//     <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputField
//           label="Title"
//           name="title"
//           placeholder="Enter book title"
//           register={register}
//         />

//         <InputField
//           label="Description"
//           name="description"
//           placeholder="Enter book description"
//           type="textarea"
//           register={register}
//         />

//         <SelectField
//           label="Category"
//           name="category"
//           options={[
//             { value: "", label: "Choose A Category" },
//             { value: "business", label: "Business" },
//             { value: "technology", label: "Technology" },
//             { value: "fiction", label: "Fiction" },
//             { value: "horror", label: "Horror" },
//             { value: "adventure", label: "Adventure" },
//           ]}
//           register={register}
//         />
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               {...register("trending")}
//               className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-sm font-semibold text-gray-700">
//               Trending
//             </span>
//           </label>
//         </div>

//         <InputField
//           label="Old Price"
//           name="oldPrice"
//           type="number"
//           placeholder="Old Price"
//           register={register}
//         />

//         <InputField
//           label="New Price"
//           name="newPrice"
//           type="number"
//           placeholder="New Price"
//           register={register}
//         />

//         <InputField
//           label="Cover Image URL"
//           name="coverImage"
//           type="text"
//           placeholder="Cover Image URL"
//           register={register}
//         />

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
//         >
//           Update Book
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateBook;
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useFetchBookByIdQuery,
  useUpdateBookMutation,
} from "../../../redux/features/books/booksApi";
import Swal from "sweetalert2";
import axios from "axios";
import InputField from "../addBokk/InputField";
import SelectField from "../addBokk/SelectField";
import getBaseUrl from "../../../utils/baseUrl";

const UpdateBook = () => {
  const { id } = useParams();
  const {
    data: bookData,
    isLoading,
    isError,
    refetch,
  } = useFetchBookByIdQuery(id);

  const [updateBook] = useUpdateBookMutation();
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (bookData) {
      setValue("title", bookData.title);
      setValue("description", bookData.description);
      setValue("category", bookData?.category);
      setValue("trending", bookData.trending);
      setValue("oldPrice", bookData.oldPrice);
      setValue("newPrice", bookData.newPrice);
      setValue("coverImage", bookData.coverImage);
    }
  }, [bookData, setValue]);

  const onSubmit = async (data) => {
    const updateBookData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || bookData.coverImage,
    };

    try {
      await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updateBookData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      Swal.fire({
        title: "Book Updated",
        text: "Your book has been updated successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      await refetch();
    } catch (error) {
      console.error("Failed to update book.");
      alert("Failed to update book.");
    }
  };

  if (isError) return <div>Error fetching book data</div>;

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Book</h2>

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <InputField
              label="Title"
              name="title"
              placeholder="Enter book title"
              register={register}
            />

            {/* Description */}
            <InputField
              label="Description"
              name="description"
              placeholder="Enter book description"
              type="textarea"
              register={register}
            />

            {/* Category */}
            <SelectField
              label="Category"
              name="category"
              options={[
                { value: "", label: "Choose A Category" },
                { value: "business", label: "Business" },
                { value: "technology", label: "Technology" },
                { value: "fiction", label: "Fiction" },
                { value: "horror", label: "Horror" },
                { value: "adventure", label: "Adventure" },
              ]}
              register={register}
            />

            {/* Trending Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("trending")}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 text-gray-700 text-sm">Trending</label>
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Old Price"
                name="oldPrice"
                type="number"
                placeholder="Old Price"
                register={register}
              />
              <InputField
                label="New Price"
                name="newPrice"
                type="number"
                placeholder="New Price"
                register={register}
              />
            </div>

            {/* Cover Image URL */}
            <InputField
              label="Cover Image URL"
              name="coverImage"
              type="text"
              placeholder="Cover Image URL"
              register={register}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateBook;
