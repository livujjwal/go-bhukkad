import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-full h-full mx-auto flex items-center justify-center my-10">
      <h1 className="font-semibold ">Oops</h1>
      <h2 className="font-semibold ">
        {error.status} : {error.statusText}
      </h2>
      <h2>{error.data}</h2>
    </div>
  );
};
export default Error;
