import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateUser = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const image = e.target.userPhoto.value;
    updateUser(name, image);
  };
  return (
    <div className="max-w-[1170px] mx-auto py-10">
      <Helmet>
        <title>E-Estate|Update</title>
      </Helmet>
      <p className="text-center mb-2 font-poppins text-2xl">
        Hi! {user?.displayName} <br />
        <span className="text-lg">{user?.email}</span>
      </p>
      <div className="flex justify-center">
        <img
          className="max-h-[100px] rounded-full mb-5"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <div className="text-center mb-4 text-xl font-poppins font-semibold">
        <p>You can Update your Info:</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleUpdate}>
          <input
            className="border p-2 rounded-lg mb-2 min-w-[300px] lg:min-w-[500px]"
            name="userName"
            type="text"
            defaultValue={user?.displayName}
          />
          <br />
          <input
            className="border p-2 rounded-lg mb-2 min-w-[300px] lg:min-w-[500px]"
            name="userPhoto"
            type="text"
            defaultValue={user?.photoURL}
          />
          <br />
          <button
            type="submit"
            className="px-3 py-1 bg-[#ff3e55] hover:bg-primary text-white rounded-lg"
          >
            Update Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
