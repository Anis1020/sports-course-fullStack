import React, { useContext, useEffect, useState } from "react";
import BannerSection from "../../Components/HomePage/Banner/BannerSection";
import ClassSection from "../../Components/HomePage/ClassSection/ClassSection";
import InstructorsSection from "../../Components/HomePage/InstructorsSection/InstructorsSection";
import ReviewSection from "../../Components/HomePage/ReviewSection/ReviewSection";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Registration from "../Registration/Registration";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [allClass, setAllClass] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [myModal, setMyModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  // modal
  useEffect(() => {
    setIsModalOpen(false); // Set the modal to open when the component renders
  }, []);
  // const [buttonDisable, setButtonDisable] = useState(false);
  //http://localhost:5000/allClass

  useEffect(() => {
    // <button className="btn" onClick={() => window.my_modal_5.showModal()}>
    //   open modal
    // </button>;
    // window.my_modal_5.showModal();
  }, []);
  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/allClass", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllClass(data.splice(0, 6));
      });
  }, []);

  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        const filter = data.filter((user) => user.role === "instructor");

        setAllUser(filter.splice(0, 6));
      });
  }, []);

  const handleSelectedClass = (user, classes) => {
    if (!user) {
      return alert("you have to login first to select any class");
    }
    fetch(
      "https://assignment-12-sever-side-anis1020.vercel.app/selectedClass",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classes),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully selected",
            showConfirmButton: false,
            timer: 1500,
          });

          // setButtonDisable(true);
        }
        console.log(data);
      });
  };

  const handlemodal = () => {
    setMyModal(!myModal);
    console.log("hi");
  };
  return (
    <div>
      <BannerSection />
      <ClassSection
        allClass={allClass}
        handleSelectedClass={handleSelectedClass}
        user={user}
      />
      <InstructorsSection allUser={allUser} />
      {/* <div className="flex flex-col md:flex-row"></div> */}
      <ReviewSection />

      {isModalOpen && (
        <>
          {/* You can open the modal using ID.showModal() method */}
          {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>
            open modal
          </button> */}
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </form>
          </dialog>
        </>
      )}
      {/* {!myModal ? (
        <div method="dialog" className=" w-full relative">
          <Registration />
          <div className="modal-action">
            <button
              onClick={handlemodal}
              className="btn btn-sm btn-circle btn-ghost absolute right-[320px] top-5"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <BannerSection />
          <ClassSection
            allClass={allClass}
            handleSelectedClass={handleSelectedClass}
            user={user}
          />
          <InstructorsSection allUser={allUser} />
          <ReviewSection />
        </>
      )} */}
    </div>
  );
};

export default Home;
