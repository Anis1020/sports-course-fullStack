import React, { useEffect, useState } from "react";

const EnroledClass = () => {
  const [enrolled, setEnrolled] = useState([]);
  const [item, setItem] = useState(false);
  useEffect(() => {
    fetch("https://assignment-12-sever-side-anis1020.vercel.app/enrolledCls", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
      });
  }, [item]);
  console.log(enrolled);
  const handledelete = (id) => {
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/deletedHistory/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setItem(true);
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h3>enrolled classes coming soon</h3>
      <div className="grid lg:grid-cols-2 gap-4">
        {enrolled.map((item) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-2xl"
            key={item._id}
          >
            <figure>
              <img src={item.classImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>{item.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handledelete(item._id)}
                  className="btn btn-primary"
                >
                  Delete From history
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnroledClass;
