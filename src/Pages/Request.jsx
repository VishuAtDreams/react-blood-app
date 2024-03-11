import { useState } from "react";
// import axios from "axios";

const Request = () => {
  const [requests, setRequests] = useState([
    {
      _id: "65e2deee90356864917ec66e",
      type: "Blood",
      status: "Pending",
      name: "Vishwajeet Patil",
      phone: "7620705446",
      date: "2024-03-04T06:30:00.000Z",
      bloodGroup: "A+",
      needUnits: 2,
      gotUnits: 0,
      address: {
        place_id: "ChIJPT_XkVnAwjsRBL2XbTD0_tg",
        text: "Agarkar Nagar, Pune, Maharashtra, India",
        city: "",
        state: "",
        country: "",
        latitude: 18.52808,
        longitude: 73.8720171,
        _id: "65e2deee90356864917ec66f",
      },
      isCritical: true,
    },
    {
      _id: "65e4367b8adc0aa327736a80",
      type: "Blood",
      status: "Open",
      name: "gaja",
      phone: "9696969696",
      date: "2024-03-04T22:54:00.000Z",
      bloodGroup: "B-",
      needUnits: 3,
      gotUnits: 0,
      address: {
        place_id: "ChIJxRgZJxTAwjsRP01JDD_mPPo",
        text: "Swargate, Pune, Maharashtra, India",
        city: "",
        state: "",
        country: "",
        latitude: 18.5018322,
        longitude: 73.8635912,
        _id: "65e4367b8adc0aa327736a81",
      },
      isCritical: true,
    },
  ]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.REACT_APP_DOMAIN_URL}/requests`,
  //         {
  //           headers: {
  //             Authorization: sessionStorage.getItem("auth"),
  //           },
  //         }
  //       );
  //       const { data, error } = res;
  //       if (data && data.data) {
  //         const updatedData = data.data.map((request) => {
  //           const date = new Date(request.date);
  //           const day =
  //             date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  //           const month =
  //             date.getMonth() < 9
  //               ? `0${date.getMonth() + 1}`
  //               : date.getMonth() + 1; // Months are zero-based
  //           const year = date.getFullYear();
  //           return {
  //             ...request,
  //             date: `${day}-${month}-${year}`,
  //           };
  //         });
  //         setRequests(updatedData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  // const handleStatusChange = (index, event) => {
  //   const newData = [...requests];
  //   newData[index].status = event.target.value;
  //   setRequests(newData);
  // };
  // setRequests();
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Requests</h4>
          <p className="card-description">
            {/* Add class <code>.table-hover</code> */}
          </p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Phone</th>
                  <th>Blood Group</th>
                  <th>Need Units</th>
                  <th>Got Units</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {requests &&
                  requests.map((request, index) => (
                    <tr key={index}>
                      <td>{request.name}</td>
                      <td>{request.phone}</td>
                      <td>{request.bloodGroup}</td>
                      <td>{request.needUnits}</td>
                      <td>{request.gotUnits}</td>
                      <td>
                        <select
                          className={
                            request.status === "Open"
                              ? "badge badge-success"
                              : request.status === "Closed"
                              ? "badge badge-danger"
                              : "badge badge-warning"
                          }
                          value={request.status}
                          // onChange={(event) => handleStatusChange(index, event)}
                        >
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td>
                        <i className="icons fa-regular fa-eye"></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
