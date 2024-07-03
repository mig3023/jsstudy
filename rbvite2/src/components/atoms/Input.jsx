export default function Input({ lable, type = "text" }) {
  const id = "id";
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Name
      </label>
      <div className="mt-2">
        <input
          type={text}
          id={id}
          placeholder={`${lable}...`}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
